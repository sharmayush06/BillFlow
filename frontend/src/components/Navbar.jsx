import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Store, Menu, X } from 'lucide-react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-t border-slate-200 bg-slate-950 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4 md:gap-8">
                    <div className="flex items-center gap-3">
                        <div className="     rounded-lg  bg-blue-600/20 p-2 text-blue-400 shadow-md">
                            <Store className="h-6 w-12 text-blue-400" strokeWidth={2} />
                        </div>
                        <NavLink
                            to='/'
                            className="font-bold text-xl text-white hover:text-slate-300 transition-colors"
                        >
                            BillFlow
                        </NavLink>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-8">
                        <div className="flex flex-wrap items-center gap-1">
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to='/features'
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`
                                }
                            >
                                Features
                            </NavLink>
                            <NavLink
                                to='/how-it-works'
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`
                                }
                            >
                                How It Works
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-4">
                            <NavLink
                                to='/login'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`
                                }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to='/register'
                                className="px-4 py-2 rounded-md bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Get Started
                            </NavLink>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg md:hidden">
                        <div className="grid gap-2">
                            <NavLink
                                to='/'
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/about'
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to='/features'
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                    }`
                                }
                            >
                                Features
                            </NavLink>
                            <NavLink
                                to='/how-it-works'
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                    }`
                                }
                            >
                                How It Works
                            </NavLink>
                        </div>
                        <div className="mt-4 grid gap-2">
                            <NavLink
                                to='/login'
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to='/register'
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
