import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface ButtonProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	color?: string;
	backgroundcolor?: string;
	margin?: string;
	transform?: string;
}

const fontSize = "16px";
const lineHeight = "20px";

const mdFontSize = "18px";
const mdLineHeight = "22px";

const getStyledButton = (): React.ComponentType<ButtonProps> => {
	return styled(Link)`
		font-family: "Raleway-Regular";
		font-weight: 400;
		font-size: ${fontSize};
		line-height: ${lineHeight};
		display: inline-block;
		text-decoration: none;
		padding: 1rem;
		border-radius: 4px;
		transition: all 0.3s linear;
		background-color: ${(props) =>
			props.backgroundcolor
				? props.backgroundcolor
				: props.theme.colors.dark[300]};
		color: ${(props) =>
			props.color ? props.color : props.theme.colors.light[300]};
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			font-size: ${mdFontSize};
			line-height: ${mdLineHeight};
		}
		&:hover {
			transform: ${(props) =>
				props.transform ? props.transform : "none"};
		}
	`;
};

export const Button = ({
	to,
	children,
	className,
	color,
	backgroundcolor,
	margin,
	transform,
}: ButtonProps) => {
	const ButtonComponent = getStyledButton();
	return (
		<ButtonComponent
			to={to}
			className={className}
			color={color}
			backgroundcolor={backgroundcolor}
			margin={margin}
			transform={transform}
		>
			{children}
		</ButtonComponent>
	);
};
