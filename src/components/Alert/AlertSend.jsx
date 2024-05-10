import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import './Alert.css'

const Alert = () => {
  return (
    <div className='alert-container'>
        <ToastContainer>
            <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Correcto</strong>
              <small className="text-muted">Justo ahora</small>
            </Toast.Header>
            <Toast.Body>Su mensaje ha sido enviado</Toast.Body>
            </Toast>
        </ToastContainer>
    </div>
  )
}

export default Alert