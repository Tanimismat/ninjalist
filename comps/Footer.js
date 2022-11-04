import { Eye } from "@styled-icons/bootstrap";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<p>Copyright {year} Ninja List</p>
			<Eye width={16} height={16} />
		</footer>
	);
};

export default Footer;
