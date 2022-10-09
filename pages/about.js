import Head from "next/head";

const About = () => {
	return (
		<>
			<Head>
				<title>Ninja List | About</title>
				{/* Giving search engine more info using meta keyword */}
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1>About</h1>
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
			</div>
		</>
	);
};

export default About;
