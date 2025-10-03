'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon, Home, BarChart3, Users, Receipt } from 'lucide-react'
import { useState, useEffect } from 'react'
import RoutePaths from '@/lib/routes'

export default function NavBar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { path: RoutePaths.HOME, name: 'Home', icon: Home },
    { path: RoutePaths.DASHBOARD, name: 'Dashboard', icon: BarChart3 },
    { path: RoutePaths.GROUPS, name: 'Groups', icon: Users },
    { path: RoutePaths.EXPENSES, name: 'Expenses', icon: Receipt },
  ]

  return (
    <nav className="bg-white dark:bg-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={RoutePaths.HOME} className="text-xl font-bold text-gray-800 dark:text-white">
                Splito
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-100'
                    }`}
                  >
                    <Icon className="mr-2" size={16} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {mounted ? (resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />) : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}