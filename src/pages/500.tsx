import React from "react";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts";
import { Title } from "../components/UI/Title/Title";
import { Container } from "../components/UI/Grid/Container";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

const ServerErrorPage = (props: Props) => {
	return (
		<Layout>
			<Container alignItems="center">
				<Title level={1} color="#4a4a4a">
					500 Server error
				</Title>
				<StaticImage
					src="../images/500.webp"
					alt="404 page"
					width={200}
				/>
			</Container>
		</Layout>
	);
};

export default ServerErrorPage;

export const Head = () => <SEO title="404 page | my Gatsby site" />;
