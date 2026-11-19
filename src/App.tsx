import { useState } from 'react'

import './App.css'
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import From from './Form/From'
import ProjectDetails from './ProjectDetails/ProjectDetails'
import Dialog, { type DialogSituation } from './Dialog/Dialog'

export type Page = 'projects' | 'add-project' | 'project-details'

export interface Project {
  id: string;
  title: string;
  description: string;
  date: Date;
}

export interface Task {
  id: string;
  task: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('projects');
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [projects, setProjects] = useState<Project[]>([]);

  const [projectTasks, setProjectTasks] = useState<Record<string, Task[]>>({});
  const [dialogSituation, setDialogSituation] = useState<DialogSituation | null>(null);

  function handleCreateProject(projectDetails: Omit<Project, 'id'>) {
    const newProject = { ...projectDetails, id: crypto.randomUUID() };
    setProjects((previousProjects) => [...previousProjects, newProject]);
    setDialogSituation('add-project');
  }

  function handleSelectProject(project: Project){
    setSelectedProject(project)
    setCurrentPage('project-details');
  }

  function handleDeleteProject(projectId: string) {
    setProjects((previousProjects) => previousProjects.filter((project) => project.id !== projectId));
    setSelectedProject(null);
    setCurrentPage('projects');
  }

  return (
    <>
      <div className="flex min-h-screen w-full flex-row">
        <SideBar 
          activeSection={currentPage}
          onNavigate={setCurrentPage}
        />
        {currentPage === 'projects' ? (
          <Content
            onCreateProject={() => setCurrentPage('add-project')} 
            projects={projects} 
            onSelectProject={handleSelectProject} 
          />
        ): currentPage === 'add-project' ?(
          <From onAddProject={handleCreateProject} />
        ):(
          selectedProject ? (
            <ProjectDetails 
              project={selectedProject} 
              onDeleteProject={handleDeleteProject}
              onShowDialog={setDialogSituation}
              tasks={projectTasks[selectedProject.id] ?? []}
              onTasksChange={(updatedTasks) => 
                setProjectTasks(prevTasks => ({
                  ...prevTasks,
                  [selectedProject.id]: updatedTasks
                }))
              }
               />
          ) : (
            <Content
              onCreateProject={() => setCurrentPage('add-project')}
              projects={projects}
              onSelectProject={handleSelectProject}
            />
          )
        )}
        
      </div>
      {dialogSituation && (
        <Dialog situation={dialogSituation} onClose={() => setDialogSituation(null)} />
      )}
    </>
  );
}

export default App;
