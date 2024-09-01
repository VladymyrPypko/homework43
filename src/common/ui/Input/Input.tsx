import styles from './Input.module.css'

interface InputPropsType {
  type: string
  name: string
  placeholder?: string
  value?: string
  onChange?: () => void
  onBlur?: () => void
}

export default function Input(props: InputPropsType) {
  return (
    <input
      className={styles.input}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  )
}