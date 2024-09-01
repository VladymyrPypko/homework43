import styles from './Button.module.css'

interface ButtonPropsType {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick: () => void
}

export default function Button(props: ButtonPropsType) {
  return (
    <button  className={styles.button} type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  )
}