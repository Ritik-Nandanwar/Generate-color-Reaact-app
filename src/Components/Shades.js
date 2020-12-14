import React, { useEffect, useState } from 'react'
import values from 'values.js'
import iscolor from "is-color"
import Shade from './Shade'

const Shades = ({ color }) => {

  useEffect(() => {
    if (iscolor(color)) {
      createShades(color)
    }

  }, [color])
  const [shades, setShades] = useState([])
  const createShades = (color) => {
    const shade_color = new values(color).shades(1)
    setShades(shade_color)
    console.log(shade_color)
  }
  return (
    <div className="shades">
      {
        shades.map(shade => (
          <Shade shade={shade} />
        ))
      }
    </div>
  )
}

export default Shades
