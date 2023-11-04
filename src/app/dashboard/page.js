'use client'


import React from 'react'
import { Button } from '../components/Button'
import { signOut } from 'next-auth/react'

const Dashboard = () => {


  return (


    <div>Dashboard

      <div onClick={()=>signOut()} className="">
      <Button>Log Out</Button>

      </div>
    </div>
  )
}

export default Dashboard