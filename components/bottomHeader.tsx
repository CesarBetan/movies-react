import React from 'react'
import Link from 'next/link'

const bottomHeader = () => {
  return (
    <header className="App-header">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
      </nav>
    </header>
  )
}

export default bottomHeader
