function Avatar(props) {
	const { src, name, rounded } = props;

	const divStyles = {
		border: "1px solid black",
		margin: "auto",
		marginTop: "30px",
		padding: "20px",
		width: "400px",
		borderRadius: "10%",
	};
	const imgStyles = {
		border: "1px solid black",
		borderRadius: rounded ? "50%" : "16px",
		width: 200,
	};
	return (
		<div style={divStyles}>
			<img src={src} alt="Avatar" style={imgStyles} />
			<h4 style={{ color: "black" }}>{name}</h4>
		</div>
	);
}

export default Avatar;
