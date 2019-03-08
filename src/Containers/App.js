import React, { Component, Fragment } from "react";
import { Box, Flex, Text, Heading } from "rebass";
import { ThemeProvider } from "styled-components";
import { Folder, Send, Info } from "react-feather";
import {
  BrowserRouter as Router,
  Route,
  Link as RouteLink
} from "react-router-dom";

const purple = "#490E49";
const salmon = "#ED8684";
const offwhite = "#FAFAFA";
const fraudulent = "#0D324D";
const election = "#7F5A83";
const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    purple,
    salmon,
    offwhite
  },
  buttons: {
    primary: {
      color: offwhite,
      backgroundColor: salmon
    },
    outline: {
      color: salmon,
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 2px"
    }
  }
};

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Flex
            flexWrap="wrap"
            bg={fraudulent}
            color={election}
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
                  <Text fontSize={3} color={offwhite} alignSelf="center">
                    /0/!hack
                  </Text>
                </RouteLink>
              </Box>
              <Flex width={1 / 3} p={4}>
                <Box width={1 / 3}>
                  <RouteLink to="/about">
                    <Flex
                      color={salmon}
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Box pr={2}>
                        <Info size={20} />
                      </Box>
                      <Text fontSize={16}>about</Text>
                    </Flex>
                  </RouteLink>
                </Box>
                <Box width={1 / 3}>
                  <RouteLink to="/projects">
                    <Flex
                      color={salmon}
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Box pr={2}>
                        <Folder size={20} />
                      </Box>
                      <Text fontSize={16} color={salmon}>
                        projects
                      </Text>
                    </Flex>
                  </RouteLink>
                </Box>
                <Box width={1 / 3}>
                  <RouteLink to="/contact">
                    <Text
                      fontSize={20}
                      color={salmon}
                      css={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Send size={24} />
                      contact
                    </Text>
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
      <Fragment>
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
          <Text>software development & IT ops</Text>
          <Text fontSize={[3, 5]} color="white">
            artful developer
          </Text>
          <Text>web & mobile development</Text>
          <Text fontSize={[3, 5]} color="white">
            critical designer
          </Text>
          <Text>user interface & user experience</Text>
        </Box>
      </Fragment>
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
