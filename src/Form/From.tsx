import React, {useRef} from 'react'
import { FiCalendar, FiFeather, FiFileText, FiSave, FiAperture } from 'react-icons/fi'

import type { Project } from "../App";

interface FormProps {
  onAddProject: (projectDetails: Omit<Project, 'id'>) => void;
}

export default function Form({onAddProject}: FormProps) {
  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const date = useRef<HTMLInputElement>(null)
  
  function handelClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onAddProject({
      title: title.current?.value || '',
      description: description.current?.value || '',
      date: new Date(date.current?.value || '')
    });
  }


  return (
    <div className="relative isolate flex min-h-screen min-w-0 flex-1 flex-col overflow-y-auto bg-[url('/src/assets/Backgrounds/Export.png')] bg-cover bg-center bg-no-repeat px-6 py-8 md:px-12">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#09090b]/80" />
      <div className="relative z-10 mx-auto flex w-full  flex-col">
        <header className="mb-7">
          <div className="flex items-center gap-4 border-b border-rose-900/70 pb-3">
            <FiAperture aria-hidden="true" className="shrink-0 text-rose-700" size={30} />
            <h1 className="m-0 font-Garamond text-4xl text-stone-200 md:text-5xl">Add New Project</h1>
            <span aria-hidden="true" className="ml-2 hidden flex-1 items-center text-rose-800 sm:flex">✧ ─────────────────────────────────────</span>
          </div>
          <p className="mb-0 mt-3 font-Cormorant text-xl italic text-stone-400 md:text-2xl">Let your next endeavor be written here...</p>
        </header>

        <form onSubmit={handelClick} className="flex mt-35 w-full max-w-5xl flex-col gap-8 rounded-lg border border-stone-800 bg-[#111112]/95 p-8 shadow-2xl shadow-black/50 md:p-10">
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 font-Garamond text-xl text-stone-200" htmlFor="title">
              <FiFeather aria-hidden="true" className="text-rose-700" size={20} /> Title
            </label>
            <input ref={title} required={true} className="w-full rounded-md border border-stone-700 bg-[#0d0c0d] px-4 py-4 font-Garamond text-lg text-stone-100 placeholder:text-stone-500 focus:border-rose-700 focus:outline-none focus:ring-1 focus:ring-rose-900" id="title" name="title" type="text" placeholder="Enter project title..." />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 font-Garamond text-xl text-stone-200" htmlFor="description">
              <FiFileText aria-hidden="true" className="text-rose-700" size={20} /> Description
            </label>
            <textarea ref={description} required={true} className="max-h-56 min-h-36 w-full resize-y overflow-y-auto rounded-md border border-stone-700 bg-[#0d0c0d] px-4 py-4 font-Garamond text-lg text-stone-100 placeholder:text-stone-500 focus:border-rose-700 focus:outline-none focus:ring-1 focus:ring-rose-900" id="description" name="description" placeholder="Describe your project..." rows={5} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 font-Garamond text-xl text-stone-200" htmlFor="dueDate">
              <FiCalendar aria-hidden="true" className="text-rose-700" size={20} /> Due Date
            </label>
            <input ref={date} required={true} className="w-full rounded-md border border-stone-700 bg-[#0d0c0d] px-4 py-4 font-Garamond text-lg text-stone-100 focus:border-rose-700 focus:outline-none focus:ring-1 focus:ring-rose-900 scheme-dark" id="dueDate" name="dueDate" type="date" />
          </div>

          <div className="relative mt-1 flex flex-wrap items-center justify-center gap-4 border-t border-rose-900/50 pt-6">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111112] px-2 text-rose-700">◇</span>
            <button className="flex min-w-48 items-center justify-center gap-3 rounded-md border border-rose-700 bg-rose-950 px-8 py-4 font-Garamond text-xl text-stone-100 transition-colors hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-rose-400" type="submit">
              <FiSave aria-hidden="true" size={20} /> Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}