import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface LinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	color?: string;
	margin?: string;
}

const fontSize = "16px";
const lineHeight = "20px";

const mdFontSize = "18px";
const mdLineHeight = "22px";

const getStyledLink = (): React.ComponentType<LinkProps> => {
	return styled(Link)`
		font-family: "Raleway-Black";
		font-size: ${fontSize};
		line-height: ${lineHeight};
		display: inline-block;
		color: ${(props) =>
			props.color ? props.color : props.theme.colors.brand.gray};
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			font-size: ${mdFontSize};
			line-height: ${mdLineHeight};
		}
		&:hover {
			opacity: 0.7;
		}
	`;
};

export const LinkBlock = ({
	to,
	children,
	className,
	color,
	margin,
}: LinkProps) => {
	const LinkComponent = getStyledLink();
	return (
		<LinkComponent
			to={to}
			className={className}
			color={color}
			margin={margin}
		>
			{children}
		</LinkComponent>
	);
};
