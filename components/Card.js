import styled from 'styled-components'
import Box from './Box'

const onHover = `
  &:hover {
    transform: translateY(-4px);
    cursor: pointer;
  }
`

export default styled(Box)`
  box-shadow: 0px -2px 18px 0px rgba(72, 89, 102, 0.25);
  border-radius: 4px;
  transition: all 0.15s ease;
  ${({ onClick }) => onClick && onHover};
`
