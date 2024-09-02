import { Note } from '../../data/notes';
import styles from './NoteItem.module.css';

export default function NoteItem({ note }: { note: Note}) {
  return (
    <div className={styles.item}>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
    </div>
  )
}