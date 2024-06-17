import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import './AnimationText.css'

const AnimationText = () => {    
  
      // Create reference to store the DOM element containing the animation
      const textRef = useRef(null);
    
      useEffect(() => {
        const typed = new Typed(textRef.current, {
          strings: ['<i>Hola!</i>', '<i>Hi!</i>', '<i>Ciao!</i>', '<i>こんにちは!</i>'],
          typeSpeed: 125,
          backSpeed: 115,
          loop: true,
          cursorChar: '|',
        });
          
        return (() => {
            typed.destroy();
        })
      }, []);
    
      return (
        <div className="tex__animation">
         <span ref={textRef} />
        </div>
      );
    
}

export default AnimationText