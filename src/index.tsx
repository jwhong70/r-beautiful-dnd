import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

// #2-2
const GlobalStyle = createGlobalStyle`
/* 웹 폰트 설정 */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
/* CSS reset: styled-reset에서 복사해서 붙임 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0; padding: 0; border: 0;
  font-size: 100%; font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
*[hidden] { display: none; }
body { line-height: 1; }
menu, ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after,
q:before, q:after { content: ''; content: none; }
table { border-collapse: collapse; border-spacing: 0; }
/* 나만의 추가 style 설정 */
* { box-sizing: border-box; }
body {
  /* 웹 폰트 적용 */
  font-weight: 300;  
  font-family: 'Source Sans Pro', sans-serif;
  /* 나만의 추가 style 설정 */
  background-color:${(props) => props.theme.bgColor};
  color:black;
  line-height: 1.2;  
}
/* 나만의 추가 style 설정 */
a { 
  text-decoration:none; 
  color:inherit;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // #3-1-2
  // #2-3-2
  <RecoilRoot>
    {/* #2-1-3 */}
    <ThemeProvider theme={darkTheme}>
      {/* #2-2 */}
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
