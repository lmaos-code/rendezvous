use std::io::stdin;
use std::sync::mpsc::{self, Receiver};
use std::thread;

use termion::event::Key;
use termion::input::TermRead;

pub enum KeyAction {
    Quit,
    Pause,
    NoAction,
}

pub fn get_key_action() -> Receiver<KeyAction> {
    let (tx, rx) = mpsc::channel::<KeyAction>();
    thread::spawn(move || loop {
        let stdin = stdin().keys();
        for c in stdin {
            match c.unwrap() {
                Key::Char('q') => {
                    tx.send(KeyAction::Quit).unwrap();
                    break;
                }
                Key::Char(' ' | 'p') => tx.send(KeyAction::Pause).unwrap(),
                _ => (),
            }
        }
    });
    rx
}
