export type DataProps = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				cover: {
					childImageSharp: {
						gatsbyImageData: IGatsbyImageData;
					};
				};
			};
		};
	};
};
