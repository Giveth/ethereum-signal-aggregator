import React, { Component } from 'react'

import springs from '../utils/springs'

import { Spring, animated } from 'react-spring'
import { ArrowDown, Link } from '../components/Icons'
import Badge from '../components/Badge'
import Box from '../components/Box'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Text from '../components/Text'
import SearchBar from '../components/SearchBar'
// import ProgressBar from '../components/ProgressBar'

import proposals from '../data/proposals'

const getStatusBadge = (status, selected) => {
  let bg, color, border
  if (status === 'draft') {
    bg = selected ? '#F7BA44' : 'white'
    color = selected ? 'white' : '#F7BA44'
    border = '#D19829'
  }
  if (status === 'accepted') {
    bg = selected ? '#3ED3A3' : 'white'
    color = selected ? 'white' : '#3ED3A3'
    border = '#33B38A'
  }
  if (
    ['deferred', 'final', 'last-call'].filter(item => status === item).length
  ) {
    selected = false
    bg = 'white'
    color = '#0D55CF'
  }
  return (
    <Badge
      bg={bg}
      border={`2px ${selected ? 'solid' : 'dashed'} ${
        selected ? border : color
      }`}
      borderRadius="1rem"
      color={color}
      text={status.toUpperCase()}
      mr={3}
    />
  )
}

const getCategoryBadge = (category, selected) => {
  return (
    <Badge
      bg={selected ? '#BBBBBB' : 'white'}
      border={`2px ${selected ? 'solid' : 'dashed'} #888888`}
      borderRadius=".25rem"
      color={selected ? 'white' : '#888888'}
      text={category[0].toUpperCase() + category.slice(1)}
      mb={2}
    />
  )
}

export default class App extends Component {
  static async getInitialProps({ query }) {
    return query
  }

  state = {
    search: '',
  }

  render() {
    const { search } = this.state

    const items = proposals
      .filter(({ id, title, visible }) => {
        let filterSearch = true
        if (search) {
          const text = 'eip' + id + ' ' + title
          filterSearch = text.toLowerCase().indexOf(search) > -1
        }

        return visible && filterSearch
      })
      .map(({ id, title, status, category }) => (
        <Card m={3} p={3} width="300px">
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
            >
              {getStatusBadge(status, true)}
              <a href={'https://eips.ethereum.org/EIPS/eip-' + id}>
                <Link />
              </a>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" pt={2}>
            <Box display="flex">{getCategoryBadge(category, true)}</Box>
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

    return (
      <div>
        <Navbar activeIndex={0} />
        <Layout>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
            mx={4}
          >
            <Box display="flex" cursor="pointer">
              <Text color="#888888" fontWeight="500">
                Filter
              </Text>
              <ArrowDown style={{ transform: 'rotate(180deg)' }} />
            </Box>
            <SearchBar
              onChange={e =>
                this.setState({ search: e.target.value.toLowerCase() })
              }
            />
          </Box>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {items.map((item, idx) => (
              <Spring
                native
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={idx * 50}
                key={idx}
                children={(styles) => <animated.div style={styles}>{item}</animated.div>}
              />
            ))}
          </Box>
        </Layout>
      </div>
    )
  }
}
