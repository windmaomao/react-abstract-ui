# Core UI

Abstract ui components without fixing the style. 

## Usage

In order to create a component for your project, 

```javascript
import { Button } from 'core-ui'

const Style = props => (
  <div {...props} styles={{ fontSize: '18px' }} />
)

const ButtonStyled = props => (
  <Button Style={Style} {...props} />
)
```

`Style` component serves as the wrapper providing styles into underlying component. 

