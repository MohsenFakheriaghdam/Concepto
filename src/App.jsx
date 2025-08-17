import Container from "./components/layout/Container";

function HomePage() {
	return (
		<Container>
			<div className="col-span-2 md:col-span-8 bg-primary_primary text-white p-4 rounded-lg">
				<h1>Main Content</h1>
			</div>
			<div className="col-span-2 md:col-span-4 bg-secondary_secondary text-white p-4 rounded-lg">Sidebar</div>
		</Container>
	);
}
export default HomePage;
