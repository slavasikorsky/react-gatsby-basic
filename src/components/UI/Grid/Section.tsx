import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import styled from "styled-components";

interface SectionProps {
	children: React.ReactNode | React.ReactNode[];
	padding?: string;
	margin?: string;
	backgroundColor?: string;
	backgroundImageName?: string;
}

const StyledBackgroundImage = styled(BackgroundImage)<SectionProps>`
	margin: ${({ margin }) => margin || "0 auto"};
	padding: ${({ padding }) => padding || "0"};
	background-color: ${({ backgroundColor }) =>
		backgroundColor || "transparent"};
	width: 100%;
	height: 100%;
`;

const SectionContainer = styled.section<SectionProps>`
	margin: ${({ margin }) => margin || "0 auto"};
	padding: ${({ padding }) => padding || "0"};
	background-color: ${({ backgroundColor }) =>
		backgroundColor || "transparent"};
	width: 100%;
	height: 100%;
`;

export const Section = ({
	backgroundImageName,
	children,
	...otherProps
}: SectionProps) => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "images" } }) {
				nodes {
					name
					childImageSharp {
						fluid(quality: 80) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);

	if (backgroundImageName) {
		const image = data.allFile.nodes.find(
			(n: { name: string }) => n.name === backgroundImageName
		);

		if (!image) {
			console.error(
				`Background image "${backgroundImageName}" not found`
			);
		}

		return (
			<StyledBackgroundImage
				fluid={image.childImageSharp.fluid}
				{...otherProps}
			>
				{children}
			</StyledBackgroundImage>
		);
	}

	return <SectionContainer {...otherProps}>{children}</SectionContainer>;
};
