use keyboard::KeyAction;
use std::io::Write;
use std::sync::mpsc::Receiver;
use structopt::StructOpt;
use termion::raw::IntoRawMode;

mod keyboard;
mod view;

#[derive(StructOpt)]
struct Options {
    #[structopt(short = "w", long = "work", default_value = "1500")]
    work_sec: u64,
    #[structopt(short = "b", long = "break", default_value = "300")]
    break_sec: u64,
}

fn main() {
    // get options from cli
    let options = Options::from_args();

    // TODO: implement keybooard interrupts
    let rx = keyboard::get_key_action();
    loop {
        // start work timer
        if start_timer(
            options.work_sec,
            &mut std::io::stdout().into_raw_mode().unwrap(),
            &rx,
            "work",
        )
        .unwrap()
        {
            break;
        }

        // start break timer
        if start_timer(
            options.break_sec,
            &mut std::io::stdout().into_raw_mode().unwrap(),
            &rx,
            "break",
        )
        .unwrap()
        {
            break;
        }
    }
}

fn start_timer(
    remaining_time: u64,
    stdout: &mut impl Write,
    rx: &Receiver<KeyAction>,
    mode: &str,
) -> Result<bool, failure::Error> {
    let mut remaining_time = remaining_time;
    let mut paused = false;
    while remaining_time > 0 {
        match handle_input(rx) {
            keyboard::KeyAction::Quit => {
                view::release_raw_mode(stdout)?;

                return Ok((true));
            }
            keyboard::KeyAction::Pause => paused = !paused,
            _ => {}
        }
        if !paused {
            remaining_time -= 1;
            view::write_pomodoro_timer(stdout, remaining_time, mode)?;
        }
        spin_sleep::sleep(std::time::Duration::from_secs(1));
    }
    Ok((false))
}

fn handle_input(rx: &Receiver<KeyAction>) -> KeyAction {
    match rx.try_recv() {
        Ok(action) => action,
        Err(_) => KeyAction::NoAction,
    }
}
