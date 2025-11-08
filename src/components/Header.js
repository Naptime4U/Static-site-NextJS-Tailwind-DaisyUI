"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="hidden md:flex gap-6 font-semibold text-lg">
          <Link
            href="/"
            className="relative px-4 py-2 rounded-md transition-all hover:bg-blue-900 hover:shadow-lg after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/crews"
            className="relative px-4 py-2 rounded-md transition-all hover:bg-blue-900 hover:shadow-lg after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Crews
          </Link>
          <Link
            href="/activities"
            className="relative px-4 py-2 rounded-md transition-all hover:bg-blue-900 hover:shadow-lg after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Activities
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none gap-1"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-2 bg-blue-950 border-t border-blue-900 py-4">
          <Link href="/" onClick={() => setOpen(false)} className="w-11/12 text-center py-2 rounded-lg hover:bg-blue-900 transition-all shadow-md">Home</Link>
          <Link href="/crews" onClick={() => setOpen(false)} className="w-11/12 text-center py-2 rounded-lg hover:bg-blue-900 transition-all shadow-md">Crews</Link>
          <Link href="/activities" onClick={() => setOpen(false)} className="w-11/12 text-center py-2 rounded-lg hover:bg-blue-900 transition-all shadow-md">Activities</Link>
        </div>
      )}
    </header>
  )
}

export default Header
