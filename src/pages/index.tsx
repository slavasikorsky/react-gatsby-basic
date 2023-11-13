import React from "react";
import { Layout } from "../layouts";
import { SEO } from "../components/SEO/SEO";
import { Title } from "../components/UI/Title/Title";
import { Text } from "../components/UI/Text/Text";
import { LinkComponent } from "../components/UI/Link/Link";
import { Container, Col, Row, Box, Section } from "../components/UI/Grid";
import { Button } from "../components/UI/Button/Button";
import styled, { css } from "styled-components";
import AppTheme from "../styles/Theme";

type Props = {};

type FormProps = {
	email?: HTMLFormElement;
};

const index = (props: Props) => {
	const { colors } = AppTheme;
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log((event.target as FormProps).email?.value);
	};

	const FormButton = styled(Button)`
		width: 200px;
		display: block;
	`;

	const Hero = styled(Section)`
		min-height: 300px;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	`;

	const HeroButton = styled(LinkComponent)`
		display: inline-block;
		text-align: center;
		margin: 30px auto 0;
		min-width: 200px;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.colors.primary[300]};
		color: ${({ theme }) => theme.colors.light[100]};
		&:hover {
			color: ${({ theme }) => theme.colors.dark[300]};
		}
	`;

	return (
		<Layout>
			<Section padding="20px" backgroundImageName="section">
				<Container maxWidth="1366px">
					<Title
						level={1}
						margin="0 0 24px"
						css={css`
							text-align: center;
							display: inline-block;
							width: 100%;
						`}
					>
						Test page Gatsby
					</Title>
					<Row justifyContent="space-around">
						<Col flex={1} padding="10px">
							<Text
								margin="0 0 24px"
								color={`${colors.light[100]}`}
							>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores, sequi minus
								necessitatibus nostrum a eveniet eaque modi
								laboriosam quisquam! Sequi totam illo nesciunt
								aliquid recusandae inventore quo quasi nihil
								doloribus.
							</Text>
						</Col>
						<Col flex={1} padding="10px">
							<Text
								margin="0 0 24px"
								color={`${colors.light[100]}`}
							>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores, sequi minus
								necessitatibus nostrum a eveniet eaque modi
								laboriosam quisquam! Sequi totam illo nesciunt
								aliquid recusandae inventore quo quasi nihil
								doloribus.
							</Text>
							<LinkComponent
								type="link"
								to="https://google.com"
								margin="0 0 24px"
								color="red"
							>
								Link here
							</LinkComponent>

							<LinkComponent
								type="button"
								to="https://google.com"
								margin="0 0 24px"
								color="#ccc"
								backgroundColor="black"
							>
								Button here
							</LinkComponent>
						</Col>
					</Row>
					{/* Hero image section */}
					<Hero margin="40px 0" backgroundImageName="sample">
						<Title level={2} margin="0 0 24px" color="white">
							Lorem ipsum
						</Title>
						<Text margin="0 0 24px" color="white">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Asperiores
						</Text>
						<HeroButton type="button" to="/buy">
							CTA button
						</HeroButton>
					</Hero>
					<Text color={`${colors.light[300]}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Expedita repellendus, velit pariatur eaque officia
						praesentium doloremque vitae ab aspernatur earum ut, at
						minima iusto a assumenda maxime rem molestias inventore!
					</Text>
					<Hero margin="40px 0" backgroundImageName="hero">
						<Box as="form" onSubmit={onSubmitHandler}>
							<label>
								<span>Send me news please</span>
								<input type="text" name="email" />
							</label>
							<FormButton type="submit" padding="12px 16px">
								Send
							</FormButton>
						</Box>
					</Hero>
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
