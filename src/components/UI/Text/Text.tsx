import React from "react";
import styled from "styled-components";

interface TextProps {
	color?: string;
	margin?: string;
	transform?: string;
}

export const Text = styled.p<TextProps>`
	font-size: 16px;
	line-height: 18px;
	color: ${({ color, theme }) => color || theme.colors.dark[100]};
	margin: ${({ margin }) => margin || "0"};
	transform: ${({ transform }) => transform || "none"};
	${({ theme }) => theme.mediaQuery.md} {
		font-size: 18px;
		line-height: 22px;
	}
`;
