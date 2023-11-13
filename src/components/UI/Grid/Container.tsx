import React from "react";
import styled from "styled-components";

interface ContainerProps {
	children: React.ReactNode | React.ReactNode[];
	padding?: string;
	margin?: string;
	maxWidth?: string;
	alignItems?: string;
	justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-flow: column;
	margin: ${({ margin }) => margin || "0 auto"};
	padding: ${({ padding }) => padding || "0"};
	max-width: ${({ maxWidth, theme }) => maxWidth || theme.width.large};
	align-items: ${({ alignItems }) => alignItems || "flex-start"};
	justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
