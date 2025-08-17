import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";

function HomePage() {
	return (
		<div>
			{/* Your main content would go here */}
			<div className="min-h-screen">
				<Navbar />
				<div className="pt-24 px-4">
					<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
						<h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to our website</h1>
						<p className="text-lg text-gray-600 mb-8">
							This is a demonstration of a responsive navbar built with React and Tailwind CSS. Scroll down to see the navbar change
							style, or resize the window to see the mobile menu.
						</p>
						<div className="h-screen"></div>
						<p className="text-lg text-gray-600">You've scrolled down! Notice how the navbar became more compact.</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default HomePage;
