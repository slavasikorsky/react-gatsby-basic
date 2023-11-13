import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface LinkProps {
	to: string;
	type: "button" | "link";
	target?: "_blank" | "_self" | "_parent";
	children: React.ReactNode;
	color?: string;
	backgroundColor?: string;
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
	background-color: ${({ backgroundColor }) =>
		backgroundColor || "transparent"};
	margin: ${({ margin }) => margin || "0"};
	padding: ${({ padding, type }) =>
		padding || (type === "button" ? "12px" : "0")};
	text-decoration: ${({ type }) =>
		type === "button" ? "none" : "underline"};
	${({ theme }) => theme.mediaQuery.md} {
		font-size: ${mdFontSize};
		line-height: ${mdLineHeight};
	}
	&:hover {
		color: ${({ hoverColor, type, theme }) =>
			hoverColor ||
			(type === "button" ? theme.colors.primary[400] : "inherit")};
		text-decoration: none;
		opacity: ${({ type }) => (type === "button" ? "1" : ".7")};
	}
`;
