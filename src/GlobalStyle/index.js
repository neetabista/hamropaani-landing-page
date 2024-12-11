import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none !important;
  list-style: none;
  outline: none;
  border: none;
  font-family: "Open Sans", sans-serif;
}



h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  color: inherit;
  margin: 0;
}
a:hover {
  text-decoration: none !important;
}
`;
