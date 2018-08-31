import styled from 'styled-components'
import {
  height,
  width,
  space,
  color,
  flex,
  flexDirection,
  flexWrap,
  display,
  alignSelf,
  alignItems,
  justifyContent,
  borders,
  borderRadius,
} from 'styled-system'

export default styled.div`
  ${height}
  ${width}
  ${space}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${display}
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${borders}
  ${borderRadius}
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
`
