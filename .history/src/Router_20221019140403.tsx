import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Home } from './pages/Home'


export function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/issues" element={<Home />}/>
      </Route>
    </Routes>
  )
}
