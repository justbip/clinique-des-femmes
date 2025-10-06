import React from 'react'

export function Button({ className = '', variant = 'default', children, ...rest }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl transition focus:outline-none border'
  const styles = {
    default: 'bg-slate-900 text-white border-slate-900 hover:opacity-90',
    outline: 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'
  }
  return <button className={`${base} ${styles[variant] || styles.default} ${className}`} {...rest}>{children}</button>
}
