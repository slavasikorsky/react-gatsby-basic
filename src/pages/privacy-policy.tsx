import React from "react";
import { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import PrivacyPolicy from "../../content/pages/privacy-policy/index.mdx";
import { Layout } from "../layouts";
import { Container } from "../components/UI/Grid";
import { Title } from "../components/UI/Title/Title";
import { Text } from "../components/UI/Text/Text";
import { LinkComponent } from "../components/UI/Link/Link";
import { SEO } from "../components/SEO";
import { DataProps } from "./pages";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const PrivacyPolicyPage = ({ data }: DataProps) => {
	const components = {
		p: ({ children }: React.HTMLProps<HTMLParagraphElement>) => (
			<Text margin={"0 0 20px"}>{children}</Text>
		),
		a: ({ children, href }: React.HTMLProps<HTMLAnchorElement>) => (
			<LinkComponent type="link" to={href as string} target="_blank">
				{children}
			</LinkComponent>
		),
		h2: ({ children }: React.HTMLProps<HTMLHeadElement>) => (
			<Title
				level={2}
				margin="0 0 20px"
				css={css`
					text-align: center;
					width: 100%;
				`}
			>
				{children}
			</Title>
		),
	};
	return (
		<Layout>
			<Container>
				<Title level={1}>{data.mdx.frontmatter.title}</Title>
				<GatsbyImage
					image={
						data?.mdx?.frontmatter?.cover?.childImageSharp
							.gatsbyImageData
					}
					alt="image alt"
				/>
				<MDXProvider components={components}>
					<PrivacyPolicy />
				</MDXProvider>
			</Container>
		</Layout>
	);
};

export default PrivacyPolicyPage;

export const Head = ({ data }: DataProps) => (
	<SEO
		title={data.mdx.frontmatter.title}
		description={data.mdx.frontmatter.description}
	/>
);

export const query = graphql`
	query MyQuery {
		mdx(frontmatter: { slug: { eq: "privacy" } }) {
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
