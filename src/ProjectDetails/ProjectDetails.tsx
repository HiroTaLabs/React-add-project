import { useRef } from "react";
import type { Project } from "../App";
import { FiCalendar, FiPlus, FiTrash2 } from "react-icons/fi";

import type { Task } from "../App";
import type { DialogSituation } from "../Dialog/Dialog";

interface ProjectDetailsProps {
  project: Project;
  onDeleteProject: (projectId: string) => void;
  onShowDialog: (situation: DialogSituation) => void;
  tasks: Task[];
  onTasksChange: (tasks: Task[]) => void;
}

export default function ProjectDetails({
  project, 
  onDeleteProject, 
  onShowDialog,
  tasks, 
  onTasksChange
  }: ProjectDetailsProps) {

  
  const taskInputRef = useRef<HTMLInputElement>(null);
  
  console.log(taskInputRef.current?.value)
  console.log(tasks)

  function handelClick() {
    if (taskInputRef.current) {
      const taskText = taskInputRef.current.value.trim();

      if (taskText === '') {
        return;
      }

      onTasksChange([
        ...tasks,
        {
          id: crypto.randomUUID(),
          task: taskText
        }
      ]);

      taskInputRef.current.value = '';
    }
  }

  function handelClear(id:string){
    onTasksChange(tasks.filter(task => task.id !== id))
    onShowDialog('clear-task')
  }

  function handelDelete(id: string) {
    onShowDialog('delete-project')
    onDeleteProject(id)
  }

  return (
    <section className="relative isolate min-h-screen min-w-0 flex-1 overflow-y-auto bg-[#101112] px-6 py-8 sm:px-9 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(44,43,43,0.22),transparent_55%)]" />
      <div className="relative z-10 flex w-full flex-col">
        <header className="pt-4 sm:pt-8">
          <p className="m-0 font-Garamond text-base text-stone-400 sm:text-lg">
            Projects <span className="px-2 text-rose-900">/</span> {project.title}
          </p>
          <div className="mt-5 h-px w-16 bg-rose-800" />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <h1 className="m-0 wrap-break-word font-Garamond text-5xl text-stone-200 sm:text-6xl">{project.title}</h1>
            <button type="button" onClick={() => handelDelete(project.id)} className="flex h-11 items-center justify-center gap-2 rounded-md border border-rose-900/60 bg-rose-950/30 px-6 font-Garamond text-lg text-stone-300 transition-colors hover:border-rose-700 hover:bg-rose-950/70 focus-visible:outline-2 focus-visible:outline-rose-500">
              <FiTrash2 aria-hidden="true" /> Delete
            </button>
          </div>
          <div className="mt-5 border-b border-stone-700/40 pb-6">
            <p className="m-0 flex items-center gap-2 font-mono text-base text-stone-400">
              <FiCalendar aria-hidden="true" /> {project.date.toDateString()}
            </p>
            {project.description && <p className="mb-0 mt-5 max-w-5xl font-Garamond text-xl leading-relaxed text-stone-300">{project.description}</p>}
            <p className="mb-0 mt-4 font-Cormorant text-lg text-stone-400">Start with the basics, finish with advanced knowledge.</p>
          </div>
        </header>

        <section aria-labelledby="tasks-heading" className="mt-8 w-full rounded-xl border border-stone-700/70 bg-[#171719]/90 p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 id="tasks-heading" className="m-0 font-Garamond text-3xl text-stone-200">Tasks</h2>
            <span className="font-Cormorant text-[26px] text-stone-400">{tasks.length} tasks</span>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="new-task">New task</label>
            <input ref={taskInputRef} id="new-task" name="task" type="text" placeholder="Enter a new task..." className="min-w-0 flex-1 rounded-md border border-stone-700 bg-[#101112] px-4 py-3.5 font-Garamond text-lg text-stone-200 placeholder:text-stone-500 focus:border-rose-800 focus:outline-none focus:ring-1 focus:ring-rose-950" />
            <button onClick={handelClick} type="button" className="flex shrink-0 items-center justify-center gap-2 rounded-md border border-rose-900/70 bg-rose-950/60 px-6 py-3.5 font-Garamond text-lg text-stone-200 transition-colors hover:border-rose-700 hover:bg-rose-900/80 focus-visible:outline-2 focus-visible:outline-rose-500">
              <FiPlus aria-hidden="true" /> Add Task
            </button>
          </form>
          <div className="mt-6 flex flex-col gap-2">
          {tasks.map((task)=> (
            <div key={task.id} className="group flex min-h-16 items-center gap-4 rounded-lg bg-[#1d191f]/80 px-4 py-3 transition-colors hover:bg-[#211b22]">
              <span aria-hidden="true" className="h-7 w-1 shrink-0 rounded-full bg-rose-800/80 transition-colors group-hover:bg-rose-600" />
              <p className="m-0 min-w-0 flex-1 wrap-break-word text-lg text-stone-200">{task.task}</p>
              <button onClick={() => handelClear(task.id)} type="button" className="flex h-10 shrink-0 items-center justify-center rounded-md border border-stone-700/80 bg-transparent px-4 text-base text-stone-300 transition-colors hover:border-rose-800/70 hover:bg-rose-950/30 hover:text-stone-100 focus-visible:outline-2 focus-visible:outline-rose-500">Clear</button>
            </div>
          ))}
          </div>
        </section>

        <div aria-hidden="true" className="mt-8 flex items-center justify-center gap-3 pb-4 text-rose-900/70">
          <span className="h-px w-24 bg-stone-800" />
          <span>◇</span>
          <span className="h-px w-24 bg-stone-800" />
        </div>
      </div>
    </section>
  );
}