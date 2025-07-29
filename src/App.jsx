import ProjectSidebar from './Components/ProjectSidebar.jsx'
import NewProject from './Components/NewProject.jsx'

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
