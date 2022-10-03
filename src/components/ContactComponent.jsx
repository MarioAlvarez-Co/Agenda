import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/Contact'
export  const ContactComponent = ( {contact} ) => {
  const [Conectado, setConectado] = React.useState(contact.online)

  function handleOnline(){
    setConectado(!Conectado)
  }
  return (
    <div>
      <h1>
        Tu contacto
      </h1>
      <h2>
        {contact.name}
      </h2>
      <h2>
        {contact.last_name}
      </h2>
      <h3>
        {contact.email}
      </h3>
      <p onClick={()=>handleOnline()}>
        {Conectado?'Conectado':'desconectado'}
      </p>
    </div>
  )
}
Contact.propTypes = {
    contact:PropTypes.instanceOf(Contact)    
}

