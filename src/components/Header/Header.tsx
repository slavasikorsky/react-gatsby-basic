import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

interface HeaderProps {
	children?: React.ReactElement | React.ReactElement[];
	className?: string;
	color?: string;
	backgroundColor?: string;
	margin?: string;
}

const getStyledHeader = (): React.ComponentType<HeaderProps> => {
	return styled["div"]`
		display: flex;
		flex-flow: column;
		color: ${({ theme, color }) => color || theme.colors.dark[300]};
		background-color: ${({ backgroundColor, theme }) =>
			backgroundColor || theme.colors.primary[100]};
		margin: ${({ margin }) => margin || "0"};
		${({ theme }) => theme.mediaQuery.md} {
			flex-flow: nowrap;
		}
	`;
};

const MainMenu = styled["ul"]`
	display: flex;
	margin: 25px 10px;
	flex-flow: wrap;
	padding: 0;
	li {
		margin: 0 10px;
		list-style: none;
		a[aria-current="page"] {
			color: green;
		}
	}
`;

export const HeaderBlock = ({
	className,
	color,
	backgroundColor,
	margin,
}: HeaderProps) => {
	const HeaderComponent = getStyledHeader();
	return (
		<HeaderComponent
			className={className}
			margin={margin}
			color={color}
			backgroundColor={backgroundColor}
		>
			<Link to="/" style={{ margin: 20 }}>
				<StaticImage
					src="../../images/icon.png"
					alt="logo"
					width={30}
				/>
			</Link>
			<MainMenu>
				<li>
					<Link to="/">Home page</Link>
				</li>
				<li>
					<Link to="/404">404</Link>
				</li>
				<li>
					<Link to="/500">500</Link>
				</li>
				<li>
					<Link to="/privacy-policy">Privacy policy</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</MainMenu>
		</HeaderComponent>
	);
};
