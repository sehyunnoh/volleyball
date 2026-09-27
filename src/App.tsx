import { RouterProvider, createHashRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Browse } from './pages/Browse'
import { Category } from './pages/Category'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Search } from './pages/Search'
import { SkillDetail } from './pages/SkillDetail'

/**
 * Hash routing: GitHub Pages serves this from /volleyball/ and has no server
 * side rewrite, so a hash keeps deep links and refreshes working without a
 * 404.html redirect trick — and keeps the service worker scope simple (8).
 */
const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'browse', element: <Browse /> },
      { path: 'category/:categoryId', element: <Category /> },
      { path: 'skill/:skillId', element: <SkillDetail /> },
      { path: 'search', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
