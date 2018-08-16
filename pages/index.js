import React, { Component } from 'react'

import { Trail, animated } from 'react-spring'
import Box from '../components/Box'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Text from '../components/Text'

import proposals from '../data/proposals'

const items = proposals.map(proposal => (
  <Card p={3} m={3} width="300px">
    <Text textAlign="center" fontWeight="500">
      {proposal.title}
    </Text>
  </Card>
))

export default class App extends Component {
  static async getInitialProps({ query }) {
    return query
  }

  state = {
    world: 'world',
  }

  render() {
    const { world } = this.state

    return (
      <div>
        <Navbar />
        <Layout mt={3} display="flex" justifyContent="center">
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
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
