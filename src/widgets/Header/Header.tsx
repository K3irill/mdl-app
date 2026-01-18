'use client'

import { authSelector } from '@/src/shared/store/slices/auth/selectors'
import Container from '@/src/shared/ui/Container/Container'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

const Header = () => {
  const pathname = usePathname()
  const { isAuth } = useSelector(authSelector)

  const linkClass = (path: string) =>
    pathname === path ? 'text-blue-400' : ''

  return (
    <header className=''>
     <Container>
      <div className='flex items-center justify-between'>
        <nav className='flex gap-4'>
          <Link className={`${linkClass('/') } hover:text-blue-600` } href={'/'}>Главная</Link>
          <Link className={`${linkClass('/users')  } hover:text-blue-600` } href={'/users'}>Пользователи</Link>
        </nav>
        <div>
          {isAuth ? <Link className={`${linkClass('/profile')  } hover:text-blue-600`} href={'/profile'}>Профиль</Link> : <Link className={`${linkClass('/login')  } hover:text-blue-600`} href={'/login'}>Войти</Link>}
        </div>
      </div>
     </Container>
    </header>
  )
}

export default Header