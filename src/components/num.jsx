import './num.css'
import React from 'react'

const NUMBER = ({number}) => {
  return (
    <div className={`numbercard box--${number.index} ${number.value===16?'transparentbox':''}`}>
    {number.value}
    </div>
  )
}

export default NUMBER
