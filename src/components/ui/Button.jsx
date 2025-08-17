import React from "react";
import clsx from "clsx";

const variants = {
	primary: "bg-primary_primary text-white hover:bg-blue-700",
	secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
	ghost: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
};

const sizes = {
	sm: "px-3 py-1 text-sm rounded-md",
	md: "px-4 py-2 text-base rounded-lg",
	lg: "px-6 py-3 text-lg rounded-xl",
};

function Button({ children, variant = "primary", size = "md", className, ...props }) {
	return (
		<button className={clsx("font-medium transition-colors duration-200", variants[variant], sizes[size], className)} {...props}>
			{children}
		</button>
	);
}
export default Button;
