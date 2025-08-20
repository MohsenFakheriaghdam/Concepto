import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// Default data (used if no data is passed from HomePage)
const defaultCompanyData = {
	name: "TechSolutions Inc.",
	category: "Technology",
	founded: 2010,
	headquarters: "123 Tech Street, San Francisco, CA 94107",
	employees: "250+",
	website: "www.techsolutions.com",
	contact: "(555) 123-4567",
	industry: "Information Technology & Services",
	description:
		"TechSolutions Inc. is a leading provider of innovative technology solutions for businesses of all sizes. Founded in 2010, we have grown from a small startup to a recognized industry leader with over 250 employees across three continents.",
	details: [
		"Custom Software Development",
		"Cloud Computing Solutions",
		"Artificial Intelligence & Machine Learning",
		"Cybersecurity Services",
		"Data Analytics & Business Intelligence",
	],
	fullDescription:
		"Our mission is to empower businesses through technology, offering cutting-edge software solutions, cloud services, and digital transformation consulting. With offices in San Francisco, New York, London, and Singapore, we serve clients in over 30 countries. Our team of experts includes software engineers, data scientists, UX designers, and business analysts dedicated to delivering exceptional results.",
};

const faqData = [
	{
		question: "What services does TechSolutions Inc. offer?",
		answer: "We offer a wide range of technology services including custom software development, cloud computing solutions, AI and machine learning implementations, cybersecurity services, and data analytics solutions tailored to your business needs.",
	},
	{
		question: "How can I contact customer support?",
		answer: "You can reach our customer support team by phone at (555) 123-4567, by email at support@techsolutions.com, or through our online support portal available 24/7.",
	},
	{
		question: "Does TechSolutions Inc. offer remote work opportunities?",
		answer: "Yes, we have a flexible work policy and offer both remote and hybrid work options for many of our positions. We believe in work-life balance and providing our employees with the flexibility they need.",
	},
	{
		question: "What industries do you primarily serve?",
		answer: "We serve clients across various industries including finance, healthcare, retail, manufacturing, and education. Our solutions are adaptable to meet the specific needs of each industry.",
	},
	{
		question: "How does TechSolutions Inc. ensure data security?",
		answer: "We implement industry-leading security measures including encryption, multi-factor authentication, regular security audits, and employee training to ensure the highest level of data protection for our clients.",
	},
];

const employeesData = [
	{
		name: "John Smith",
		position: "CEO & Founder",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		bio: "Visionary leader with 20+ years in the tech industry. Founded TechSolutions in 2010 with a mission to innovate.",
	},
	{
		name: "Sarah Johnson",
		position: "CTO",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
		bio: "Technology expert specializing in cloud architecture and scalable systems design.",
	},
	{
		name: "Michael Chen",
		position: "VP of Engineering",
		image: "https://randomuser.me/api/portraits/men/75.jpg",
		bio: "Leads our engineering teams to deliver high-quality software solutions on time.",
	},
	{
		name: "Emily Rodriguez",
		position: "Director of Product",
		image: "https://randomuser.me/api/portraits/women/63.jpg",
		bio: "Product strategist focused on creating user-centric solutions that drive business value.",
	},
	{
		name: "David Wilson",
		position: "Head of AI Research",
		image: "https://randomuser.me/api/portraits/men/81.jpg",
		bio: "Pioneering our AI initiatives with a focus on practical, ethical applications.",
	},
	{
		name: "Lisa Park",
		position: "UX Design Lead",
		image: "https://randomuser.me/api/portraits/women/90.jpg",
		bio: "Creates intuitive, beautiful interfaces that enhance user experience across all platforms.",
	},
	{
		name: "Robert Taylor",
		position: "Cybersecurity Director",
		image: "https://randomuser.me/api/portraits/men/22.jpg",
		bio: "Ensures our solutions meet the highest security standards to protect client data.",
	},
	{
		name: "Jessica Lee",
		position: "Data Science Manager",
		image: "https://randomuser.me/api/portraits/women/28.jpg",
		bio: "Leads our team in extracting valuable insights from complex datasets.",
	},
];

const postsData = [
	{
		title: "Announcing Our New Cloud Platform",
		date: "June 15, 2023",
		content:
			"We're excited to announce the launch of our new enterprise cloud platform, designed to provide scalable, secure solutions for businesses of all sizes. The platform features enhanced security protocols, AI-driven resource allocation, and 24/7 monitoring.",
		author: "Sarah Johnson",
		likes: 124,
		comments: 28,
	},
	{
		title: "TechSolutions Wins Innovation Award",
		date: "May 5, 2023",
		content:
			"We're honored to receive the 2023 Tech Innovation Award for our work in AI-powered business analytics. This recognition reflects our team's dedication to pushing technological boundaries.",
		author: "John Smith",
		likes: 215,
		comments: 42,
	},
	{
		title: "Join Us at the Annual Developer Conference",
		date: "April 20, 2023",
		content:
			"TechSolutions will be hosting our annual developer conference on July 10-12. This year's theme is 'Building the Future Together' with workshops on quantum computing, ethical AI, and more.",
		author: "Michael Chen",
		likes: 178,
		comments: 35,
	},
];

const newsData = [
	{
		title: "TechSolutions Expands to European Market",
		date: "July 1, 2023",
		type: "News",
		content:
			"We're proud to announce the opening of our new London office as part of our European expansion. This strategic move will allow us to better serve our growing client base across Europe.",
		image: "https://via.placeholder.com/600x400?text=London+Office",
	},
	{
		title: "Annual Tech Conference 2023",
		date: "August 15-17, 2023",
		type: "Event",
		content:
			"Join us for our flagship event featuring keynote speakers, hands-on workshops, and networking opportunities with industry leaders. Early bird registration now open!",
		image: "https://via.placeholder.com/600x400?text=Tech+Conference",
	},
	{
		title: "Partnership with GreenTech Initiative",
		date: "June 5, 2023",
		type: "News",
		content:
			"TechSolutions has partnered with GreenTech to develop sustainable technology solutions that reduce environmental impact while maintaining performance.",
		image: "https://via.placeholder.com/600x400?text=GreenTech",
	},
	{
		title: "Hackathon for Social Good",
		date: "September 10-12, 2023",
		type: "Event",
		content:
			"Our annual 48-hour hackathon challenges developers to create tech solutions addressing social issues. $50,000 in prizes and funding for winning projects.",
		image: "https://via.placeholder.com/600x400?text=Hackathon",
	},
];

const similarCompaniesData = [
	{
		name: "Digital Innovations LLC",
		category: "Technology",
		employees: "180",
		rating: "4.6",
		description: "Specializing in digital transformation and enterprise software solutions.",
	},
	{
		name: "CloudNine Systems",
		category: "Cloud Computing",
		employees: "320",
		rating: "4.7",
		description: "Leading provider of secure, scalable cloud infrastructure services.",
	},
	{
		name: "AI Nexus",
		category: "Artificial Intelligence",
		employees: "150",
		rating: "4.5",
		description: "Pioneering AI solutions for business automation and data analysis.",
	},
	{
		name: "SecureNet Technologies",
		category: "Cybersecurity",
		employees: "210",
		rating: "4.8",
		description: "Comprehensive cybersecurity solutions for businesses of all sizes.",
	},
	{
		name: "DataSphere Analytics",
		category: "Data Science",
		employees: "190",
		rating: "4.4",
		description: "Transforming data into actionable insights through advanced analytics.",
	},
	{
		name: "FutureTech Solutions",
		category: "Technology",
		employees: "275",
		rating: "4.6",
		description: "Innovative technology consulting and implementation services.",
	},
];

const reviewsData = [
	{
		author: "Alex Thompson",
		rating: 5,
		date: "June 28, 2023",
		title: "Exceptional Service",
		content:
			"TechSolutions transformed our business operations with their custom software solution. The team was professional, responsive, and delivered beyond our expectations. Highly recommend!",
		company: "Thompson & Co.",
	},
	{
		author: "Maria Garcia",
		rating: 4,
		date: "June 15, 2023",
		title: "Great Cloud Migration",
		content:
			"Their cloud migration specialists made our transition seamless. We experienced minimal downtime and the new system performance is excellent. Only minor hiccups during implementation.",
		company: "Garcia Enterprises",
	},
	{
		author: "James Wilson",
		rating: 5,
		date: "May 30, 2023",
		title: "AI Implementation Success",
		content:
			"The AI solution developed by TechSolutions has helped us automate 40% of our customer service inquiries with 98% accuracy. Their data science team is truly top-notch.",
		company: "Wilson Services",
	},
	{
		author: "Sarah Kim",
		rating: 5,
		date: "May 12, 2023",
		title: "Cybersecurity Overhaul",
		content:
			"After a security breach, TechSolutions completely revamped our systems. Their cybersecurity team implemented robust protections and trained our staff. We now feel confident in our digital security.",
		company: "Kim & Partners",
	},
];

function TabButton({ label, active, onClick }) {
	return (
		<button
			className={`tab-btn py-4 px-2 md:px-4 font-medium text-sm md:text-base border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300 transition ${
				active ? "active border-blue-600 text-blue-600" : ""
			}`}
			onClick={onClick}
			type="button"
		>
			{label}
		</button>
	);
}

function FAQItem({ faq, open, onClick }) {
	return (
		<div className={`faq-item bg-gray-50 p-4 rounded-lg cursor-pointer${open ? " open" : ""}`} onClick={onClick}>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-gray-800">{faq.question}</h3>
				<i className={`fas fa-chevron-down faq-toggle text-blue-500 transition-transform${open ? " rotate-180" : ""}`}></i>
			</div>
			<div
				className="faq-answer mt-2 text-gray-600"
				style={{ maxHeight: open ? 500 : 0, opacity: open ? 1 : 0, overflow: "hidden", transition: "all 0.3s ease" }}
			>
				<p>{faq.answer}</p>
			</div>
		</div>
	);
}

function Employees() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{employeesData.map((employee) => (
				<div key={employee.name} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
					<img src={employee.image} alt={employee.name} className="w-full h-48 object-cover" />
					<div className="p-4">
						<h3 className="font-bold text-lg text-gray-800">{employee.name}</h3>
						<p className="text-blue-600 mb-2">{employee.position}</p>
						<p className="text-gray-600 text-sm">{employee.bio}</p>
						<div className="mt-4 flex space-x-2">
							<a href="#" className="text-blue-500 hover:text-blue-700">
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a href="#" className="text-blue-500 hover:text-blue-700">
								<i className="fas fa-envelope"></i>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function Posts() {
	return (
		<div className="space-y-6">
			{postsData.map((post) => (
				<div key={post.title} className="bg-white rounded-lg shadow-sm p-6">
					<h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
					<div className="flex items-center text-gray-500 text-sm mb-4">
						<span>{post.date}</span>
						<span className="mx-2">•</span>
						<span>Posted by {post.author}</span>
					</div>
					<p className="text-gray-700 mb-4">{post.content}</p>
					<div className="flex items-center text-gray-500">
						<button className="flex items-center mr-6 hover:text-blue-600">
							<i className="far fa-thumbs-up mr-2"></i>
							<span>{post.likes}</span>
						</button>
						<button className="flex items-center hover:text-blue-600">
							<i className="far fa-comment mr-2"></i>
							<span>{post.comments} comments</span>
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

function News() {
	return (
		<div className="space-y-8">
			{newsData.map((news) => (
				<div key={news.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
					<div className="md:flex">
						<div className="md:w-1/3">
							<img src={news.image} alt={news.title} className="w-full h-full object-cover" />
						</div>
						<div className="md:w-2/3 p-6">
							<div className="flex items-center mb-2">
								<span
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										news.type === "News" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
									}`}
								>
									{news.type}
								</span>
								<span className="text-gray-500 text-sm ml-3">{news.date}</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
							<p className="text-gray-600 mb-4">{news.content}</p>
							<button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
								{news.type === "News" ? "Read More" : "Register Now"}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function SimilarCompanies() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{similarCompaniesData.map((company) => (
				<div key={company.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
					<h3 className="text-xl font-bold text-gray-800 mb-2">{company.name}</h3>
					<div className="flex items-center mb-3">
						<span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded mr-2">{company.category}</span>
						<div className="flex items-center text-sm text-gray-600">
							<i className="fas fa-users mr-1"></i>
							<span>{company.employees}</span>
						</div>
					</div>
					<div className="flex items-center mb-4">
						{Array.from({ length: 5 }, (_, i) => (
							<i key={i} className={`fas fa-star ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-300"}`}></i>
						))}
						<span className="text-gray-600 ml-2">{company.rating}</span>
					</div>
					<p className="text-gray-600 text-sm mb-4">{company.description}</p>
					<button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
						View Company
					</button>
				</div>
			))}
		</div>
	);
}

function Reviews() {
	return (
		<div className="space-y-6">
			{reviewsData.map((review, idx) => (
				<div key={idx} className="bg-white rounded-lg shadow-sm p-6">
					<div className="flex justify-between mb-4">
						<div>
							<h4 className="font-semibold text-gray-800">{review.author}</h4>
							<p className="text-gray-500 text-sm">{review.company}</p>
						</div>
						<div className="flex items-center">
							{Array.from({ length: 5 }, (_, i) => (
								<i key={i} className={`fas fa-star ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}></i>
							))}
						</div>
					</div>
					<div className="mb-3">
						<h3 className="font-medium text-gray-800">{review.title}</h3>
						<p className="text-gray-600">{review.content}</p>
					</div>
					<div className="flex justify-between items-center text-sm text-gray-500">
						<span>{review.date}</span>
						<div className="flex space-x-4">
							<button className="hover:text-blue-600">
								<i className="far fa-thumbs-up mr-1"></i> Helpful
							</button>
							<button className="hover:text-blue-600">
								<i className="far fa-comment mr-1"></i> Comment
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function AboutUs({ companyData }) {
	const [openFAQ, setOpenFAQ] = useState(null);
	return (
		<>
			{/* Company Summary */}
			<div className="bg-white rounded-xl shadow-sm p-6 mb-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">Company Summary</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-building text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Founded</h3>
							<p className="text-gray-600">{companyData.founded}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-map-marked-alt text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Headquarters</h3>
							<p className="text-gray-600">{companyData.headquarters}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-users text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Employees</h3>
							<p className="text-gray-600">{companyData.employees}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-globe-americas text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Website</h3>
							<a href="#" className="text-blue-600 hover:underline">
								{companyData.website}
							</a>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-phone-alt text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Contact</h3>
							<p className="text-gray-600">{companyData.contact}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-industry text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Industry</h3>
							<p className="text-gray-600">{companyData.industry}</p>
						</div>
					</div>
				</div>
			</div>
			{/* Company Details */}
			<div className="bg-white rounded-xl shadow-sm p-6 mb-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">Company Details</h2>
				<div className="prose max-w-none text-gray-700">
					<p>{companyData.description}</p>
					<p>
						Our mission is to empower businesses through technology, offering cutting-edge software solutions, cloud services, and digital
						transformation consulting. We specialize in:
					</p>
					<ul>{companyData.details && companyData.details.map((detail, idx) => <li key={idx}>{detail}</li>)}</ul>
					<p>{companyData.fullDescription}</p>
				</div>
			</div>
			{/* FAQ Section */}
			<div className="bg-white rounded-xl shadow-sm p-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
				<div className="space-y-4">
					{faqData.map((faq, idx) => (
						<FAQItem key={idx} faq={faq} open={openFAQ === idx} onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)} />
					))}
				</div>
			</div>
		</>
	);
}

function Support() {
	return (
		<div className="bg-white rounded-xl shadow-sm p-6">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">Support Center</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-gray-50 p-6 rounded-lg">
					<div className="flex items-center mb-4">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-headset text-blue-600"></i>
						</div>
						<h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
					</div>
					<p className="text-gray-600 mb-4">
						Our dedicated support team is available to help you with any questions or issues you may have.
					</p>
					<div className="space-y-3">
						<div className="flex items-center">
							<i className="fas fa-phone-alt text-blue-500 mr-3"></i>
							<span className="text-gray-700">+1 (555) 123-4567</span>
						</div>
						<div className="flex items-center">
							<i className="fas fa-envelope text-blue-500 mr-3"></i>
							<span className="text-gray-700">support@techsolutions.com</span>
						</div>
						<div className="flex items-center">
							<i className="fas fa-clock text-blue-500 mr-3"></i>
							<span className="text-gray-700">Mon-Fri: 8AM - 8PM EST</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 p-6 rounded-lg">
					<div className="flex items-center mb-4">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-book text-blue-600"></i>
						</div>
						<h3 className="text-xl font-semibold text-gray-800">Knowledge Base</h3>
					</div>
					<p className="text-gray-600 mb-4">Browse our comprehensive documentation and find answers to common questions.</p>
					<div className="space-y-3">
						<a href="#" className="flex items-center text-blue-600 hover:underline">
							<i className="fas fa-file-alt mr-3"></i>
							<span>Getting Started Guide</span>
						</a>
						<a href="#" className="flex items-center text-blue-600 hover:underline">
							<i className="fas fa-video mr-3"></i>
							<span>Video Tutorials</span>
						</a>
						<a href="#" className="flex items-center text-blue-600 hover:underline">
							<i className="fas fa-question-circle mr-3"></i>
							<span>Troubleshooting Common Issues</span>
						</a>
					</div>
				</div>
			</div>
			<div className="mt-8 bg-gray-50 p-6 rounded-lg">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Submit a Support Ticket</h3>
				<form className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
							Message
						</label>
						<textarea
							id="message"
							rows={4}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
						></textarea>
					</div>
					<button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
						Submit Ticket
					</button>
				</form>
			</div>
		</div>
	);
}

export default function CompanyPage() {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState("about");
	const [following, setFollowing] = useState(false);

	// Use company data from location.state if available, otherwise fallback
	const companyData = location.state?.company || defaultCompanyData;

	const tabList = [
		{ id: "about", label: "About Us" },
		{ id: "support", label: "Support" },
		{ id: "employees", label: "Employees" },
		{ id: "posts", label: "Posts" },
		{ id: "news", label: "News & Events" },
		{ id: "similar", label: "Similar Companies" },
		{ id: "reviews", label: "Reviews" },
	];

	return (
		<div className="bg-gray-50 font-sans min-h-screen">
			<div className="container mx-auto px-4 py-8 max-w-6xl">
				{/* Header Section */}
				<header className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
					<div className="md:flex">
						<div className="md:w-1/4 p-6 flex justify-center">
							<img
								src={companyData.logo || "https://via.placeholder.com/300"}
								alt="Company Logo"
								className="w-48 h-48 object-cover rounded-lg shadow-sm"
							/>
						</div>
						<div className="md:w-3/4 p-6">
							<div className="flex flex-col h-full justify-between">
								<div>
									<div className="flex items-center mb-2">
										<h1 className="text-3xl font-bold text-gray-800">{companyData.name}</h1>
										<span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
											{companyData.category}
										</span>
									</div>
									<p className="text-gray-600 mb-4">{companyData.description}</p>
									<div className="flex flex-wrap gap-4 mb-4">
										<div className="flex items-center text-gray-600">
											<i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
											<span>{companyData.location || companyData.headquarters || "Location"}</span>
										</div>
										<div className="flex items-center text-gray-600">
											<i className="fas fa-globe mr-2 text-blue-500"></i>
											<a href="#" className="text-blue-600 hover:underline">
												{companyData.website}
											</a>
										</div>
										<div className="flex items-center text-gray-600">
											<i className="fas fa-users mr-2 text-blue-500"></i>
											<span>{companyData.employees} Employees</span>
										</div>
										<div className="flex items-center text-gray-600">
											<i className="fas fa-star mr-2 text-blue-500"></i>
											<span>{companyData.rating ? `${companyData.rating} (reviews)` : "4.8 (120 reviews)"}</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap gap-4 mt-4">
									<button
										className={`follow-btn px-6 py-2 rounded-lg transition flex items-center ${
											following ? "bg-green-400" : "bg-blue-600 text-white hover:bg-blue-700"
										}`}
										onClick={() => setFollowing((f) => !f)}
									>
										<i className={`fas ${following ? "fa-check" : "fa-plus"} mr-2`}></i>
										{following ? "Following" : "Follow"}
									</button>
									<button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center">
										<i className="fas fa-info-circle mr-2"></i> More Info
									</button>
									<div className="flex items-center ml-auto">
										<a href="#" className="text-gray-500 hover:text-blue-500 mx-3">
											<i className="fab fa-facebook-f"></i>
										</a>
										<a href="#" className="text-gray-500 hover:text-blue-400 mx-3">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="#" className="text-gray-500 hover:text-red-500 mx-3">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				{/* Tabs Navigation */}
				<div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
					<div className="overflow-x-auto">
						<nav className="flex space-x-1 md:space-x-4 px-4">
							{tabList.map((tab) => (
								<TabButton key={tab.id} label={tab.label} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} />
							))}
						</nav>
					</div>
				</div>

				{/* Tab Content */}
				<div className="tab-content-container">
					{activeTab === "about" && <AboutUs companyData={companyData} />}
					{activeTab === "support" && <Support />}
					{activeTab === "employees" && <Employees />}
					{activeTab === "posts" && <Posts />}
					{activeTab === "news" && <News />}
					{activeTab === "similar" && <SimilarCompanies />}
					{activeTab === "reviews" && <Reviews />}
				</div>
			</div>
		</div>
	);
}
