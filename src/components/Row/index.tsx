import React from "react";
import styled from "styled-components";

interface RowProps {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	margin?: string;
	gap?: string;
}

const getStyledRow = (): React.ComponentType<RowProps> => {
	return styled["div"]`
		display: flex;
		flex-flow: column;
		gap: 12px;
		align-items: flex-start;
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			flex-flow: nowrap;
			gap: ${(props) => (props.gap ? props.gap : "12px")};
		}
	`;
};

export const Row = ({ children, className, margin, gap }: RowProps) => {
	const RowComponent = getStyledRow();
	return (
		<RowComponent className={className} margin={margin} gap={gap}>
			{children}
		</RowComponent>
	);
};
