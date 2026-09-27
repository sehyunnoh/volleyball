import { useEffect } from 'react'
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router'
import { countPageView } from '../lib/analytics'

const NAV = [
  { to: '/', label: 'Home', icon: <path d="M3 10.5 12 3l9 7.5V21h-6v-7H9v7H3z" /> },
  { to: '/browse', label: 'Contents', icon: <path d="M4 6h16M4 12h16M4 18h16" /> },
  {
    to: '/search',
    label: 'Search',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4.5-4.5" />
      </>
    ),
  },
]

function Mark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[21px] w-[21px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 2.5c-4.2 4-4.2 15 0 19" />
      <path d="M3.2 9c5.4 3 13.2 3 18.6 0" />
      <path d="M3.2 15c5.4-3 13.2-3 18.6 0" />
    </svg>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => countPageView(pathname), [pathname])

  return (
    <>
      <ScrollRestoration />

      {/* Masthead: the double rule is the handbook's signature. */}
      <header className="bg-paper/90 sticky top-0 z-10 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-2">
          <NavLink to="/" className="flex items-center gap-2">
            <Mark />
            <span className="font-slab text-[19px] font-bold">Volleyball Handbook</span>
          </NavLink>
        </div>
        <div className="mx-auto max-w-3xl px-4">
          <div className="bg-rule-strong h-[2px]" />
          <div className="bg-rule-strong mt-[2px] h-px" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-5">
        <Outlet />
      </main>

      {/* Fixed to the bottom so the main actions sit under the thumb (7.1). */}
      <nav
        aria-label="Main"
        className="border-rule-strong bg-paper/95 fixed inset-x-0 bottom-0 z-10 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur"
      >
        <ul className="mx-auto flex max-w-3xl">
          {NAV.map((item) => (
            <li key={item.to} className="flex-1">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `tap-target flex flex-col items-center justify-center gap-1 py-2.5 ${
                    isActive ? 'text-accent' : 'text-ink-3'
                  }`
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
                <span className="label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
