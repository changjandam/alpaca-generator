import React from 'react'
import styled from 'styled-components'
import SelectorButton from '../UI/SelectorButton'

const H2 = styled.h2`
  font-size: 12px;
`

const Selectors = (props) => {
  return (
    <div id='selectors'>
      <div id='parts'>
        <H2 id='parts-title'>ACCESSORIZE THE ALPACA&apos;S</H2>
        <div id='parts-btn-group'>
          <SelectorButton>btn</SelectorButton>
        </div>
      </div>
      <div id='styles'>
        <H2 id='styles-title'>STYLE</H2>
        <div id='styles-btn-group'>
          <SelectorButton selected>btn</SelectorButton>
        </div>
      </div>
    </div>
  )
}

export default Selectors
