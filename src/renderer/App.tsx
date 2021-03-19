import React from 'react'
import { render } from 'react-dom'

import Greetings from "./components/Greetings"

const App = () => {
  return (
    <>
      <Greetings />
    </>
  )
}

render(<App />, document.getElementById("root"))
