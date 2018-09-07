import React, { Component } from 'react'

import { Spring, animated } from 'react-spring'
import { LinkIcon, ArrowRight } from '../components/Icons'
import { Link } from '../routes'
import Box from '../components/Box'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Text from '../components/Text'

import proposals from '../data/proposals'

import springs from '../utils/springs'

import { StatusBadge, CategoryBadge } from './proposals'

export default class App extends Component {
  static async getInitialProps({ query }) {
    return query
  }

  render() {
    const item = proposals
      .filter(({ id }) => this.props.id === 'eip-' + id)
      .map(({ id, title, status, category }) => (
        <Card m={3} p={4} height="600px">
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #DDDDDD"
          >
            <Text color="#0A1F44" fontWeight="700" fontSize="30px">
              EIP
              {id}
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <StatusBadge status={status} selected />
              <a
                target="_blank"
                href={'https://eips.ethereum.org/EIPS/eip-' + id}
              >
                <LinkIcon />
              </a>
            </Box>
          </Box>
          <Link route="/proposals">
            <Box
              cursor="pointer"
              height="90%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box display="flex" flexDirection="column" p={3}>
                <Box display="flex">
                  <CategoryBadge category={category} selected />
                </Box>
                <Text color="#8A94A6" fontWeight="500">
                  {title}
                </Text>
              </Box>
              <Box p={3} display="flex" justifyContent="flex-end">
                <ArrowRight style={{ transform: 'rotate(180deg)' }} />
              </Box>
            </Box>
          </Link>
        </Card>
      ))[0]
    return (
      <div>
        <Navbar activeIndex={0} />
        <Layout>
          <Spring
            config={springs.superLazy}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            native
          >
            {styles => <animated.div style={styles}>{item}</animated.div>}
          </Spring>
        </Layout>
      </div>
    )
  }
}
