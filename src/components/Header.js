import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='navbar bg-blue-950 p-2 flex gap-2'>
        <Link href="/">Home</Link>
        <Link href="/members">Crews</Link>
        <Link href="/movement-glosary">Movement Glosary</Link>
        <Link href="/activities">Activities</Link>
    </div>
  )
}

export default Header