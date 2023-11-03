import React from "react";
import styled from "styled-components";

interface ColProps {
	flex?: number;
	padding?: string;
	alignItems?: string;
	justifyContent?: string;
}

export const Col = styled.div<ColProps>`
	display: flex;
	flex-direction: column;
	padding: ${({ padding }) => padding || "0"};
	flex: ${({ flex }) => flex || 1};
	align-items: ${({ alignItems }) => alignItems || "flex-start"};
	justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
