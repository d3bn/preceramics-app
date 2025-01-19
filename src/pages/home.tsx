/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mainLogo from "/images/logo.svg";

function Home() {
  return (
    <div css={wrapperCss}>

<img src={mainLogo} />
      <ul css={listCss}>
        <li>Sculptor.</li>
<li>Ceramist.</li>
<li>Artist.</li>
      </ul>
    </div>
  )
}

const wrapperCss = css`
  
`

const listCss = css`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  padding: 0;
`

export default Home;