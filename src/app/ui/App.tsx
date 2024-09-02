import { NavBar, Header, Footer } from "../../widgets";
import Router from "../router/Router";

export default function App() {
  return (
    <>
      <Router>
        <Header>
          <NavBar />
        </Header>
      </Router>
      <Footer />
    </>
  )
}