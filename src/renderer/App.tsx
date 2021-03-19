import React from 'react'
import { render } from 'react-dom'
// import { GlobalStyle } from './styles/GlobalStyle'

import Greetings from "./components/Greetings"



console.log("I WORKED");

const App = () => {
  return (
    <>
      <Greetings />
    </>
  )
}

render(<App />, document.getElementById("root"))
