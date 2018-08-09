import React, { Component } from 'react'

import { Spring } from 'react-spring'
import Layout from '../components/Layout'
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
      <Layout p={3}>
        <Card p={3}>
          <Text textAlign="center" fontWeight="500">
            This is a test!
          </Text>
        </Card>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {styles => (
            <Card p={3} style={styles}>
              <Text textAlign="center" fontWeight="500">
                Hello {world}!
              </Text>
            </Card>
          )}
        </Spring>
      </Layout>
    )
  }
}
