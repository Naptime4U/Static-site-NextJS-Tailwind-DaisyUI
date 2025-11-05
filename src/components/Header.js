import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='navbar bg-blue-950 space-x-36 flex gap-2 text-white'>
        <Link href="/">Home</Link>
        <Link href="/crews">Crews</Link>
        <Link href="/activities">Activities</Link>
    </div>
  )
}

export default Header