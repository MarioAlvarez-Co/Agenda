import React from 'react'
import { ContactComponent } from '../components/ContactComponent'
import { Contact } from '../models/Contact'

const ContactList = () => {
    const defaultContact= new Contact('Mario ','Alvarez','lushoAlvarez45@gmail.com')

  return (
      <div>
        <ContactComponent contact={defaultContact}/>
    </div>
  )
}

export default ContactList