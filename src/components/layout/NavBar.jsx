import React from "react";

const { useState, useEffect } = React;

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		alert(`Searching for: ${searchQuery}`);
		setSearchQuery("");
	};

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Logo and main nav */}
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<i className="fas fa-cube text-indigo-600 text-2xl mr-2"></i>
							<span className="text-xl font-bold text-gray-800">BrandName</span>
						</div>
						<div className="hidden md:ml-10 lg:flex md:space-x-8">
							<a
								href="#"
								className="text-indigo-600 border-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								Home
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
							>
								Products
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
							>
								Services
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
							>
								About
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
							>
								Contact
							</a>
						</div>
					</div>

					{/* Search and buttons */}
					<div className="hidden lg:flex items-center space-x-4">
						<form onSubmit={handleSearch} className="relative">
							<input
								type="text"
								placeholder="Search..."
								className="search-input bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
								<i className="fas fa-search"></i>
							</button>
						</form>

						<div className="flex space-x-2">
							<button className="px-4 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors">
								Log In
							</button>
							<button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm">
								Sign Up
							</button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="-mr-2 flex items-center lg:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? <i className="fas fa-times text-xl"></i> : <i className="fas fa-bars text-xl"></i>}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`mobile-menu lg:hidden ${isMenuOpen ? "open" : ""}`}>
				<div className="pt-2 pb-4 px-4 space-y-1 bg-white shadow-lg">
					<form onSubmit={handleSearch} className="relative mb-4">
						<input
							type="text"
							placeholder="Search..."
							className="search-input bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
							<i className="fas fa-search"></i>
						</button>
					</form>

					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50">
						Home
					</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50">
						Products
					</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50">
						Services
					</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50">
						About
					</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50">
						Contact
					</a>

					<div className="pt-4 border-t border-gray-200">
						<button className="w-full px-4 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 mb-2">Log In</button>
						<button className="w-full px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
