import React, { useState } from 'react'
import styled from 'styled-components'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'

import Selectors from './Selectors'
import MethodButton from '../UI/MethodButton'
import AlpacaDisplayDiv from './AlpacaDisplayDiv'
import ALPACA from '../../alpaca'

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: auto auto;
  grid-gap: 20px;

  @media(max-width: 700px) {
    grid-template-columns: 300px;
    grid-template-rows: 300px repeat(auto, 3);
  }
`

const Section = () => {
  const [allSelectedParts, setAllSelectedParts] = useState({
    BACKGROUNDS: ALPACA.BACKGROUNDS.blue50,
    EARS: ALPACA.EARS.default,
    NECK: ALPACA.NECK.default,
    NOSE: ALPACA.NOSE.default,
    HAIR: ALPACA.HAIR.default,
    LEG: ALPACA.LEG.bubbleTea,
    EYES: ALPACA.EYES.default,
    MOUTH: ALPACA.MOUTH.default,
    ACCESSORIES: ALPACA.ACCESSORIES.flower
  })

  const [currentPart, setCurrentPart] = useState('ACCESSORIES')
  const [currentStyle, setCurrentStyle] = useState('flower')

  const findCurrentStyleKey = (partKey, styles) => {
    const currentStyles = ALPACA[partKey]
    const currentStyleValue = styles[partKey]
    return Object.keys(currentStyles).find(style => currentStyles[style] === currentStyleValue)
  }

  const randomPartsHandler = () => {
    const randomPickStyle = (partObject) => {
      const styleValues = Object.values(partObject)
      return styleValues[Math.floor(Math.random() * styleValues.length)]
    }

    const randomStyles = {
      BACKGROUNDS: randomPickStyle(ALPACA.BACKGROUNDS),
      EARS: randomPickStyle(ALPACA.EARS),
      NECK: randomPickStyle(ALPACA.NECK),
      NOSE: ALPACA.NOSE.default,
      HAIR: randomPickStyle(ALPACA.HAIR),
      LEG: randomPickStyle(ALPACA.LEG),
      EYES: randomPickStyle(ALPACA.EYES),
      MOUTH: randomPickStyle(ALPACA.MOUTH),
      ACCESSORIES: randomPickStyle(ALPACA.ACCESSORIES)
    }
    setAllSelectedParts(randomStyles)
    const styleKey = findCurrentStyleKey(currentPart, randomStyles)
    setCurrentStyle(styleKey)
  }

  const partChageHandler = (event) => {
    setCurrentPart(event.target.id)
    const currentStyleKey = findCurrentStyleKey(event.target.id, allSelectedParts)
    setCurrentStyle(currentStyleKey)
  }

  const styleChangeHandler = (event) => {
    setAllSelectedParts((preAllselectedParts) => ({
      ...preAllselectedParts,
      [currentPart]: ALPACA[currentPart.toString()][event.target.id.toString()]
    }))
    setCurrentStyle(event.target.id)
  }

  const downloadHandler = () => {
    const displayDiv = document.getElementById('output').firstChild
    console.log(displayDiv)
    htmlToImage.toPng(displayDiv).then((dataUrl) => {
      download(dataUrl, 'my-alpaca.png')
    })
  }

  return (
    <GridSection>
      <AlpacaDisplayDiv allSelectedParts={allSelectedParts} />
      <Selectors partsData={ALPACA} currentPart={currentPart} onPartChange={partChageHandler} currentStyle={currentStyle} onStyleChange={styleChangeHandler} />
      <MethodButton id='download' onClick={downloadHandler}><strong>Download</strong></MethodButton>
      <MethodButton id='random' onClick={randomPartsHandler}><strong>Random</strong></MethodButton>
    </GridSection>
  )
}

export default Section
