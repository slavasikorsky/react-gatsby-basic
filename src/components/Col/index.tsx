import React from "react";
import styled from "styled-components";

type ColSize = 25 | 50 | 75 | 100;

interface ColProps {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	size: ColSize;
}

const getStyledCol = (size: ColSize): React.ComponentType<ColProps> => {
	const sizeWidth = `${size}%`;
	return styled["div"]`
		width: 100%;
		${(props) => props.theme.mediaQuery.md} {
			width: ${(props) => (props.size ? sizeWidth : "auto")};
		}
	`;
};

export const Col = ({ children, className, size }: ColProps) => {
	const Col = getStyledCol(size);
	return (
		<Col className={className} size={size}>
			{children}
		</Col>
	);
};
