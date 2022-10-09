import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navebar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				{/* Giving search engine more info using meta keyword */}
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae
					eius, quo suscipit necessitatibus deleniti impedit sunt aperiam,
					inventore voluptatem unde. Laudantium placeat veniam similique
					recusandae numquam aperiam ea fugiat, aliquam facere blanditiis quo
					saepe expedita totam vero dolore cupiditate ipsum nihil, architecto
					velit enim eum! Earum eius iusto veniam.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae
					eius, quo suscipit necessitatibus deleniti impedit sunt aperiam,
					inventore voluptatem unde. Laudantium placeat veniam similique
					recusandae numquam aperiam ea fugiat, aliquam facere blanditiis quo
					saepe expedita totam vero dolore cupiditate ipsum nihil, architecto
					velit enim eum! Earum eius iusto veniam.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See all ninjas</a>
				</Link>
			</div>
		</>
	);
}
