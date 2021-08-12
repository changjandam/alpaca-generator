import React from 'react'
import Section from './components/Alpaca/Section'
import styled from 'styled-components'

const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledDiv = styled.div`
  padding: 40px;
  background: lightgray;
  box-shadow: 3px 3px gray;
`

const H1 = styled.h1`
  margin-top: 0px;
`

function App () {
  return (
    <StyledMain>
      <StyledDiv>
        <header>
          <H1 id='title'>Alpaca generator</H1>
        </header>
        <Section />
      </StyledDiv>
    </StyledMain>
  )
}

export default App
