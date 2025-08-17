import React from "react";

function Footer() {
	const [email, setEmail] = React.useState("");
	const [subscribed, setSubscribed] = React.useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email) {
			setSubscribed(true);
			setEmail("");
			setTimeout(() => setSubscribed(false), 3000);
		}
	};

	return (
		<footer className="gradient-bg text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold flex items-center">
							<i className="fas fa-rocket mr-2"></i>
							TechNova
						</h3>
						<p className="text-gray-200">Innovating the future, one solution at a time. We build digital experiences that matter.</p>
						<div className="flex space-x-4 pt-2">
							{["facebook", "twitter", "instagram", "linkedin"].map((social) => (
								<a
									key={social}
									href="#"
									className="text-white hover:text-gray-300 transition-colors duration-300"
									aria-label={social}
								>
									<i className={`fab fa-${social} text-xl`}></i>
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{["Home", "About", "Services", "Pricing", "Blog"].map((link) => (
								<li key={link}>
									<a href="#" className="footer-link text-gray-200 hover:text-white flex items-center">
										<i className="fas fa-chevron-right text-xs mr-2"></i>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Our Services</h3>
						<ul className="space-y-2">
							{["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "Digital Marketing"].map((service) => (
								<li key={service}>
									<a href="#" className="footer-link text-gray-200 hover:text-white flex items-center">
										<i className="fas fa-check-circle text-xs mr-2"></i>
										{service}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
						<p className="text-gray-200 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
						<form onSubmit={handleSubscribe} className="space-y-3">
							<div className="relative">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Your email address"
									className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
									required
								/>
								<button
									type="submit"
									className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
								>
									<i className="fas fa-paper-plane"></i>
								</button>
							</div>
							{subscribed && <div className="bg-green-500 text-white px-3 py-2 rounded-md text-sm">Thank you for subscribing!</div>}
						</form>
						<div className="mt-4 flex items-center space-x-2">
							<i className="fas fa-phone-alt"></i>
							<span>+1 (555) 123-4567</span>
						</div>
						<div className="flex items-center space-x-2">
							<i className="fas fa-envelope"></i>
							<span>info@technova.com</span>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-300 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} TechNova. All rights reserved.</p>
					<div className="flex space-x-6">
						<a href="#" className="text-gray-300 hover:text-white text-sm">
							Privacy Policy
						</a>
						<a href="#" className="text-gray-300 hover:text-white text-sm">
							Terms of Service
						</a>
						<a href="#" className="text-gray-300 hover:text-white text-sm">
							Cookies Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
