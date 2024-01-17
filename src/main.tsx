import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { UserProvider } from './context/UserContext'
import { PostProvider } from './context/PostContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <PostProvider>
          <Routes />
        </PostProvider>
      </UserProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
