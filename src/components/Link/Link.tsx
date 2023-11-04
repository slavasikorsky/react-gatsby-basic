import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface LinkProps {
	to: string;
	children: React.ReactNode;
	color?: string;
	hoverColor?: string;
	margin?: string;
	padding?: string;
	transform?: string;
}

const fontSize = "16px";
const lineHeight = "20px";
const mdFontSize = "18px";
const mdLineHeight = "22px";

export const LinkComponent = styled(Link)<LinkProps>`
	font-size: ${fontSize};
	line-height: ${lineHeight};
	display: inline-block;
	transition: all 0.3s linear;
	transform: ${({ transform }) => transform || "none"};
	color: ${({ color, theme }) => color || theme.colors.primary[100]};
	margin: ${({ margin }) => margin || "0"};
	padding: ${({ padding }) => padding || "0"};
	${({ theme }) => theme.mediaQuery.md} {
		font-size: ${mdFontSize};
		line-height: ${mdLineHeight};
	}
	&:hover {
		color: ${({ hoverColor, theme }) =>
			hoverColor || theme.colors.primary[400]};
		text-decoration: none;
	}
`;
