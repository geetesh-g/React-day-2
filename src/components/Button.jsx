function Button(props) {
	const { text } = props;
	const styles = { border: "1px solid red", borderRadius: "5px" };
	return (
		<>
			<button style={styles}>{text}</button>
		</>
	);
}

export default Button;
