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
            if (part === props.currentPart) return (<SelectorButton key={part} id={part} onClick={props.onPartChange} selected>{part.toString().toLowerCase()}</SelectorButton>)
            return (<SelectorButton key={part} id={part} onClick={props.onPartChange}>{part.toString().toLowerCase()}</SelectorButton>)
          })}
        </div>
      </div>
      <div id='styles'>
        <H2 id='styles-title'>STYLE</H2>
        <div id='styles-btn-group'>
          {Object.keys(props.partsData[props.currentPart]).map(style => {
            if (style === props.currentStyle) return (<SelectorButton key={style} id={style} onClick={props.onStyleChange} selected>{style.toString().toLowerCase()}</SelectorButton>)
            return (<SelectorButton key={style} id={style} onClick={props.onStyleChange}>{style.toString().toLowerCase()}</SelectorButton>)
          })}
        </div>
      </div>
    </div>
  )
}

Selectors.propTypes = {
  partsData: Proptypes.object,
  currentPart: Proptypes.string,
  onPartChange: Proptypes.func,
  currentStyle: Proptypes.string,
  onStyleChange: Proptypes.func
}

export default Selectors
