import React from 'react'
import blue50 from './alpaca/backgrounds/blue50.png'
import './App.css'

function App () {
  return (
    <main>
      <header>
        <h1 id='title'>Alpaca generator</h1>
      </header>
      <section>
        <div id="output">
          <div id="display-alpaca">
            <img src={blue50} alt="" />
          </div>
          <button id="download" className="white">Download</button>
        </div>
        <div id="selectors">
          <div id="parts">
            <h2 id="parts-title">ACCESSORIZE THE ALPACA&apos;S</h2>
            <div id="parts-btn-group">
              <button className="selector">btn</button>
            </div>
          </div>
          <div id="styles">
            <h2 id="styles-title">STYLE</h2>
            <div id="styles-btn-group">
              <button className="selector">btn</button>
            </div>
          </div>
          <button id="random" className="white">Random</button>
        </div>
      </section>
    </main>
  )
}

export default App
