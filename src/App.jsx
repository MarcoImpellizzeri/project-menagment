import ProjectSidebar from './Components/ProjectSidebar.jsx'
import NewProject from './Components/NewProject.jsx'
import NoProjectSelected from './Components/NoProjectSelected.jsx'
import { useState } from 'react'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    console.log('start add project')
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  let content

  if (projectState.selectedProjectId === null) {
    console.log('primo if')
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    console.log('secondo if')
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
