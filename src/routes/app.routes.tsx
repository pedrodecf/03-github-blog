import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts'
import { View } from '../pages/View'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
