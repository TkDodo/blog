import * as React from 'react'

const About = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="https://avatars.githubusercontent.com/u/1021430"
      alt="TkDodo"
      style={{
        marginRight: '0.875rem',
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>Personal blog by TkDodo</div>
      <div>Opinions are my own</div>
    </div>
  </div>
)

export default About
