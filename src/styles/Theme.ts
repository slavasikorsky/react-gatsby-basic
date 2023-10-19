import { DefaultTheme } from "styled-components";

const COLORS = {
	blue: "#007bf7",
	white: "#f0efef",
	gray: "#e8e8e8e",
};

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
		brand: {
			blue: COLORS.blue,
		},
		interface: {
			white: COLORS.white,
			gray: COLORS.gray,
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
