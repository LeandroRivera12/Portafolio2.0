import React, { useEffect, useRef } from 'react'
import 'animate.css'
import './Inicio.css'
import AnimationText from '../../components/aminationText/AnimationText'

const Inicio = () => {


  return (
     <div className='home__container'>
       <div className='home__description'>
         <AnimationText/>
        </div>
        <div className='img-conatiner'>
           <img src="/portada cv.jpg" alt="" />
        </div>
     </div>
     
    
  )
}

export default Inicio