import React, { useEffect, useRef } from 'react'
import 'animate.css'
import './Inicio.css'
import animationText from '../../utils/animationText'


const Inicio = () => {

    const textRef = useRef(null)

    useEffect(() => {
       if (textRef.current) {
         animationText(textRef.current);
       }
      
    }, [])
    

  return (
     <div className='home__container'>
       <div className='home__description'>
            <h1 className='home__header'>Hola, soy</h1>
            <div className="text__animation" ref={textRef}></div>
            <div className='barra__escritura'></div>    
        </div>
        <div className='img-conatiner'>
           <img src="/portada cv.jpg" alt="" />
        </div>
     </div>
     
    
  )
}

export default Inicio