import React from "react";

const { useState, useEffect } = React;

export default function HomePage() {
	const [stats, setStats] = useState([
		{ value: 1245, label: "Active Companies", icon: "building" },
		{ value: 328, label: "Total Investment ($M)", icon: "money-bill-wave" },
		{ value: 8560, label: "Investors", icon: "users" },
	]);

	const categories = [
		"Technology",
		"Finance",
		"Healthcare",
		"E-commerce",
		"Education",
		"Artificial Intelligence",
		"Blockchain",
		"Renewable Energy",
		"Food & Beverage",
		"Entertainment",
	];

	const popularCompanies = [
		{
			id: 1,
			name: "TechNova",
			category: "Artificial Intelligence",
			followers: 1245,
			investors: 86,
			description: "Revolutionizing business with AI-powered solutions",
			location: "USA, San Francisco",
			rating: 4.8,
			logo: "https://via.placeholder.com/80",
		},
		{
			id: 2,
			name: "GreenPower",
			category: "Renewable Energy",
			followers: 982,
			investors: 45,
			description: "Sustainable energy solutions for the future",
			location: "Germany, Berlin",
			rating: 4.6,
			logo: "https://via.placeholder.com/80",
		},
		{
			id: 3,
			name: "FinEdge",
			category: "Finance",
			followers: 1560,
			investors: 112,
			description: "Next-gen financial services platform",
			location: "UK, London",
			rating: 4.9,
			logo: "https://via.placeholder.com/80",
		},
		{
			id: 4,
			name: "HealthPlus",
			category: "Healthcare",
			followers: 876,
			investors: 34,
			description: "Innovative healthcare technology solutions",
			location: "Canada, Toronto",
			rating: 4.5,
			logo: "https://via.placeholder.com/80",
		},
		{
			id: 5,
			name: "ShopSphere",
			category: "E-commerce",
			followers: 2045,
			investors: 156,
			description: "The future of online shopping",
			location: "USA, New York",
			rating: 4.7,
			logo: "https://via.placeholder.com/80",
		},
	];

	const jobOpportunities = [
		{ id: 1, company: "TechNova", logo: "https://via.placeholder.com/60", positions: 12 },
		{ id: 2, company: "GreenPower", logo: "https://via.placeholder.com/60", positions: 8 },
		{ id: 3, company: "FinEdge", logo: "https://via.placeholder.com/60", positions: 15 },
		{ id: 4, company: "HealthPlus", logo: "https://via.placeholder.com/60", positions: 6 },
		{ id: 5, company: "ShopSphere", logo: "https://via.placeholder.com/60", positions: 22 },
		{ id: 6, company: "DataMind", logo: "https://via.placeholder.com/60", positions: 9 },
		{ id: 7, company: "CloudNest", logo: "https://via.placeholder.com/60", positions: 11 },
	];

	const newsAndEvents = [
		{
			id: 1,
			title: "Annual Startup Summit 2023",
			date: "June 15, 2023",
			description: "Join the biggest gathering of innovators and investors this year",
			image: "https://via.placeholder.com/300x200",
		},
		{
			id: 2,
			title: "New Funding Opportunities",
			date: "May 28, 2023",
			description: "Government announces $50M fund for green technology startups",
			image: "https://via.placeholder.com/300x200",
		},
		{
			id: 3,
			title: "TechNova Wins Innovation Award",
			date: "May 15, 2023",
			description: "Recognized for breakthrough AI technology in healthcare",
			image: "https://via.placeholder.com/300x200",
		},
	];

	const [activeCategory, setActiveCategory] = useState("All");

	return (
		<div className="min-h-screen ">
			{/* Hero Section */}
			{/* gradient-bg */}
			<div className="bg-gray-100 text-[#0F1557] py-20 px-4 sm:px-6 lg:px-8 h-[500px] flex items-center justify-center">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Smarter Search, Better Results</h1>
					<p className="text-xl sm:text-2xl opacity-90">
						Concepto is the first authoritative reference for introducing Iranian startups and companies
					</p>
				</div>
			</div>

			{/* Stats Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
							<div className="text-indigo-600 text-4xl mb-2">
								<i className={`fas fa-${stat.icon}`}></i>
							</div>
							<h3 className="text-3xl font-bold text-[#0F1557]">{stat.value.toLocaleString()}</h3>
							<p className="text-gray-600 mt-2">{stat.label}</p>
						</div>
					))}
				</div>
			</div>

			{/* Categories Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
				<div className="flex flex-wrap justify-center gap-3">
					{categories.map((category, index) => (
						<button
							key={index}
							className={`category-chip px-4 py-2 rounded-full ${
								activeCategory === category ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
							} shadow-sm border border-gray-200 font-medium`}
							onClick={() => setActiveCategory(category)}
						>
							{category}
						</button>
					))}
				</div>
			</div>

			{/* Popular Companies Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Companies</h2>
					<a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
						View All
					</a>
				</div>
				<div className="relative">
					<div className="scroll-container overflow-x-auto pb-4">
						<div className="flex space-x-6" style={{ minWidth: `${popularCompanies.length * 320}px` }}>
							{popularCompanies.map((company) => (
								<div key={company.id} className="company-card bg-white rounded-xl shadow-md overflow-hidden w-80 flex-shrink-0">
									<div className="p-6">
										<div className="flex items-center mb-4">
											<img src={company.logo} alt={company.name} className="w-16 h-16 rounded-full object-cover mr-4" />
											<div>
												<h3 className="font-bold text-lg">{company.name}</h3>
												<span className="text-sm text-gray-500">{company.category}</span>
											</div>
										</div>
										<p className="text-gray-600 mb-4">{company.description}</p>
										<div className="flex justify-between text-sm mb-4">
											<div>
												<span className="font-medium">{company.followers.toLocaleString()}</span>
												<span className="text-gray-500 ml-1">followers</span>
											</div>
											<div>
												<span className="font-medium">{company.investors}</span>
												<span className="text-gray-500 ml-1">investors</span>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="text-gray-500 text-sm">
												<i className="fas fa-map-marker-alt mr-1"></i>
												{company.location}
											</div>
											<div className="flex items-center bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
												<i className="fas fa-star mr-1"></i>
												{company.rating}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Job Opportunities Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Job Opportunities</h2>
					<a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
						View All
					</a>
				</div>
				<div className="relative">
					<div className="scroll-container overflow-x-auto pb-4">
						<div className="flex space-x-6" style={{ minWidth: `${jobOpportunities.length * 160}px` }}>
							{jobOpportunities.map((job) => (
								<div
									key={job.id}
									className="job-card bg-white rounded-xl shadow-md overflow-hidden w-40 flex-shrink-0 text-center p-4"
								>
									<img src={job.logo} alt={job.company} className="w-16 h-16 rounded-full object-cover mx-auto mb-3" />
									<h3 className="font-medium text-gray-900 mb-1">{job.company}</h3>
									<div className="bg-indigo-100 text-indigo-800 rounded-full py-1 px-3 text-sm inline-block">
										{job.positions} positions
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* News & Events Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Latest News & Events</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{newsAndEvents.map((item) => (
						<div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
							<img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
							<div className="p-6">
								<div className="text-indigo-600 text-sm mb-2">{item.date}</div>
								<h3 className="font-bold text-xl mb-2">{item.title}</h3>
								<p className="text-gray-600">{item.description}</p>
								<a href="#" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
									Read More
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
