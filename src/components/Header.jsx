export function Header(props) {
	const { title } = props;
	// console.log(title);
	// console.log(props);
	//inline destructuring
	return (
		<header className="bg-blue-600 text-white p-4 shadow-md">
			<h1 className="text-xl font-semibold">{title}</h1>
		</header>
	);
}

// props are values that are passed between
// components
