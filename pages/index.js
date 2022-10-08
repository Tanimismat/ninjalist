import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navebar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Navbar></Navbar>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae
				eius, quo suscipit necessitatibus deleniti impedit sunt aperiam,
				inventore voluptatem unde. Laudantium placeat veniam similique
				recusandae numquam aperiam ea fugiat, aliquam facere blanditiis quo
				saepe expedita totam vero dolore cupiditate ipsum nihil, architecto
				velit enim eum! Earum eius iusto veniam.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae
				eius, quo suscipit necessitatibus deleniti impedit sunt aperiam,
				inventore voluptatem unde. Laudantium placeat veniam similique
				recusandae numquam aperiam ea fugiat, aliquam facere blanditiis quo
				saepe expedita totam vero dolore cupiditate ipsum nihil, architecto
				velit enim eum! Earum eius iusto veniam.
			</p>
			<Link href="/ninjas">
				<a>See all ninjas</a>
			</Link>
			<Footer></Footer>
		</div>
	);
}
