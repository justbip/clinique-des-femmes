import React, { useState } from 'react'

export function Accordion({ children, className = '' }) {
  return <div className={`divide-y ${className}`}>{children}</div>
}
export function AccordionItem({ value, children }) {
  return <div>{children}</div>
}
export function AccordionTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} className="w-full text-left py-3 font-medium">
      {children}
    </button>
  )
}
export function AccordionContent({ children, open }) {
  return (
    <div className={`text-slate-700 pb-4 ${open ? 'block' : 'hidden'}`}>
      {children}
    </div>
  )
}

// Helper component to mimic 'single, collapsible'
export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-2">
      <AccordionTrigger onClick={() => setOpen(o => !o)}>{question}</AccordionTrigger>
      <AccordionContent open={open}>{answer}</AccordionContent>
    </div>
  )
}
