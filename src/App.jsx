import Introduce from './components/Layouts/Introduce'
import Jumbotron from './components/Layouts/Jumbotron'
import Project from './components/Layouts/Project'
import Experience from './components/Layouts/Experience'
import './index.css'

function App() {
  return (
    <>
      <Jumbotron />
      <Introduce />
      <Project />
      <Experience />
    </>
  )
}

export default App
