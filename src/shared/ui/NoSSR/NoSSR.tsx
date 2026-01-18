'use client'
import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react'

const NoSSR: FunctionComponent<PropsWithChildren> = ({children}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    const id = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(id)
  },[])

  return (
    <>{mounted && children}</>
  )
}

export default NoSSR