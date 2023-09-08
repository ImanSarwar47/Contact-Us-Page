import React from 'react'
import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'
const Button = (props) => {
  const{isOutline,text,icon} = props;
  return (
    <button className={isOutline? styles.Outline_btn:styles.primary_btn}>
    {icon}
    {text}
    </button>
  )
}

export default Button