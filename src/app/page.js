'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'

import { useSession } from 'next-auth/react'

export default function Home() {

  const session = useSession()
  console.log(session);
  return (
    <main className="">
      <header className="">
                <Navbar />
HOMEPAGE
      </header>
    </main>
  )
}
