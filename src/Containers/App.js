import React, { Component } from "react";
import { Box, Flex, Link, Text, Heading } from "rebass";
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
          justifyContent="center"
        >
          <Box width={[1, 1 / 3, 4 / 7]} py={3}>
            <Link className="codemoe" href="/" color="white">
              <Text className="brand" fontSize={3}>
                /0/!hack
              </Text>
            </Link>
          </Box>
          <Box width={[1 / 3, 2 / 21]} py={3}>
            <Link className="codemoe" href="/about" color="inherit" py={[0, 1]}>
              <Info />
              <Text>about</Text>
            </Link>
          </Box>
          <Box width={[1 / 3, 2 / 21]} py={3}>
            <Link
              className="codemoe"
              href="/projects"
              color="inherit"
              py={[0, 1]}
            >
              <Folder />
              <Text>projects</Text>
            </Link>
          </Box>
          <Box width={[1 / 3, 2 / 21]} py={3}>
            <Link
              className="codemoe"
              href="/contact"
              color="inherit"
              py={[0, 1]}
            >
              <Send />
              <Text>contact</Text>
            </Link>
          </Box>
          <Box width={[1, 4 / 7]}>
            <Heading className="codehack" fontSize={5}>
              cd /0/!hack
            </Heading>
            <Text className="coderesponse">bash: !hack: event not found</Text>
          </Box>
          <Box width={[1, 1 / 2, 2 / 7]}>
            <Text fontSize={[3, 5]} color="white">
              tech nomad
            </Text>
            <Text>devops: ubuntu 18.04 git</Text>
            <Text fontSize={[3, 5]} color="white">
              artful developer
            </Text>
            <Text>webdev: node react laravel bootstrap material</Text>
            <Text fontSize={[3, 5]} color="white">
              critical designer
            </Text>
            <Text>ui/ux: photoshop illustrator xd</Text>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
