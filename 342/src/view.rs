use failure::ResultExt;
use std::io::Write;
use termion::clear;

pub fn write_pomodoro_timer(
    stdout: &mut impl Write,
    remaining_time: u64,
    mode: &str,
) -> Result<(), failure::Error> {
    write!(
        stdout,
        "{timer_cursor}{clear}☕️ {mode}: {remaining_time} {desc_cursor}[Q]: quit, [Space]: pause/resume",
        timer_cursor = termion::cursor::Goto(2, 1),
        clear = clear::All,
        mode = mode,
        remaining_time = convert_to_mins(remaining_time),
        desc_cursor = termion::cursor::Goto(2, 2)
    )
    .context("failed to write to stdout")?;
    stdout.flush().context("failed to flush stdout")?;
    Ok(())
}

pub fn release_raw_mode(stdout: &mut impl Write) -> Result<(), failure::Error> {
    write!(
        stdout,
        "{}{}",
        termion::cursor::Goto(1, 1),
        termion::cursor::Show
    )
    .context("failed to release raw mode")?;
    Ok(())
}

fn convert_to_mins(seconds: u64) -> String {
    let secs = seconds % 60;
    let minutes = seconds / 60;
    format!("{:02}:{:02}", minutes, secs)
}
