import { css } from "@emotion/css";
import { Footer } from "../components/common";
import { Header } from "../components/common/Header";
import Products from "../pages/products";

const pink = "#cb1284";
const white = "#fff";
const black = "#0e010c";

export const Layout = ({ children }) => {
  const gridCss = css``;

  const headerCss = css`
    background-color: ${pink};
    color: ${white};

    padding: 6px 15px 6px 15px;
  `;

  // const mainAreaCss = css`
  // grid-area: main-area;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // min-height: 100vh;
  // `;

  const footerCss = css`
    background-color: ${black};
    padding: 6px 15px 6px 15px;
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
