import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const Image = styled.img`
  position: absolute;
  top: 0px;
  width: 300px;
  height: 300px;
`

const RelativeDiv = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`

const AlpacaDisplayDiv = (props) => {
  console.log(props)
  return (
    <div id='output'>
      <RelativeDiv>
        <Image src={props.allSelectedParts.BACKGROUNDS} />
        <Image src={props.allSelectedParts.EARS} />
        <Image src={props.allSelectedParts.NECK} />
        <Image src={props.allSelectedParts.NOSE} />
        <Image src={props.allSelectedParts.HAIR} />
        <Image src={props.allSelectedParts.LEG} />
        <Image src={props.allSelectedParts.EYES} />
        <Image src={props.allSelectedParts.MOUTH} />
        <Image src={props.allSelectedParts.ACCESSORIES} />
      </RelativeDiv>
    </div>
  )
}

AlpacaDisplayDiv.propTypes = {
  allSelectedParts: Proptypes.object
}

export default AlpacaDisplayDiv
