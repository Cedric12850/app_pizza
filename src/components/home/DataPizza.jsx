import React from 'react'
import pizzas from '../../assets/pizza-data'
import Carte from './Carte'



const DataPizza = () => {
    
  return (
    <section>
        {pizzas.map (
            (pizza, index) =>
                <Carte mapizza={pizza} key={index} />
            
        )}   
    </section>
  )
}

export default DataPizza