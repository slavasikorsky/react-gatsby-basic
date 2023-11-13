import React from "react";
import { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import About from "../../content/pages/about/index.mdx";
import { Layout } from "../layouts";
import { Container } from "../components/UI/Grid";
import { Title } from "../components/UI/Title/Title";
import { Text } from "../components/UI/Text/Text";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { DataProps } from "./pages";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutPage = ({ data }: DataProps) => {
	const components = {
		p: ({ children }: React.HTMLProps<HTMLParagraphElement>) => (
			<Text
				css={css`
					max-width: 70%;
					margin: 10px auto;
					text-align: center;
				`}
			>
				{children}
			</Text>
		),
	};
	return (
		<Layout>
			<Container maxWidth={"1200px"}>
				<Title
					level={1}
					css={css`
						text-align: center;
						display: inline-block;
						width: 100%;
						background-color: ${({ theme }) =>
							theme.colors.primary[100]};
					`}
				>
					{data.mdx.frontmatter.title}
				</Title>
				<GatsbyImage
					image={
						data.mdx.frontmatter.cover?.childImageSharp
							.gatsbyImageData
					}
					alt="about us promo image"
				/>
				<MDXProvider components={components}>
					<About />
				</MDXProvider>
			</Container>
		</Layout>
	);
};

export default AboutPage;

export const Head = ({ data }: DataProps) => (
	<SEO
		title={data.mdx?.frontmatter.title}
		description={data.mdx?.frontmatter.description}
	/>
);

export const query = graphql`
	query MyQuery {
		mdx(frontmatter: { slug: { eq: "about" } }) {
			frontmatter {
				title
				description
				cover {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
