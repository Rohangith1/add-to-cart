import React from 'react'
import list from '../list'
import Cart from './Cart'

const Shop = ({handleClick}) => {
  return (
      <section>
          {list.map((items)=>{
              return <Cart item={items} key={items.id} handleClick={handleClick} />
          })
          }
      </section>
  )
}

export default Shop