const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<p>Copyright {year} Ninja List</p>
		</footer>
	);
};

export default Footer;
