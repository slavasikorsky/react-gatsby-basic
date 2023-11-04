import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface ButtonProps {
	to: string;
	children: React.ReactNode;
	color?: string;
	backgroundColor?: string;
	margin?: string;
	padding?: string;
	transform?: string;
}

const fontSize = "16px";
const lineHeight = "20px";
const mdFontSize = "18px";
const mdLineHeight = "22px";

export const Button = styled(Link)<ButtonProps>`
	font-size: ${fontSize};
	line-height: ${lineHeight};
	display: inline-block;
	text-decoration: none;
	border-radius: 4px;
	transition: all 0.3s linear;
	transform: ${({ transform }) => transform || "none"};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor || theme.colors.dark[300]};
	color: ${({ color, theme }) => color || theme.colors.light[300]};
	margin: ${({ margin }) => margin || "0"};
	padding: ${({ padding }) => padding || "0"};
	${({ theme }) => theme.mediaQuery.md} {
		font-size: ${mdFontSize};
		line-height: ${mdLineHeight};
	}
	&:hover {
		background-color: ${({ backgroundColor, theme }) =>
			backgroundColor || theme.colors.light[100]};
		color: ${({ color, theme }) => color || theme.colors.dark[100]};
	}
`;
