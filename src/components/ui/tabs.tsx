import * as React from 'react'

const Ctx = React.createContext<{value:string,setValue:(v:string)=>void}|null>(null)
export function Tabs({ value, onValueChange, children }:{ value:string; onValueChange:(v:string)=>void; children:React.ReactNode }){
  const [val, setVal] = React.useState(value)
  React.useEffect(()=>onValueChange(val),[val])
  return <Ctx.Provider value={{value:val,setValue:setVal}}>{children}</Ctx.Provider>
}
export function TabsList({ className='', children }:{ className?:string; children:React.ReactNode }){
  return <div className={`inline-flex rounded-xl border p-1 bg-white ${className}`}>{children}</div>
}
export function TabsTrigger({ value, children, className='' }:{ value:string; children:React.ReactNode; className?:string }){
  const ctx = React.useContext(Ctx)!; const active = ctx.value === value
  return <button onClick={()=>ctx.setValue(value)} className={`px-3 py-1 rounded-lg text-sm ${active? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'} ${className}`}>{children}</button>
}
export function TabsContent({ value, children, className='' }:{ value:string; children:React.ReactNode; className?:string }){
  const ctx = React.useContext(Ctx)!; if (ctx.value !== value) return null
  return <div className={className}>{children}</div>
}
