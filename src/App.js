import React from 'react'
import Section from './components/Alpaca/Section'
import styled from 'styled-components'

const StyledMain = styled.main`
  height: calc(100vh - 150px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  @media(max-width: 700px) {
    height: 100vh;
    justify-content: center;
    padding-top: 0px;
  }
`
const StyledDiv = styled.div`
  position: relative;
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
