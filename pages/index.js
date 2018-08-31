import React, { Component } from 'react'

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

const getStatusBadgeColors = (status, selected) => {
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
    bg = selected ? '#0C66FF' : 'white'
    color = selected ? 'white' : '#0C66FF'
    border = '#0D55CF'
  }

  return { bg, color, border }
}

const StatusBadge = props => {
  const { status, selected } = props
  const { bg, color, border } = getStatusBadgeColors(status, selected)
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
      cursor={props.onClick ? 'pointer' : 'default'}
      {...props}
    />
  )
}

const CategoryBadge = props => {
  const { category, selected } = props
  return (
    <Badge
      bg={selected ? '#BBBBBB' : 'white'}
      border={`2px ${selected ? 'solid' : 'dashed'} #888888`}
      borderRadius=".25rem"
      color={selected ? 'white' : '#888888'}
      text={category[0].toUpperCase() + category.slice(1)}
      mb={2}
      cursor={props.onClick ? 'pointer' : 'default'}
      {...props}
    />
  )
}

export default class App extends Component {
  static async getInitialProps({ query }) {
    return query
  }

  state = {
    search: '',
    activeFilter: false,
    selectedStatusBadges: [],
    selectedCategoryBadges: [],
  }

  statusBadgeToggle = badge => {
    let { selectedStatusBadges } = this.state
    if (selectedStatusBadges.filter(item => item === badge).length) {
      this.setState({
        selectedStatusBadges: selectedStatusBadges.filter(
          item => item !== badge,
        ),
      })
    } else {
      this.state.selectedStatusBadges.push(badge)
      this.setState({})
    }
  }

  categoryBadgeToggle = badge => {
    let { selectedCategoryBadges } = this.state
    if (selectedCategoryBadges.filter(item => item === badge).length) {
      this.setState({
        selectedCategoryBadges: selectedCategoryBadges.filter(
          item => item !== badge,
        ),
      })
    } else {
      this.state.selectedCategoryBadges.push(badge)
      this.setState({})
    }
  }

  render() {
    const {
      search,
      activeFilter,
      selectedStatusBadges,
      selectedCategoryBadges,
    } = this.state

    const items = proposals
      .filter(({ id, title, visible, status, category }) => {
        let filterSearch = true
        let filterStatusBadges = true
        let filterCategoryBadges = true
        if (search) {
          const text = 'eip' + id + ' ' + title
          filterSearch = text.toLowerCase().indexOf(search) > -1
        }
        if (selectedStatusBadges.length) {
          filterStatusBadges = selectedStatusBadges.filter(
            badge => badge === status,
          ).length
        }
        if (selectedCategoryBadges.length) {
          filterCategoryBadges = selectedCategoryBadges.filter(
            badge => badge === category,
          ).length
        }

        return (
          visible && filterSearch && filterStatusBadges && filterCategoryBadges
        )
      })
      .map(({ id, title, status, category }) => (
        <Card m={3} p={0} width="300px">
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="4px 4px 0px 0px"
            bg={getStatusBadgeColors(status, false).color}
          >
            <Text color="#FFF" fontWeight="700" fontSize="30px">
              EIP
              {id}
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <StatusBadge status={status} border="solid" />
              <a
                target="_blank"
                href={'https://eips.ethereum.org/EIPS/eip-' + id}
              >
                <Link />
              </a>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" p={3}>
            <Box display="flex">
              <CategoryBadge category={category} selected />
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
            <Box
              display="flex"
              cursor="pointer"
              onClick={() => this.setState({ activeFilter: !activeFilter })}
            >
              <Text color="#888888" fontWeight="500">
                Filter
              </Text>
              <ArrowDown
                style={{ transform: activeFilter ? '' : 'rotate(180deg)' }}
              />
            </Box>
            <SearchBar
              onChange={e =>
                this.setState({ search: e.target.value.toLowerCase() })
              }
            />
          </Box>
          {activeFilter && (
            <>
              <Box mx={4}>
                <Box display="flex" alignItems="center" mt={3}>
                  <Text color="#888888" fontWeight="700" fontSize="24px" mr={3}>
                    Status:
                  </Text>
                  <Text color="#888888" fontWeight="700" mr={3}>
                    Active
                  </Text>
                  {['draft', 'last-call', 'accepted'].map(badge => (
                    <StatusBadge
                      status={badge}
                      selected={
                        selectedStatusBadges.filter(item => item === badge)
                          .length
                      }
                      onClick={() => this.statusBadgeToggle(badge)}
                    />
                  ))}
                  <Text color="#888888" fontWeight="700" mx={3}>
                    Historical
                  </Text>
                  {['deferred', 'final'].map(badge => (
                    <StatusBadge
                      status={badge}
                      selected={
                        selectedStatusBadges.filter(item => item === badge)
                          .length
                      }
                      onClick={() => this.statusBadgeToggle(badge)}
                    />
                  ))}
                </Box>
              </Box>
              <Box mx={3} mt={3}>
                <Text color="#888888" fontWeight="500" mx={3}>
                  Category
                </Text>
                <Box mx={3} mt={2} display="flex" borderTop="1px solid #DDDDDD">
                  {[
                    'core',
                    'networking',
                    'interface',
                    'erc',
                    'informational',
                    'meta',
                  ].map(badge => (
                    <CategoryBadge
                      category={badge}
                      selected={
                        selectedCategoryBadges.filter(item => item === badge)
                          .length
                      }
                      onClick={() => this.categoryBadgeToggle(badge)}
                      mr={3}
                      mt={3}
                    />
                  ))}
                </Box>
              </Box>
            </>
          )}
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {items.map((item, idx) => (
              <Spring
                native
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={idx * 50}
                key={idx}
                children={styles => (
                  <animated.div style={styles}>{item}</animated.div>
                )}
              />
            ))}
          </Box>
        </Layout>
      </div>
    )
  }
}
