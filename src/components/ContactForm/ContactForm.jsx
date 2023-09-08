import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
const ContactForm = () => {
  const[name,setName] = useState("Name");
  const[email,setEmail] = useState("Support@gmail.com")
  const[text,setText] = useState("ABC")
  function handleSubmit(event){
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
    <div className={styles.top_btn}>
      <Button  text='VIA SUPPORT CHAT' icon={<MdMessage fontSize="24px" />} />
        <Button text='VIA CALL' icon={<FaPhoneAlt fontSize="24px" />} />
    </div>
    <Button isOutline={true} text='VIA EMAIL FORM' icon={<HiMail fontSize="24px" />} />

    <form onSubmit={handleSubmit}>
      <div className={styles.form_control}>
      <label>Name</label>
      <input type='text' name='name' />
      </div>
      <div className={styles.form_control}>
      <label>Email</label>
      <input type='email' name='email' />
      </div>
      <div className={styles.form_control}>
      <label>Text</label>
      <textarea name='text' cols='12' rows='5' />
      </div>
      <div style={{
      display:'flex',
      justifyContent:"end"
    }}>
    <Button type='submit' text='SUBMIT' />
    </div>
    <div>
      {"Text:"+text}
      <br/>
      {'Email:'+email}
      <br/>
      {'Name:'+name}
    </div>
    </form>

    </div>


    <div className={styles.image}>
      <img style={{width:'200%'}} src='service-image.svg' />
    </div>
    </section>
  )
}

export default ContactForm