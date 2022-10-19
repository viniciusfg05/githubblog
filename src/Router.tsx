import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Home } from './pages/Home'
import { IssuesPost } from './pages/Issues'


export function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/issues" element={<IssuesPost />}/>
      </Route>
    </Routes>
  )
}
