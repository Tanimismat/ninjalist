const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div>
			<p>Copyright {year} Ninja List</p>
		</div>
	);
};

export default Footer;
