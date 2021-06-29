import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      /* Madani */
     @font-face {
    	font-family: "Madani";
     	src: url("./madani/KFGQPC.otf") format("opentype");
      }
      `}
  />
);
export default Fonts;
