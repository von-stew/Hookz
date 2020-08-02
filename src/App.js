import React, { useState } from 'react'

function ListMapper({ list }) {
  return <div style={{display: 'grid'}}>
        {list.map((item, index) => {
        return (
        <div style={{display: 'inline-flex'}}> 
          <div id={index} key={index} index={index}> {`${item.count} ${item.value}`} </div>      
            <button></button>
        </div>
        )
      })}
     </div>
  
}

function App() {
  const [list, setList] = useState([
    {
      value: 'apples',
      count: 0,
      isPurchased: false
    },
    {
      value: 'bananas',
      count: 5,
      isPurchased: false
    },
    {
      value: 'raisins',
      count: 2,
      isPurchased: false
    }
  ])

  const addToList = value => {
    const itemList = [...setList, { value } ];
    setList(itemList)
  }

      return (
        <React.Fragment>
          <ListMapper list={list} />
        </React.Fragment>
      )
}

export default App
