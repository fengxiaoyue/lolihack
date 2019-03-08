import React, { Component, Fragment } from "react";
import { Box, Flex, Text, Heading } from "rebass";
import { ThemeProvider } from "styled-components";
import { Folder, Send, Info } from "react-feather";
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
  fontSizes: [12, 14, 16, 24, 32, 48, 64]
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
            <Flex width={1}>
              <Box width={2 / 3} p={4}>
                <RouteLink to="/">
                  <Text fontSize={3} color={offwhite}>
                    /0/!hack
                  </Text>
                </RouteLink>
              </Box>
              <Flex width={1 / 3} p={4} justifyContent="flex-end">
                <Box px={4}>
                  <RouteLink to="/about">
                    <Flex color={offwhite} alignItems="center">
                      <Box pr={2}>
                        <Info size={20} />
                      </Box>
                      <Text fontSize={16}>about</Text>
                    </Flex>
                  </RouteLink>
                </Box>
                <Box px={4}>
                  <RouteLink to="/projects">
                    <Flex color={offwhite} alignItems="center">
                      <Box pr={2}>
                        <Folder size={20} />
                      </Box>
                      <Text fontSize={16}>projects</Text>
                    </Flex>
                  </RouteLink>
                </Box>
                <Box px={4}>
                  <RouteLink to="/contact">
                    <Flex color={offwhite} alignItems="center">
                      <Box pr={2}>
                        <Send size={20} />
                      </Box>
                      <Text fontSize={16}>contact</Text>
                    </Flex>
                  </RouteLink>
                </Box>
              </Flex>
            </Flex>
            <Flex width={1}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Flex>
            <Flex width={1} alignItems="center" justifyContent="flex-end">
              <Text color={offwhite}>Hello</Text>
            </Flex>
          </Flex>
        </ThemeProvider>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <>
        <Box width={2 / 3} p={4}>
          <Heading className="codehack" fontSize={5}>
            cd /0/!hack
          </Heading>
          <Text className="coderesponse">bash: !hack: event not found</Text>
        </Box>
        <Box width={1 / 3} p={4}>
          <Box width={1}>
            <Text fontSize={[3, 5]} color={offwhite}>
              tech nomad
            </Text>
            <Text bg={fraudulent} color={election}>
              software development & IT ops
            </Text>
          </Box>
          <Box width={1}>
            <Text fontSize={[3, 5]} color={offwhite}>
              artful developer
            </Text>
            <Text bg={fraudulent} color={election}>
              web & mobile development
            </Text>
          </Box>
          <Box width={1}>
            <Text fontSize={[3, 5]} color={offwhite}>
              critical designer
            </Text>
            <Text bg={fraudulent} color={election}>
              user interface & user experience
            </Text>
          </Box>
        </Box>
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
