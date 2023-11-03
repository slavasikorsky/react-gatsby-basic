import React from "react";
import styled from "styled-components";

interface RowProps {
	flex?: number;
	padding?: string;
	alignItems?: string;
	justifyContent?: string;
}

export const Row = styled.div<RowProps>`
	display: flex;
	flex-direction: row;
	padding: ${({ padding }) => padding || "0"};
	flex: ${({ flex }) => flex || 1};
	align-items: ${({ alignItems }) => alignItems || "flex-start"};
	justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
