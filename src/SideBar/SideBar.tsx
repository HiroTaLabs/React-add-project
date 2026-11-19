import Raven from '../assets/Raven.png'
import Castle from '../assets/Castle artwork.png'

import { FaHome } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import type { Page } from '../App';

interface SideBarProps {
  activeSection: Page;
  onNavigate:(Page:Page) => void;
}

export default function SideBar({activeSection, onNavigate}: SideBarProps) {
  // const [activeSection, setActiveSection] = useState<'projects' | 'add-project'>('projects')

  const buttonClass = (section: 'projects' | 'add-project') =>
    `ml-12.75 flex h-15 w-[calc(100%-72px)] flex-row items-center gap-5 rounded-xl border-l-4 pl-6 text-2xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-700 ${
      activeSection === section
        ? 'border-rose-700 bg-rose-950/50 text-stone-300'
        : 'border-transparent text-stone-500 hover:bg-[#281719] hover:text-stone-300'
    }`

  return (
    <section className="h-screen w-112.75 max-w-full shrink-0 border-r-2 border-neutral-800">
      <div className="flex h-full w-full flex-col overflow-hidden">
        <div className="mt-9.5 ml-12.5 flex items-center gap-2.5 whitespace-nowrap">
          <img src={Raven} className="w-25 shrink-0" alt="Raven" />
          <h1 className="m-0 font-Garamond text-[30px] leading-none font-bold text-stone-300 text-shadow-lg text-shadow-[#2c2b2b]">YOUR PROJECTS</h1>
        </div>
            <button
                className={`${buttonClass('projects')} mt-9.5`}
                type="button"
                aria-pressed={activeSection === 'projects'}
                onClick={() => onNavigate('projects')}
            >
              <FaHome /> Projects
            </button>
            <button
                className={`${buttonClass('add-project')} mt-5`}
                type="button"
                aria-pressed={activeSection === 'add-project'}
                onClick={() => onNavigate('add-project')}
            >
              <FiPlusCircle /> Add Project
            </button>
            <div className="relative min-h-55 flex-1 basis-0 overflow-hidden bg-[#101112]">
              <img src={Castle} className="absolute inset-0 h-full w-full object-cover object-center opacity-40" alt="Castle artwork" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#101112] to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#101112] to-transparent" />
            </div>
            <div className="relative mx-7 mt-auto shrink-0 border-t border-neutral-800 pb-6 pt-5">
              <span aria-hidden="true" className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-neutral-900 px-2 text-neutral-500">◇</span>
              <p className="mb-2 mt-0 font-Cormorant text-[26px] leading-5 italic text-stone-400 text-shadow-lg text-shadow-[#2c2b2b]">
                “The past is never dead.<br />
                It’s not even past.”
              </p>
              <p className="m-0 font-Cormorant text-[24px] text-stone-500 text-shadow-lg text-shadow-[#252424cb]">— Faulkner</p>
            </div>
        </div>
    </section>
  );
}