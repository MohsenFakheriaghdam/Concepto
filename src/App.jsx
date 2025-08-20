// import Footer from "../components/layout/Footer";
// import Navbar from "../components/layout/NavBar";
// import Header from "../components/layout/Header";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";

function App() {
	return (
		<div className="min-w-80 min-h-screen">
			{/* Your main content would go here */}
			{/* <div className="min-h-screen min-w-80"> */}
			<Navbar />
			<HomePage />
			{/* <CompanyPage /> */}
			{/* </div> */}
			<Footer />
		</div>
	);
}
export default App;
