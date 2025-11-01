import * as React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus-visible:ring-2 ring-offset-2'
const variants: Record<string,string> = {
  default: 'bg-[--petrol] text-white hover:bg-[#0c3e4b] ring-[--petrol] ring-offset-white',
  secondary: 'bg-white text-slate-900 hover:bg-slate-100 ring-slate-300',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 ring-slate-300'
}
const sizes: Record<string,string> = {
  sm: 'h-9 px-3 text-sm', md: 'h-10 px-4', lg: 'h-11 px-5 text-base', icon: 'h-10 w-10'
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(function Button({variant='default', size='md', className='', ...props}, ref){
  return <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
})
