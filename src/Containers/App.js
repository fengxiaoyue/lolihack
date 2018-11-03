import React, { Component } from "react";
import { Box, Flex, Link, Card, Image, Heading, Text } from "rebass";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Folder, Send, Info } from "react-feather";

const darkslateblue = "#483d8b";
const darkcyanblue = "#080d16";
const pinkred = "#f33441";

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    pinkred,
    darkslateblue,
    darkcyanblue
  },
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: pinkred
    },
    outline: {
      color: pinkred,
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 2px"
    }
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex
          flexWrap="wrap"
          className="main"
          color={pinkred}
          alignItems="center"
          justifyContent="center"
        >
          <Box p={5} bg={darkcyanblue}>
            <Link className="codemoe" href="/" color="white">
              <Text fontSize={6}>/0/!hack</Text>
            </Link>
            <Text fontSize={2}>UI/UX &amp; front-end dev</Text>
          </Box>
          <Box p={5} bg={darkcyanblue}>
            <Link
              className="codemoe"
              href="/about"
              color="inherit"
              px={5}
              py={1}
            >
              <Info />
              about
            </Link>
            <Link
              className="codemoe"
              href="/projects"
              color="inherit"
              px={5}
              py={1}
            >
              <Folder />
              projects
            </Link>
            <Link
              className="codemoe"
              href="/contact"
              color="inherit"
              px={5}
              py={1}
            >
              <Send />
              contact
            </Link>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
