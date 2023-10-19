import React from "react";
import styled from "styled-components";

interface TextProps {
	children: React.ReactNode;
	className?: string;
	color?: string;
	margin?: string;
}
const fontSize = "16px";
const lineHeight = "20px";

const mdFontSize = "18px";
const mdLineHeight = "22px";

const getStyledText = (): React.ComponentType<TextProps> => {
	return styled["p"]`
		font-family: "Raleway-Regular";
		font-weight: 400;
		font-size: ${fontSize};
		line-height: ${lineHeight};
		color: ${(props) =>
			props.color ? props.color : props.theme.colors.brand.gray};
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			font-size: ${mdFontSize};
			line-height: ${mdLineHeight};
		}
	`;
};

export const Text = ({ children, className, color, margin }: TextProps) => {
	const TextComponent = getStyledText();
	return (
		<TextComponent className={className} color={color} margin={margin}>
			{children}
		</TextComponent>
	);
};
