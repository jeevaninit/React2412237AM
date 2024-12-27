import React from 'react'

const List = (props) => {
  return (
    <div>
        <ul>
        <li key={props.myindex}>{props.arritems}</li>
        </ul>
    </div>
  )
}

export default List