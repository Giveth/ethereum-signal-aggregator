import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Card from './Card'
import { Search } from './Icons'

const Input = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  border: 1px solid white;
  border-radius: 3px;
  padding-left: 0.25rem;
  &:focus {
    outline: none;
  }
`

export default class SearchBar extends PureComponent {
  render() {
    return (
      <Card display="flex" alignItems="center" p={2} width="300px">
        <Search />
        <Input onChange={this.props.onChange} />
      </Card>
    )
  }
}
