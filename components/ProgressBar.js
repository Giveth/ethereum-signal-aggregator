import styled from 'styled-components'
import { Spring } from 'react-spring'
import AnimatedBox from './AnimatedBox'

import springs from '../utils/springs'

const ProgressBar = styled(AnimatedBox)`
  box-shadow: 0px -2px 18px 0px rgba(72, 89, 102, 0.25);
  border-radius: 1rem;
`

export default props => (
  <Spring
    native
    config={springs.lazy}
    from={{ progress: 0 }}
    to={{ progress: props.progress }}
  >
    {({ progress }) => (
      <ProgressBar
        style={{ width: progress.interpolate(t => `${t * 100}%`) }}
        {...props}
      />
    )}
  </Spring>
)
