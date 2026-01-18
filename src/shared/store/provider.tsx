'use client'

import React, { FC, PropsWithChildren } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'

const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider