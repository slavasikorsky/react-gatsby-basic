import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";

interface HeroProps {
	children?: React.ReactElement | React.ReactElement[];
	className?: string;
	margin?: string;
	title?: string;
	src?: string;
}

const getStyledHero = (): React.ComponentType<HeroProps> => {
	return styled["div"]`
		height: 300px;
		background: url(${(props) => (props.src ? props.src : "none")});
		background-size: cover;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: ${(props) =>
			props.margin ? props.margin : props.theme.margin};
		${(props) => props.theme.mediaQuery.md} {
			height: 400px;
		}
	`;
};

export const Hero = ({ className, margin, title, src }: HeroProps) => {
	const HeroComponent = getStyledHero();
	return (
		<HeroComponent className={className} margin={margin} src={src}>
			<Title level={2} color={"#fff"}>
				{title}
			</Title>
		</HeroComponent>
	);
};
