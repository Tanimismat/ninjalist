import Footer from "./Footer";
import Navbar from "./Navebar";

const Layout = ({ children }) => {
	return (
		<div className="content">
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</div>
	);
};

export default Layout;
