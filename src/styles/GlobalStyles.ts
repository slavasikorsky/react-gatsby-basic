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
};

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${fontFace.RalewayBlack}
    ${fontFace.RalewayRegular}

    :root {
        --body-font-size: 18px;
        --body-font-weight: 400;
        --body-letter-spacing: 1px;
        --body-font-family: "Raleway-Regular", sans-serif;
        --heading-font-family: "Raleway-Black", sans-serif;
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
        color: ${({ theme }) => theme.colors.primary[300]};
    }

    h1 {
        margin: 0 0 20px;
        font-family: var(--heading-font-family);
        color: ${({ theme }) => theme.colors.primary[200]};
    }

    p {
        margin: 0 0 20px;
    }
`;
