import React from "react";
import { ThemeProvider } from "styled-components";
import AppTheme from "../styles/Theme";
import { GlobalStyle } from "../styles/GlobalStyles";
import { HeaderBlock } from "../components/Header/Header";

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<ThemeProvider theme={AppTheme}>
			<GlobalStyle />
			<HeaderBlock
				color={"#000"}
				backgroundcolor={"#d2d1"}
				margin="10px"
			/>
			<main>{children}</main>
		</ThemeProvider>
	);
};
