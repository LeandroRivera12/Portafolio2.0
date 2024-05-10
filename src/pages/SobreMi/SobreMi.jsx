import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './SobreMi.css'

const SobreMi = ({ setLoading }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      navigate('/Contacto')
    }, 2000)

    return () => clearTimeout(timer)
  }

  return (
    <div className='about-container'>
      <h1 className='about-title'>Acerca de Mi</h1>
      <p className='about-description'>Desde el inicio de mi carrera como desarrollador de software y en especial el desarrollo web,
        encontré la pasión que tanto había buscado en una profesión de vida. Mis ideales son el trabajo riguroso y la excelencia, me motiva
         aprender nuevas tecnologías, genero buen ambiente laboral y comunicativo, me gusta abordar los problemas con paciencia y optimismo.
      </p>
      <button onClick={handleClick} className='contac-btn' variant="primary" size="lg">
      Contáctame</button> 
        
        
    </div>
  )
}

export default SobreMi