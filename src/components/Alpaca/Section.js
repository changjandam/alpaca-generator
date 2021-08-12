import React from 'react'
import styled from 'styled-components'

import blue50 from '../../alpaca/backgrounds/blue60.png'
import Selectors from './Selectors'
import MethodButton from '../UI/MethodButton'

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: auto auto;
  grid-gap: 20px;
`

const Section = (props) => {
  return (
    <GridSection>
      <div id='output'>
        <div id='display-alpaca'>
          <img src={blue50} alt='' width='300' />
        </div>
      </div>
      <Selectors />
      <MethodButton id='download'><strong>Download</strong></MethodButton>
      <MethodButton id='random'><strong>Random</strong></MethodButton>
    </GridSection>
  )
}

export default Section
