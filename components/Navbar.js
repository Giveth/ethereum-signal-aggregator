import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Layout from './Layout'
import Box from './Box'
import Link from './Link'
import { Logo } from './Icons'

const Container = styled.div`
  height: 3.5rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px -2px 18px 0px rgba(72, 89, 102, 0.25);
`

const ContainItems = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 150px;
  font-weight: 500;
  color: #8a94a6;
  &:hover {
    border-bottom: 2px solid #0c66ff;
    cursor: pointer;
    font-weight: 700;
    color: black;
  }
`

export default class Navbar extends PureComponent {
  render() {
    return (
      <Container>
        <ContainItems>
          <Box pl={4} display="flex">
            <Logo />
          </Box>
          <Box display="flex">
            <Items width="150px">
              <Link>Proposals</Link>
            </Items>
            <Items width="150px">
              <Link>Projects</Link>
            </Items>
            <Items width="150px">
              <Link>About</Link>
            </Items>
          </Box>
        </ContainItems>
      </Container>
    )
  }
}
