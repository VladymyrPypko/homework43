import { NavBar, Header, Footer } from "../../widgets";
import Router from "../router/Router";
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header>
          <NavBar />
        </Header>
      </Router>
      <Footer />
    </div>
  )
}