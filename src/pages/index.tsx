import React from "react";
import { Layout } from "../layouts";
import { SEO } from "../components/SEO/SEO";
import { Title } from "../components/Title/Title";
import { Text } from "../components/Text/Text";
import { LinkBlock } from "../components/Link/Link";
import { Container, Col, Row } from "../components/UI/Grid";
import { Button } from "../components/Button/Button";
import { Hero } from "../components/Hero/Hero";

type Props = {};

const index = (props: Props) => {
	return (
		<Layout>
			<Container maxWidth="1366px">
				<Title level={1} margin="0 0 24px">
					Test page Gatsby
				</Title>
				<Row justifyContent="space-around">
					<Col flex={1} padding="10px">
						<Text margin="0 0 24px">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Asperiores, sequi minus necessitatibus nostrum
							a eveniet eaque modi laboriosam quisquam! Sequi
							totam illo nesciunt aliquid recusandae inventore quo
							quasi nihil doloribus.
						</Text>
						<Button to="/" margin="0 0 24px">
							Button name
						</Button>
					</Col>
					<Col flex={1} padding="10px">
						<Text margin="0 0 24px">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Asperiores, sequi minus necessitatibus nostrum
							a eveniet eaque modi laboriosam quisquam! Sequi
							totam illo nesciunt aliquid recusandae inventore quo
							quasi nihil doloribus.
						</Text>
					</Col>
				</Row>
				<Hero
					title="Lorem ipsum dolor sit amet"
					src="https://res.cloudinary.com/olanetsoft/image/upload/v1554336410/samples/bike.jpg"
					margin="0 0 24px"
				></Hero>
			</Container>
		</Layout>
	);
};
export default index;

export const Head = () => (
	<SEO
		title="Main page | my Gatsby site"
		description="lorem ipsum dolor sit amet, consectetur adipiscing elit"
	/>
);
