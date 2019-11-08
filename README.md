# Abstract UI

Abstract ui components decoupled from the style. 

## Usage

To create a `Button` with `styles`, inject them through a wrapper component `Style`.

```javascript
import { Button } from 'react-abstract-ui'

const Style = props => (
  <div {...props} styles={{ fontSize: '18px' }} />
)

const ButtonStyled = props => (
  <Button Style={Style} {...props} />
)
```

The component `Style` is a `Css` in `Js` approach, which can be implemented with other third party library such as `styled-components` to add more features. 

```javascript
import styled from 'styled-components'

const Style = styled.button({ fontSize: '18px' })
```
