import React from 'react'
import Card from './cardComponent'


const CardList = ({robots}) => {
    const CardlistComponent  = robots.map((user, i) =>{
        return(
        <Card key={i} 
        id={user.id} 
        name={user.name} 
        email = {user.email}/>
        )
    })

  return (
    <div>
      {CardlistComponent}
    </div>
  )
}
export default CardList;
