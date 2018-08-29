import styled from 'styled-components'
import Box from './Box'
import Text from './Text'

const Container = styled(Box)`
  box-shadow: 0px -2px 18px 0px rgba(72, 89, 102, 0.25);
  padding: .25rem .5rem;
  text-align: center;
  font-size: 14px;
  ${({ borderRadius }) => `border-radius: ${borderRadius}`}
`

export default (props) => (
  <Container {...props}>
    <Text fontWeight="500">{props.text}</Text>
  </Container>
)
