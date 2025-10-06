import React from 'react'

export function Input({ className = '', ...rest }) {
  return <input className={`w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 ${className}`} {...rest} />
}
