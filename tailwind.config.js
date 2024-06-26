import { darken } from "polished"
import defaultTheme from "tailwindcss/defaultTheme.js"

const colors = {
	primary: "#A845E4",
	secondary: "#5471FF",
	darkish: "#0A141D",
	darkest: "#060A0E",
	golden: "#FFBF1C",
	invalid: "#EA3757",
}

/** @satisfies {import("tailwindcss").Config} */
export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Lato", ...defaultTheme.fontFamily.sans],
			display: ["Kufam", ...defaultTheme.fontFamily.sans],
		},
		boxShadow: {
			sm: "2px 2px 7px -1px rgba(0, 0, 0, 0.13)",
			DEFAULT: "4px 4px 10px 0 rgba(0, 0, 0, 0.1)",
		},
		extend: {
			colors: {
				...colors,
				"primary-dark-1": darken(0.12, colors.primary),
				"primary-dark-2": darken(0.24, colors.primary),
			},
		},
	},
	plugins: [],
}
