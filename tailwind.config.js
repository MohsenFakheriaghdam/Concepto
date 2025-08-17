/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary_primary: "#0D6EFD",
				primary_tint_7: "#438EFD",
				primary_tint_5: "#79AEFE",
				primary_tint_3: "#AECFFE",
				primary_tint_1: "#E4EFFF",
				primary_shade_1: "#0260EB",
				primary_shade_3: "#0148B0",
				primary_shade_5: "#013075",
				primary_shade_7: "#00183B",
				secondary_secondary: "#FFC51A",
				secondary_tint_7: "#FFD24D",
				secondary_tint_5: "#FFDF80",
				secondary_tint_3: "#FFECB3",
				secondary_tint_1: "#FFF9E6",
				secondary_shade_1: "#FABB00",
				secondary_shade_3: "#BB8C00",
				secondary_shade_5: "#7D5D00",
				secondary_shade_7: "#3E2F00",
				neutral_gray_1: "#E9EAEE",
				neutral_gray_2: "#CBCED7",
				neutral_gray_3: "#AEB2C0",
				neutral_gray_4: "#9095AA",
				neutral_gray_5: "#737993",
				neutral_gray_6: "#5B6176",
				neutral_gray_8: "#2E303B",
				neutral_neutral1_black: "#0F0F0F",
				state_error_err: "#DC3545",
				state_error_background_err: "#FFEEF0",
				state_success_suc: "#28A745",
				state_success_background_suc: "#D8FFE1",
				state_warning_war: "#FFBE00",
				state_warning_background_war: "#FFF1C9",
			},
			maxWidth: {
				container: "1200px",
			},
			gridTemplateColumns: {
				12: "repeat(12, minmax(0, 1fr))", // دسکتاپ
				4: "repeat(4, minmax(0, 1fr))", // موبایل
			},
			spacing: {
				4: "16px", // gutter موبایل
				6: "24px", // gutter دسکتاپ
			},
		},
	},
	plugins: [],
};
