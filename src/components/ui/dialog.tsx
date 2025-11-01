import * as React from 'react'
import { createPortal } from 'react-dom'

export function Dialog({ open, onOpenChange, children }:{ open:boolean; onOpenChange:(v:boolean)=>void; children:React.ReactNode }){
  React.useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onOpenChange(false)
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [onOpenChange])
  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      {children}
    </div>,
    document.body
  )
}

export function DialogContent({ className='', children }:{ className?:string; children:React.ReactNode }){
  return <div className={`relative z-10 w-[92vw] max-w-md rounded-2xl bg-white p-4 shadow-xl ${className}`}>{children}</div>
}
export function DialogHeader({ children }:{ children:React.ReactNode }){ return <div className="mb-2">{children}</div> }
export function DialogTitle({ children }:{ children:React.ReactNode }){ return <h3 className="text-lg font-semibold">{children}</h3> }
export const DialogTrigger = (props:any) => null // no-op en esta implementación
