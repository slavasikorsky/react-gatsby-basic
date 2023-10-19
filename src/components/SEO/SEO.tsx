import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

interface SEOProps {
	title?: string;
	description?: string;
	pathName?: string;
	children?: React.ReactNode;
}

const getSEO = ({ title, description, pathName }: SEOProps) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
	} = useSiteMetadata();

	return {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathName || ``}`,
	};
};
export const SEO = ({ title, description, pathName, children }: SEOProps) => {
	const seo = getSEO({ title, description, pathName });
	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			{children}
		</>
	);
};
