import React from 'react'
import 'animate.css'
import './Inicio.css'

const Inicio = () => {

 

  return (
     <div className='home-container'>
       <div className='home-description'>
            <h1 className='home-header'>Hola, mi nombre es <b className='home-name'>Leandro</b></h1>
            <h2 className='home-subheader'>Soy desarrollador web frontend.</h2>
        </div>
        <div className='img-conatiner'>
           <img src="/gift.gif" alt="" />
        </div>
     </div>
     
    
  )
}

export default Inicio