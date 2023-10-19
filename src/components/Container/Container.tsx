import React from "react";
import styled from "styled-components";

interface ContainerProps {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	margin?: string;
	direction?: "row" | "column";
}

const getStyledText = (): React.ComponentType<ContainerProps> => {
	return styled["div"]`
		display: flex;
		flex-flow: column;
		gap: 15px;
		align-items: flex-start;
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			flex-flow: ${(props) =>
				props.direction ? props.direction : "nowrap"};
			gap: 30px;
		}
	`;
};

export const Container = ({
	children,
	className,
	margin,
	direction,
}: ContainerProps) => {
	const ContainerComponent = getStyledText();
	return (
		<ContainerComponent
			className={className}
			margin={margin}
			direction={direction}
		>
			{children}
		</ContainerComponent>
	);
};
