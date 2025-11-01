import * as React from 'react'

type Option = { value: string; label: string }
const Ctx = React.createContext<{options:Option[]; setOptions:React.Dispatch<React.SetStateAction<Option[]>>; onChange?:(v:string)=>void}|null>(null)

export function Select({ onValueChange, children }:{ onValueChange?:(v:string)=>void; children:React.ReactNode }){
  const [options, setOptions] = React.useState<Option[]>([])
  return <Ctx.Provider value={{ options, setOptions, onChange:onValueChange }}>{children}</Ctx.Provider>
}
export function SelectTrigger({ children, className='' }:{ children:React.ReactNode; className?:string }){
  return <div className={`hidden ${className}`}>{children}</div> // trigger oculto, usamos native select
}
export function SelectValue({ placeholder }:{ placeholder?: string }){ return <span className="text-slate-500">{placeholder}</span> }
export function SelectContent({ children }:{ children:React.ReactNode }){ return <div className="hidden">{children}</div> }
export function SelectItem({ value, children }:{ value:string; children:React.ReactNode }){
  const ctx = React.useContext(Ctx)!; React.useEffect(()=>{ ctx.setOptions(prev => prev.find(o=>o.value===value)? prev : [...prev, { value, label: String(children) }]) },[])
  return null
}
export function NativeSelect(){
  const ctx = React.useContext(Ctx)!;
  return (
    <select className="w-full h-10 rounded-xl border border-slate-300 px-3 text-sm" onChange={(e)=>ctx.onChange?.(e.target.value)} defaultValue="">
      <option value="" disabled>Selecciona</option>
      {ctx.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}
