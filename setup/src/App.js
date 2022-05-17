import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

// setting up local storage
const getStorageTheme = () => {
  // using let instead of const because it will change
  let theme = 'light-theme'
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  // invoke getStorage theme as the starting point
  const [theme, setTheme] = useState(getStorageTheme())

  useEffect(() => {
    // apply directly to the HTML file
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
    // invoke every time theme changes hence [theme]
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
    else{
      setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={toggleTheme}>toggle</button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((article) => {
          return <Article key={article.id} {...article} />
        })}
      </section>
    </main>
  )
}

export default App
