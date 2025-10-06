import React from 'react'

export function Badge({ className = '', variant = 'secondary', children }) {
  const styles = {
    secondary: 'bg-slate-100 text-slate-800 border border-slate-200'
  }
  return <span className={`inline-flex items-center px-3 py-1 text-xs rounded-xl ${styles[variant]} ${className}`}>{children}</span>
}
