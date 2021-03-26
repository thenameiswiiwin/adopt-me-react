const Pet = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h2', {}, props.name),
		React.createElement('h3', {}, props.animal),
		React.createElement('h3', {}, props.breed),
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, 'Adopt Me!'),
		React.createElement(Pet, {
			name: 'Sadie',
			animal: 'Dog',
			breed: 'Shepherd Chow',
		}),
		React.createElement(Pet, {
			name: 'Offie',
			animal: 'Cat',
			breed: 'Maine Coon Mix',
		}),
		React.createElement(Pet, {
			name: 'Sudo',
			animal: 'Dog',
			breed: 'Wheaten Terrier',
		}),
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
