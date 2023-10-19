import React from "react";
import styled from "styled-components";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
	level: HeadingLevel;
	children: React.ReactNode;
	className?: string;
	color?: string;
	margin?: string;
}

interface StyledTitleProps {
	transform?: string;
	children?: React.ReactNode;
	className?: string;
	color?: string;
	margin?: string;
}

const fontSizes = ["26px", "24px", "20px", "18px", "16px", "14px"];
const lineHeight = ["30px", "28px", "26px", "22px", "20px", "18px"];

const mdFontSizes = ["36px", "34px", "30px", "28px", "26px", "24px"];
const mdLineHeight = ["40px", "38px", "36px", "32px", "30px", "28px"];

const getStyledTitle = (
	level: HeadingLevel
): React.ComponentType<StyledTitleProps> => {
	const HeadingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	return styled[HeadingTag]`
		font-family: "Raleway-Black";
		font-weight: 500;
		font-size: ${fontSizes[level - 1]};
		line-height: ${lineHeight[level - 1]};
		color: ${(props) =>
			props.color ? props.color : props.theme.colors.brand.gray};
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			font-size: ${mdFontSizes[level - 1]};
			line-height: ${mdLineHeight[level - 1]};
		}
	`;
};

export const Title = ({
	level,
	children,
	className,
	color,
	margin,
}: TitleProps) => {
	const TitleComponent = getStyledTitle(level);
	return (
		<TitleComponent className={className} color={color} margin={margin}>
			{children}
		</TitleComponent>
	);
};
