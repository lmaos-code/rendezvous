
fn main(){
	println!("{}",depth_json("[{ \"a\": [] }, [\"abc\"]]".to_string()))
}

fn depth_json(json: String) -> i32 {
	let mut depth = 0;
	let mut max_depth = 0;
	for c in json.chars(){
		if c == '{' || c == '['{
			depth += 1;
			max_depth = if depth > max_depth { depth } else { max_depth };
		}
		else if c == '}' || c == '['{
			depth -= 1;
		}
	}
	max_depth
}