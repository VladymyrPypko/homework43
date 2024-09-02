import { useAppDispatch, useAppSelector } from '../../app';
import { Button } from '../../common/ui';
import { resetNotes } from '../../data/notes';
import { NoteForm, NoteItem, NoteList } from '../../widgets'
import styles from './Home.module.css';

export default function Home() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.notes.notes);

  return (
    <div className={styles.home}>
      <div className={styles.notesContainer}>
        <NoteForm />
        {notes.length ? (
          <>
            <NoteList>
              {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
              ))}
            </NoteList>
            <Button
              type={'button'}
              text={'Очистить заметки'}
              onClick={() => dispatch(resetNotes())}
            />
          </>
        ) : (
          <p className={styles.emptyList}>Список пуст</p>
        )}
      </div>
    </div>
  )
}