import React from "react";
import { Layout } from "../layouts";
import { SEO } from "../components/SEO/SEO";
import { Title } from "../components/Title/Title";
import { Text } from "../components/Text/Text";
import { LinkBlock } from "../components/Link/Link";
import { Container } from "../components/Container/Container";
import { Button } from "../components/Button/Button";
import { Hero } from "../components/Hero/Hero";
import { Row } from "../components/Row";
import { Col } from "../components/Col";

type Props = {};

const index = (props: Props) => {
	return (
		<Layout>
			<Title level={1} color="#ed6300" margin="0 10px 30px">
				Test page Gatsby
			</Title>
			<Hero
				title="Lorem ipsum dolor sit amet"
				src="https://res.cloudinary.com/olanetsoft/image/upload/v1554336410/samples/bike.jpg"
				margin="0 10px"
			></Hero>
			<Container margin="20px">
				{/* TODO ROW COL COMPONENTS */}
				<Row gap="40px">
					<Col size={50}>
						<Text color="#1f1f1f" margin="0 0 10px">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Libero id cum recusandae impedit, est officia
							temporibus earum delectus suscipit cupiditate
							explicabo excepturi aliquam ratione veritatis
							magnam. Qui ipsam unde enim!
						</Text>
						<LinkBlock to="/404" color="#ed6300" margin="0 0 20px">
							Test link
						</LinkBlock>
					</Col>
					<Col size={50}>
						<Text color="#ccc" margin="0 0 10px">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Libero id cum recusandae impedit, est officia
							temporibus earum delectus suscipit cupiditate
							explicabo excepturi aliquam ratione veritatis
							magnam. Qui ipsam unde enim!
						</Text>
						<Button
							to="/"
							color="#ed6300"
							backgroundcolor="#2d2d2d"
							transform="scale(1.1)"
						>
							Test button
						</Button>
					</Col>
				</Row>
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
