import React, { Component } from 'react'

import { Spring } from 'react-spring'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Text from '../components/Text'

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
        <Layout mt={3}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => (
              <Card p={3} m={3} style={styles}>
                <Text textAlign="center" fontWeight="500">
                  Hello {world}!
                </Text>
              </Card>
            )}
          </Spring>
        </Layout>
      </div>
    )
  }
}
