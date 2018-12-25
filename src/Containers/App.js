import React, { Component, Fragment } from "react";
import { Box, Flex, Text, Heading } from "rebass";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Folder, Send, Info } from "react-feather";
import {
  BrowserRouter as Router,
  Route,
  Link as RouteLink
} from "react-router-dom";

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
      <Router>
        <ThemeProvider theme={theme}>
          <Flex
            flexWrap="wrap"
            className="main"
            color={pinkred}
            justifyContent="center"
          >
            <Box width={[1, 1 / 3, 4 / 7]} py={3}>
              <RouteLink to="/" className="codemoe">
                <Text className="brand" fontSize={3}>
                  /0/!hack
                </Text>
              </RouteLink>
            </Box>
            <Box width={[1 / 3, 2 / 21]} py={3}>
              <RouteLink to="/about" className="codemoe">
                <Info size={24} />
                <Text>about</Text>
              </RouteLink>
            </Box>
            <Box width={[1 / 3, 2 / 21]} py={3}>
              <RouteLink to="/projects" className="codemoe">
                <Folder size={24} />
                <Text>projects</Text>
              </RouteLink>
            </Box>
            <Box width={[1 / 3, 2 / 21]} py={3}>
              <RouteLink to="/contact" className="codemoe">
                <Send size={24} />
                <Text>contact</Text>
              </RouteLink>
            </Box>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
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
          <Text>devops project_management</Text>
          <Text fontSize={[3, 5]} color="white">
            artful developer
          </Text>
          <Text>webdev node react laravel</Text>
          <Text fontSize={[3, 5]} color="white">
            critical designer
          </Text>
          <Text>ui/ux adobe product_design</Text>
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
