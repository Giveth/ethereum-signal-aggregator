import React, { Component } from 'react'

import { Trail, animated } from 'react-spring'
import { Link } from '../components/Icons'
import Badge from '../components/Badge'
import Box from '../components/Box'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Text from '../components/Text'
// import ProgressBar from '../components/ProgressBar'

import proposals from '../data/proposals'

const items = proposals.map(({ id, title }) => (
  <Card p={3} m={3} width="300px">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #DDDDDD"
      pb={2}
    >
      <Text color="#0A1F44" fontWeight="700" fontSize="24px">
        EIP
        {id}
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100px"
      >
        <Badge
          bg="#F7BA44"
          border="2px solid #D19829"
          borderRadius="1rem"
          color="white"
          text="DRAFT"
        />
        <a href={'https://eips.ethereum.org/EIPS/eip-' + id}>
          <Link />
        </a>
      </Box>
    </Box>
    <Box display="flex" flexDirection="column" pt={2}>
      <Box display="flex">
        <Badge
          bg="#BBBBBB"
          border="2px solid #888888"
          borderRadius=".25rem"
          color="white"
          text="Core"
          mb={2}
        />
      </Box>
      <Text color="#8A94A6" fontWeight="500">
        {title}
      </Text>
    </Box>
    {/* <Text color="#0A1F44" fontWeight="700" fontSize="20px">
      Stances
    </Text>
    <Box>
      <Text color="#ACB9CF" fontSize="14px">
        Yes
      </Text>
      <ProgressBar height="6px" bg="black" progress={1} />
    </Box> */}
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
        <Navbar activeIndex={0} />
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
