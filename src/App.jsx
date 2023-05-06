import Introduce from './components/Layouts/Introduce'
import Jumbotron from './components/Layouts/Jumbotron'
import Project from './components/Layouts/Project'
import Experience from './components/Layouts/Experience'
import './index.css'
import NewExperience from './components/Layouts/NewExperience'
import Contact from './components/Layouts/Contact'

function App() {
  return (
    <>
      <Jumbotron />
      <Introduce />
      <Project />
      {/* <Experience /> */}
      <NewExperience />
      <Contact />
    </>
  )
}

export default App
