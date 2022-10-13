import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { RouterProvider } from './Router'
import { GlobalStyles } from './Styles/Global'
import { defaultTheme } from './Styles/Theme/Default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}

