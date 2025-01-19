import{j as i,a as e,m as t,c as s}from"./logo-o3YWQyS5.js";import{N as a}from"./index-Czi6g-84.js";function m({error:n}){return i("div",{css:o,children:[e("img",{src:t,css:r,alt:"Error Page!",loading:"lazy"}),e("h3",{children:"404"}),e("p",{css:c,children:(n==null?void 0:n.message)??"The page you seek is in another castle. Keep exploring!"}),e(a,{to:"/",css:d,children:"Back"})]})}const o=s`
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
`,r=s`
  width: ${150/16}em;
  padding: 1em;
`,c=s`
  max-width: 50em;
  text-align: center;
`,d=s`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  display: flex;
`;export{m as default};
