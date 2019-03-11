import React, { Component, Fragment } from "react";
import { Box, Flex, Text, Heading } from "rebass";
import { Folder, Send, Info } from "react-feather";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link as RouteLink
} from "react-router-dom";

const abyss = "#0B0D1D";
const offwhite = "#FAFAFA";
const fraudulent = "#0D324D";
const election = "#7F5A83";

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Share Tech Mono, monospace"
  }
};

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Flex
            flexWrap="wrap"
            bg={abyss}
            color={fraudulent}
            justifyContent="center"
            css={{
              minHeight: "100vh",
              width: "100vw",
              a: { textDecoration: "none" }
            }}
          >
            <Nav />
            <Flex width={1} px={[3, 7]}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Flex>
            <Footer />
          </Flex>
        </ThemeProvider>
      </Router>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <Flex width={1} px={[3, 7]} py={[3, 4]}>
        <Flex width={[1 / 5, 2 / 3]}>
          <RouteLink to="/">
            <Text fontSize={16} color={offwhite}>
              /0/!hack
            </Text>
          </RouteLink>
        </Flex>
        <Flex width={[4 / 5, 1 / 3]} justifyContent="flex-end">
          <Box pl={[3, 4]}>
            <RouteLink to="/about">
              <Flex color={offwhite} alignItems="center">
                <Box pr={[1, 2]}>
                  <Info size={20} />
                </Box>
                <Text fontSize={16}>about</Text>
              </Flex>
            </RouteLink>
          </Box>
          <Box pl={[3, 4]}>
            <RouteLink to="/projects">
              <Flex color={offwhite} alignItems="center">
                <Box pr={[1, 2]}>
                  <Folder size={20} />
                </Box>
                <Text fontSize={16}>projects</Text>
              </Flex>
            </RouteLink>
          </Box>
          <Box pl={[3, 4]}>
            <RouteLink to="/contact">
              <Flex color={offwhite} alignItems="center">
                <Box pr={[1, 2]}>
                  <Send size={20} />
                </Box>
                <Text fontSize={16}>contact</Text>
              </Flex>
            </RouteLink>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <Flex
        width={1}
        px={[3, 7]}
        py={[3, 4]}
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Text color={offwhite}>Hello there, stranger.</Text>
      </Flex>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <>
        <Flex width={[1, 1 / 3]} alignItems="center">
          <Box width={1}>
            <Box width={1} pb={2}>
              <Text fontSize={36} color={offwhite} pb={2}>
                tech nomad
              </Text>
              <Text bg={fraudulent} color={election}>
                software development & IT ops
              </Text>
            </Box>
            <Box width={1} pb={2}>
              <Text fontSize={36} color={offwhite} pb={2}>
                artful developer
              </Text>
              <Text bg={fraudulent} color={election}>
                web & mobile development
              </Text>
            </Box>
            <Box width={1} pb={2}>
              <Text fontSize={36} color={offwhite} pb={2}>
                critical designer
              </Text>
              <Text bg={fraudulent} color={election}>
                user interface & user experience
              </Text>
            </Box>
          </Box>
        </Flex>
        {/*

        <Flex
          width={[1 / 3, 2 / 3]}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Heading className="codehack" fontSize={[16, 48]}>
              cd /0/!hack
            </Heading>
            <Text>bash: !hack: event not found</Text>
          </Box>
        </Flex>
        */}
      </>
    );
  }
}

class About extends Component {
  render() {
    return (
      <Fragment>
        <Box width={1}>
          <Heading color="white">About</Heading>
        </Box>
      </Fragment>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <Box width={1}>
          <Heading color="white">Projects</Heading>
        </Box>
      </Fragment>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Box width={1}>
          <Heading color="white">Contact</Heading>
        </Box>
      </Fragment>
    );
  }
}

export default App;
