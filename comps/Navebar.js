import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/ninjaLogo.jpg" width={110} height={80} />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ninjas">
				<a>Ninja Listing</a>
			</Link>
		</nav>
	);
};

export default Navbar;
