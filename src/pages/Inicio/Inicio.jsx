import React from 'react'
import 'animate.css'
import './Inicio.css'

const Inicio = () => {

    
  return (
     <div className='home__container'>
       <div className='home__description'>
            <h1 className='home__header'>Hola, soy</h1>
            <div className="text__animation"></div>
            <div className='barra__escritura'></div>    
        </div>
        <div className='img-conatiner'>
           <img src="/portada cv.jpg" alt="" />
        </div>
     </div>
     
    
  )
}

export default Inicio