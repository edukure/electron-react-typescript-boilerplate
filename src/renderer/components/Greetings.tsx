import React from 'react'

const Greetings: React.FC = () => {
  return (
    <div style={{height: "100vh", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
      <img style={{width: "300px"}}
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <p style={{fontSize: "20px", fontWeight: "bold"}}>An Electron boilerplate including TypeScript and React</p>
    </div>
  )
}

export default Greetings
