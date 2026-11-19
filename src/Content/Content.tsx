import { GoPlus } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { FiCalendar, FiExternalLink } from "react-icons/fi";

import ring from "../assets/ContentImg/Emblem ring.png"
import logo from "../assets/ContentImg/Supplied project logo.png"
import star from "../assets/ContentImg/Crimson ornament.png"
import gothicWindow from "../assets/ContentImg/Gothic window artwork.png"
import photo from "../assets/Crimson Moon Over Gothic Castle.png"

import type { Project } from "../App";

interface ContentProps {
  onCreateProject:() => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}


export default function Content({onCreateProject, projects, onSelectProject}: ContentProps) {
  if (projects.length > 0) {
    return (
      <section className="relative isolate flex min-h-screen min-w-0 flex-1 flex-col items-start justify-start overflow-y-auto p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(24%,200px)] sm:block">
          <img src={gothicWindow} className="absolute inset-0 h-full w-full object-cover object-right opacity-80" alt="" />
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#101112] via-[#101112]/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-[#101112]/70 to-transparent blur-md" />
        </div>

        <div className="relative z-10 grid w-full grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] items-stretch gap-6 pr-0 sm:pr-72">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex min-h-110 w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#17151a]/35 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-900/50"
            >
              <div className="relative z-10 h-40 shrink-0 overflow-hidden">
                <img
                  src={photo}
                  className="h-full w-full object-cover grayscale transition duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  alt="Project artwork"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#17151a]/90 via-[#101012]/10 to-black/20 transition-colors group-hover:from-[#17151a]/65" />
                <AiOutlineEye aria-hidden="true" className="absolute right-4 top-4 text-3xl text-stone-200 drop-shadow-md" />
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col gap-4 bg-linear-to-b from-white/5 via-[#17151a]/9 to-[#0d0c10]/45 p-6">
                <h2 className="m-0 w-full wrap-break-word font-Garamond text-2xl font-medium leading-snug tracking-wide text-stone-100">
                  {project.title}
                </h2>
                <p className="m-0 line-clamp-4 wrap-break-word font-Garamond text-lg leading-relaxed text-stone-300">
                  {project.description.length > 100
                    ? `${project.description.slice(0, 100).trimEnd()}…`
                    : project.description}
                </p>

                <div className="mt-auto flex shrink-0 flex-col items-center gap-4 border-t border-white/10 pt-4">
                  <span className="flex shrink-0 items-center justify-center gap-2 text-center font-mono text-sm text-stone-400">
                    <FiCalendar aria-hidden="true" /> {project.date.toDateString()}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-rose-900/70 bg-rose-950/50 px-4 py-2.5 font-Garamond text-lg text-stone-100 transition-colors hover:border-rose-700 hover:bg-rose-900/80 focus-visible:outline-2 focus-visible:outline-rose-500"
                  >
                    <FiExternalLink aria-hidden="true" /> View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate flex min-h-screen min-w-0 flex-1 flex-col items-center justify-center overflow-hidden border-neutral-800 px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[min(30%,220px)]">
        <img src={gothicWindow} className="absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain object-right opacity-80" alt="" />
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#101112] via-[#101112]/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-[#101112]/70 to-transparent blur-md" />
      </div>

      <div className="relative z-10 flex min-h-screen w-[70%] self-start flex-col items-center justify-center text-center">
        <img src={star} className="mb-4 h-auto w-6" alt="Crimson ornament star" />
        <div className="relative flex h-60 w-60 shrink-0 items-center justify-center">
          <img src={ring} className="absolute inset-0 h-full w-full object-contain" alt="" />
          <img src={logo} className="relative mb-4.75 mt-4 h-auto w-56 translate-y-8 object-contain" alt="Supplied project logo" />
        </div>
        <div className="mt-4 flex flex-col items-center text-center">
          <h1 className="mt-4.75 font-Garamond text-4xl leading-tight font-normal text-stone-200">No Project Selected</h1>
          <p className="mt-3 font-Garamond text-lg leading-relaxed text-[26px] text-stone-400">
            Select a project or get start with a new one
          </p>
          <button
            onClick={onCreateProject}
            className="mt-6 flex h-14 w-64 flex-row items-center justify-center gap-2 rounded-xl bg-rose-950 px-4 font-Garamond text-[22px] text-stone-200 transition-colors hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-rose-500"
          >
            <GoPlus /> Create new project
          </button>
        </div>
        <img src={star} className="mt-4 h-auto w-6" alt="Crimson ornament star" />
      </div>
    </section>
  );
}