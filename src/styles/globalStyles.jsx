import { createGlobalStyle } from "styled-components";

export const AppRootStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Titillium+Web:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");

    /*Setting font for default font for entire website*/

    html {
        font-family: "Roboto", sans-serif;
    }
    /*setting container height and width with vh and vw unsure if it is the most optimal method*/
    #app-container {
        width: 100vw;
        height: 100vh;
    }
`;
