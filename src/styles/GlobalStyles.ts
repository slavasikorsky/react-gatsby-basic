import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import fonts from "./fonts";

const createFontFace = (
	family: string,
	weight: number | number,
	fontFile: string,
	format: string
) => `
    @font-face {
        font-family: ${family};
        font-weight: ${weight};
        src: url(${fontFile}) format('${format}');
        font-display: swap;
    }
`;

const fontFace = {
	RalewayBlack: createFontFace(
		"Raleway-Black",
		500,
		fonts.ralewayBlack,
		"truetype"
	),
	RalewayRegular: createFontFace(
		"Raleway-Regular",
		400,
		fonts.ralewayRegular,
		"truetype"
	),
	RalewayBold: createFontFace(
		"Raleway-Bold",
		700,
		fonts.ralewayBold,
		"truetype"
	),
};

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${fontFace.RalewayBlack}
    ${fontFace.RalewayRegular}
    ${fontFace.RalewayBold}

    :root {
        --body-font-size: 18px;
        --body-font-weight: 400;
        --body-line-height: 22px;
        --body-letter-spacing: 1px;
        --body-font-family: "Raleway-Regular", sans-serif; 
        --bold-font-family: "Raleway-Bold", sans-serif;
        --heading-font-family: "Raleway-Black", sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        font-family: var(--body-font-family);
        font-size: var(--body-font-size);
        font-weight: var(--body-font-weight);
        line-height: var(--body-line-height);
        color: ${({ theme }) => theme.colors.primary[300]};
    }

    b,strong {
        font-family: var(--bold-font-family);
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0 0 20px;
        font-family: var(--heading-font-family);
        color: ${({ theme }) => theme.colors.primary[200]};
        font-weight: 500;
    }

    p {
        margin: 0 0 20px;
    }

    blockquote {
        border-left: 1px solid #000;
        padding: 10px;
    }

    blockquote > p {
        margin: 0!important;
    }
`;
