import React from 'react'

const DemoOut = (props) => {
    console.log('demo')
  return (
    <p>
        {props.show ? 'this is new!': ''}
    </p>
  )
}

export default DemoOut
