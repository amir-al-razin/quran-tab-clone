import { theme, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  fonts: {
    ...theme.fonts,
    body: "Lexend, sans-serif",
    heading: "Lexend, serif",
    madani: "Madani",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
    blackops: {
      200: "rgba(0,0,0,0.3)",
    },
    whiteops: {
      200: "rgba(255,255,255,0.3)",
    },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
  styles: {
    global: {
      body: {
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "red.400",
          borderRadius: "24px",
        },
      },
    },
  },
});

export default customTheme;
