import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			light: {
				100: string;
				200: string;
				300: string;
				400: string;
			};
			dark: {
				100: string;
				200: string;
				300: string;
				400: string;
			};
			primary: {
				100: string;
				200: string;
				300: string;
				400: string;
			};
		};
		mediaQuery: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	}
}
