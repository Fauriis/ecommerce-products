import { css } from "@emotion/css";
import { Footer } from "../components/common";
import { Header } from "../components/common/Header";

const yellow = "#f8da33";
const white = "#fff";
const blue = "#081747";

export const Layout = ({ children }) => {
  const gridCss = css`

  `;

  const headerCss = css`
    background-color: ${yellow};
    color: ${white};
 
    padding: 6px 15px 6px 15px;
  `;

  // const mainAreaCss = css``;

  const footerCss = css`
    background-color: ${blue};
    padding: 0 16px;
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>
        <Header></Header>
      </header>

      <div>
        {children}
        <footer className={footerCss}>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};
