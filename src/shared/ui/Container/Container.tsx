import React, { FunctionComponent, PropsWithChildren }  from 'react'

const Container: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <div className='container mx-auto px-6 py-4'>{children}</div>
  )
}

export default Container