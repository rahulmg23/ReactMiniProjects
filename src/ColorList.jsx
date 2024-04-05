import React from 'react'

export default function ColorList({colors}) {
  return (
    <div>
      <p>COlOR LIST</p>
    <ul>
    {
        colors.map((color=>
            <li>{color}</li>
        ))
        }
    </ul>
    </div>
  )
}
