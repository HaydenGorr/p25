'use client'

import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

const RouteBasedLayout = ({ children }: Props) => {
  const pathname = usePathname()
  
  const getBgColor = () => {
    console.log(pathname)
    if (pathname?.startsWith('/game-writing')) {
      return 'bg-purple-50' // Game Writing background
    }
    if (pathname?.startsWith('/game-design')) {
      return 'bg-blue-50' // Game Design background  
    }
    if (pathname?.startsWith('/software-engineering')) {
      return 'bg-eng-background' // Engineering background
    }
    if (pathname?.startsWith('/creative-writing')) {
      return 'bg-amber-50' // Creative Writing background
    }
    return 'bg-white' // Default background
  }

  return (
    <div className={`min-h-screen ${getBgColor()}`}>
      {children}
    </div>
  )
}

export default RouteBasedLayout