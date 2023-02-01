import { css } from "@emotion/css";
import { Header } from "../components/common/Header";

const yellow = "#f8da33";
const white = "#fff";
const gray = "#f2f2f2";

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
    background-color: ${gray};
    padding: 0 16px;
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>
        <Header></Header>
      </header>

      <div>
        {children}
        <footer className={footerCss}>a</footer>
      </div>
    </div>
  );
};
