import React from 'react'
import styled from 'styled-components'
import SelectorButton from '../UI/SelectorButton'
import Proptypes from 'prop-types'

const H2 = styled.h2`
  font-size: 12px;
`

const Selectors = (props) => {
  return (
    <div id='selectors'>
      <div id='parts'>
        <H2 id='parts-title'>ACCESSORIZE THE ALPACA&apos;S</H2>
        <div id='parts-btn-group'>
          {Object.keys(props.partsData).map(part => {
            return (<SelectorButton key={part}>{part.toString().toLowerCase()}</SelectorButton>)
          })}
        </div>
      </div>
      <div id='styles'>
        <H2 id='styles-title'>STYLE</H2>
        <div id='styles-btn-group'>
          {Object.keys(props.partsData[props.part]).map(style => {
            return (<SelectorButton key={style}>{style.toString().toLowerCase()}</SelectorButton>)
          })}
        </div>
      </div>
    </div>
  )
}

Selectors.propTypes = {
  partsData: Proptypes.object,
  part: Proptypes.string,
  onPartChange: Proptypes.func,
  style: Proptypes.string,
  onStyleChange: Proptypes.func
}

export default Selectors
