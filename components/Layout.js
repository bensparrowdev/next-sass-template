import React from 'react';

export default function Layout({ children }) {
	return (
		<div>
			<nav>navbar</nav>
			<main>{children}</main>
			<footer>footer</footer>
		</div>
	);
}
