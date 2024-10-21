import logo from "./logo.svg";
import "./App.css";
import Greetings from "./components/Greetings.jsx";
import Button from "./components/Button.jsx";
import Avatar from "./components/avatar.jsx";

let users = [
	{
		id: 1,
		avatar:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Kylie_Jenner_in_2021.jpg/330px-Kylie_Jenner_in_2021.jpg",
		name: "Kylie Zener",
		rounded: false,
	},
	{
		id: 2,
		avatar:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Kylie_Jenner_in_2021.jpg/330px-Kylie_Jenner_in_2021.jpg",
		name: "Kylie Zener",
		rounded: false,
	},
];

const userAvatars = users.map((user) => (
	<Avatar
		src={user.avatar}
		name={user.name}
		rounded={user.rounded}
		key={user.id}
	/>
));

console.log(userAvatars);

function App() {
	return (
		<div className="App">
			<Greetings />
			{userAvatars}
			<Button text="I'm a button" />
		</div>
	);
}

export default App;
