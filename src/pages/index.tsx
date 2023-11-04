import React from "react";
import { Layout } from "../layouts";
import { SEO } from "../components/SEO/SEO";
import { Title } from "../components/Title/Title";
import { Text } from "../components/Text/Text";
import { LinkComponent } from "../components/Link/Link";
import { Container, Col, Row, Section } from "../components/UI/Grid";
import { Button } from "../components/Button/Button";
import { Hero } from "../components/Hero/Hero";

type Props = {};

const index = (props: Props) => {
	return (
		<Layout>
			<Section padding="20px" backgroundImageName="section">
				<Container maxWidth="1366px">
					<Title level={1} margin="0 0 24px">
						Test page Gatsby
					</Title>
					<Row justifyContent="space-around">
						<Col flex={1} padding="10px">
							<Text margin="0 0 24px">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores, sequi minus
								necessitatibus nostrum a eveniet eaque modi
								laboriosam quisquam! Sequi totam illo nesciunt
								aliquid recusandae inventore quo quasi nihil
								doloribus.
							</Text>
							<Button
								to="/"
								margin="0 0 24px"
								padding="12px 16px"
							>
								Button name long text
							</Button>
						</Col>
						<Col flex={1} padding="10px">
							<Text margin="0 0 24px">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores, sequi minus
								necessitatibus nostrum a eveniet eaque modi
								laboriosam quisquam! Sequi totam illo nesciunt
								aliquid recusandae inventore quo quasi nihil
								doloribus.
							</Text>
							<LinkComponent to="@" margin="0 0 24px" color="red">
								Link here
							</LinkComponent>
						</Col>
					</Row>
					<Hero
						title="Lorem ipsum dolor sit amet"
						src="https://res.cloudinary.com/olanetsoft/image/upload/v1554336410/samples/bike.jpg"
						margin="0 0 24px"
					></Hero>
				</Container>
			</Section>
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
