import { Route, Routes, useParams } from 'react-router-dom'
import { DefaultLayout } from './pages/Home/DefaultLayout'
import { Home } from './pages/Home'
import { IssuesPost } from './pages/Issues'


export function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/issues/:userId" element={<IssuesPost />}/>
      </Route>
    </Routes>
  )
}
