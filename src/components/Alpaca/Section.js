import React, { useState } from 'react'
import styled from 'styled-components'

import Selectors from './Selectors'
import MethodButton from '../UI/MethodButton'
import AlpacaDisplayDiv from './AlpacaDisplayDiv'
import ALPACA from '../../alpaca'

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: auto auto;
  grid-gap: 20px;
`

const Section = () => {
  const [allSelectedParts, setAllSelectedParts] = useState({
    ACCESSORIES: ALPACA.ACCESSORIES.flower,
    BACKGROUNDS: ALPACA.BACKGROUNDS.blue50,
    EARS: ALPACA.EARS.default,
    EYES: ALPACA.EYES.default,
    HAIR: ALPACA.HAIR.default,
    LEG: ALPACA.LEG.bubbleTea,
    MOUTH: ALPACA.MOUTH.default,
    NECK: ALPACA.NECK.default,
    NOSE: ALPACA.NOSE.default
  })

  const [currentPart, setCurrentPart] = useState('ACCESSORIES')
  const [currentStyle, setCurrentStyle] = useState('flower')

  const randomPartsHandler = () => {
    const randomPickStyle = (partObject) => {
      const styleValues = Object.values(partObject)
      return styleValues[Math.floor(Math.random() * styleValues.length)]
    }
    setAllSelectedParts({
      ACCESSORIES: randomPickStyle(ALPACA.ACCESSORIES),
      BACKGROUNDS: randomPickStyle(ALPACA.BACKGROUNDS),
      EARS: randomPickStyle(ALPACA.EARS),
      EYES: randomPickStyle(ALPACA.EYES),
      HAIR: randomPickStyle(ALPACA.HAIR),
      LEG: randomPickStyle(ALPACA.LEG),
      MOUTH: randomPickStyle(ALPACA.MOUTH),
      NECK: randomPickStyle(ALPACA.NECK),
      NOSE: ALPACA.NOSE.default
    })
  }

  const partChageHandler = (part) => {
    setCurrentPart(currentPart)
  }

  const styleChangeHandler = (style) => {
    setCurrentStyle(currentStyle)
  }

  return (
    <GridSection>
      <AlpacaDisplayDiv allSelectedParts={allSelectedParts} />
      <Selectors partsData={ALPACA} part={currentPart} onPartChange={partChageHandler} style={currentStyle} onStyleChange={styleChangeHandler} />
      <MethodButton id='download'><strong>Download</strong></MethodButton>
      <MethodButton id='random' onClick={randomPartsHandler}><strong>Random</strong></MethodButton>
    </GridSection>
  )
}

export default Section
