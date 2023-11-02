import { DefaultTheme } from "styled-components";

const MEDIA_QUERY_SIZES = {
	xs: "360px",
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
};

const createMediaQuery = (size: string) => `@media (min-width: ${size})`;

const AppTheme: DefaultTheme = {
	colors: {
		light: {
			100: "#fff",
			200: "#eee",
			300: "#ddd",
			400: "#ccc",
		},
		dark: {
			100: "#000",
			200: "#111",
			300: "#222",
			400: "#333",
		},
		primary: {
			100: "#a2ced",
			200: "#3e1ac9",
			300: "#0e619c",
			400: "#177589",
		},
	},
	mediaQuery: {
		xs: createMediaQuery(MEDIA_QUERY_SIZES.xs),
		sm: createMediaQuery(MEDIA_QUERY_SIZES.sm),
		md: createMediaQuery(MEDIA_QUERY_SIZES.md),
		lg: createMediaQuery(MEDIA_QUERY_SIZES.lg),
		xl: createMediaQuery(MEDIA_QUERY_SIZES.xl),
	},
};

export default AppTheme;
