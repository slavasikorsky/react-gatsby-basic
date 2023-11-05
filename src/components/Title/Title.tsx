import React, { ReactNode } from "react";
import styled from "styled-components";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
	level: HeadingLevel;
	children: ReactNode;
	color?: string;
	margin?: string;
	transform?: string;
	css?: Object;
}

const fontSizes = ["26px", "24px", "20px", "18px", "16px", "14px"];
const mdFontSizes = ["36px", "34px", "30px", "28px", "26px", "24px"];

const StyledTitle = styled.h1<TitleProps>`
	font-family: "Raleway-Black";
	font-weight: 500;
	font-size: ${({ level }) => fontSizes[level - 1]};
	color: ${({ color, theme }) => color || theme.colors.primary[400]};
	margin: ${({ margin }) => (margin ? margin : "0")};
	transform: ${({ transform }) => transform || "null"};
	${({ theme }) => theme.mediaQuery.md} {
		font-size: ${({ level }) => mdFontSizes[level - 1]};
	}
`;

export const Title = ({ level, ...otherProps }: TitleProps) => {
	return <StyledTitle as={`h${level}`} level={level} {...otherProps} />;
};
