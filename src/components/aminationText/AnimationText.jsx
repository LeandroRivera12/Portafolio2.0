import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import './AnimationText.css'

const AnimationText = () => {    
  
      // Create reference to store the DOM element containing the animation
      const textRef = useRef(null);
    
      useEffect(() => {
        const typed = new Typed(textRef.current, {
          strings: ['<i>Un desarrollador web</i>'],
          typeSpeed: 75,
          backSpeed: 65,
          loop: false,
          cursorChar: '|',
        });
          
        return (() => {
            typed.destroy();
        })
      }, []);
    
      return (
        <div className="tex__animation">
         <h1>Hola soy, <b>Leandro</b></h1> <span ref={textRef} />
        </div>
      );
    
}

export default AnimationText