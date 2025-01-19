/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FallbackProps } from "react-error-boundary";
import { NavLink } from "react-router";

import logoSvg from "/logo.svg";

function ErrorFound({ error }: Partial<FallbackProps>) {
  return (
    <div css={wrapperCss}>
      <img src={logoSvg} css={logoCss} alt="Error Page!" loading="lazy" />
      <h3>404</h3>
      <p css={errorMessageCss}>
        {error?.message ??
          "The page you seek is in another castle. Keep exploring!"}
      </p>
      <NavLink to="/" css={resetButtonCss}>Back</NavLink>
    </div>
  );
}

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1em;
  height: 100%;

  h3,
  p {
    margin: 0.3em;
  }
`;

const logoCss = css`
  width: ${150 / 16}em;
  padding: 1em;
`;

const errorMessageCss = css`
  max-width: 50em;
  text-align: center;
`;

const resetButtonCss = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  display: flex;
`;

export default ErrorFound;