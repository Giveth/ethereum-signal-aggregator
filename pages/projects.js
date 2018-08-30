import React, { Component } from 'react'

import { Trail, animated } from 'react-spring'
import Box from '../components/Box'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Text from '../components/Text'

import projects from '../data/projects'

const items = projects.map(project => (
  <Card p={3} m={3} width="300px" height="200px">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #DDDDDD"
      pb={2}
    >
      <Text color="#0A1F44" fontWeight="500" fontSize="24px">
        {project.title}
      </Text>
    </Box>
  </Card>
))

export default class App extends Component {
  static async getInitialProps({ query }) {
    return query
  }

  render() {
    return (
      <div>
        <Navbar activeIndex={1} />
        <Layout display="flex" justifyContent="center">
          <Box display="flex" flexWrap="wrap">
            <Trail
              native
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              keys={items}
            >
              {items.map(item => styles => (
                <animated.div style={styles}>{item}</animated.div>
              ))}
            </Trail>
          </Box>
        </Layout>
      </div>
    )
  }
}
