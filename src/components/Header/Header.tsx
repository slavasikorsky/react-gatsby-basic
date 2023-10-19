import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

interface HeaderProps {
	children?: React.ReactElement | React.ReactElement[];
	className?: string;
	color?: string;
	backgroundcolor?: string;
	margin?: string;
}

const getStyledHeader = (): React.ComponentType<HeaderProps> => {
	return styled["div"]`
		display: flex;
		flex-flow: column;
		color: ${(props) =>
			props.color ? props.color : props.theme.colors.brand.gray};
		background-color: ${(props) =>
			props.backgroundcolor
				? props.backgroundcolor
				: props.theme.colors.brand.black};
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
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
			color: red;
		}
	}
`;

export const HeaderBlock = ({
	className,
	color,
	backgroundcolor,
	margin,
}: HeaderProps) => {
	const HeaderComponent = getStyledHeader();
	return (
		<HeaderComponent
			className={className}
			margin={margin}
			color={color}
			backgroundcolor={backgroundcolor}
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
			</MainMenu>
		</HeaderComponent>
	);
};
