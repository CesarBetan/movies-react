import React, { ReactNode } from 'react'
import TopHeader from './topHeader'
import BottomHeader from './bottomHeader'

interface LayoutProps {
  children?: ReactNode
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>
        <TopHeader />
        <BottomHeader />
      </div>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default layout
