import { createPortal } from 'react-dom'
import { FiCheckCircle, FiFolderPlus, FiTrash2, FiX } from 'react-icons/fi'

export type DialogSituation = 'add-project' | 'delete-project' | 'clear-task'

interface DialogProps {
  situation: DialogSituation
  onClose: () => void
}

const dialogMessages: Record<DialogSituation, { title: string; message: string }> = {
  'add-project': {
    title: 'Project added',
    message: 'Your project was added successfully.',
  },
  'delete-project': {
    title: 'Project deleted',
    message: 'The project was deleted successfully.',
  },
  'clear-task': {
    title: 'Task cleared',
    message: 'The task was removed from this project.',
  },
}

const dialogIcons = {
  'add-project': FiFolderPlus,
  'delete-project': FiTrash2,
  'clear-task': FiCheckCircle,
}

export default function Dialog({ situation, onClose }: DialogProps) {
  const modalElement = document.getElementById('dialog')

  if (!modalElement) {
    return null
  }

  const { title, message } = dialogMessages[situation]
  const SituationIcon = dialogIcons[situation]

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" role="presentation">
      <section
        aria-labelledby="dialog-title"
        aria-describedby="dialog-message"
        aria-modal="true"
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-rose-900/45 bg-[#141215]/95 p-7 text-stone-200 shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-9"
        role="dialog"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-rose-700/80 to-transparent" />
        <button
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-stone-500 transition-colors hover:bg-white/5 hover:text-stone-200 focus-visible:outline-2 focus-visible:outline-rose-500"
          onClick={onClose}
          type="button"
        >
          <FiX aria-hidden="true" size={18} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5 grid h-16 w-16 place-items-center rounded-full border border-rose-800/50 bg-rose-950/25 text-rose-500 shadow-[0_0_30px_rgba(136,19,55,0.2)]">
            <SituationIcon aria-hidden="true" size={28} />
            <span aria-hidden="true" className="absolute -top-2 -right-1 font-Garamond text-lg text-rose-500">✦</span>
          </div>
          <p className="mb-2 mt-0 font-Cormorant text-xs uppercase tracking-[0.3em] text-rose-400/80">Project Chronicle</p>
          <h2 id="dialog-title" className="m-0 font-Garamond text-3xl text-stone-100">{title}</h2>
          <p id="dialog-message" className="mb-0 mt-3 max-w-sm font-Garamond text-lg leading-relaxed text-stone-400">{message}</p>
        </div>

        <div aria-hidden="true" className="my-6 flex items-center justify-center gap-3 text-rose-800/80">
          <span className="h-px w-16 bg-linear-to-r from-transparent to-rose-900/70" />
          <span className="text-xs">◇</span>
          <span className="h-px w-16 bg-linear-to-l from-transparent to-rose-900/70" />
        </div>

        <button
          autoFocus
          className="mx-auto flex min-w-32 items-center justify-center rounded-lg border border-rose-700/70 bg-rose-950/70 px-6 py-2.5 font-Garamond text-lg text-stone-100 shadow-lg shadow-rose-950/30 transition-all hover:border-rose-500 hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-rose-400"
          onClick={onClose}
          type="button"
        >
          OK
        </button>
      </section>
    </div>,
    modalElement,
  )
}
