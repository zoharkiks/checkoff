'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'

import { useSession } from 'next-auth/react'

export default function Home() {

  const session = useSession()
  return (
    <main className="">
      <header className="">
                <Navbar />
HOMEPAGE
      </header>
    </main>
  )
}
