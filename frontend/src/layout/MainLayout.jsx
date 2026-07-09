import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../store/AuthStore'

function MainLayout() {
    const user = useAuth((state) => state.user)
    const authToken = useAuth((state) => state.authToken)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const isAuthenticated = Boolean(authToken || user)

    return (
        <div>
            {isAuthenticated ? (
                <div className="flex">
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main className={`w-full transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} min-h-screen`}>
                        <Outlet />
                    </main>
                </div>
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                </>
            )}
        </div>
    )
}

export default MainLayout
