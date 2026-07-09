import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { 
    LayoutDashboard, 
    ReceiptIndianRupee,
    Upload,
    BadgePlus,
    UserPlus,
    Store,
    LogOut,
    Menu,
    X
} from 'lucide-react'
import { useAuth } from '../store/AuthStore'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const logout = useAuth((state) => state.logout)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { icon: <ReceiptIndianRupee size={20}/>, label: 'Bill',path: '/bill'},
        { icon: <Upload size={20} />, label: 'Update Stock', path: '/update-stock' },
        { icon: <BadgePlus size={20}/> , label: 'Add Product' , path: '/add-product'},
        { icon: <UserPlus size={20} /> , label: 'Add Employee' , path: '/add-employee'},
    ]

    return (
        <>
            {/* Desktop Sidebar */}
            <div className={`hidden md:block md:fixed md:left-0 md:top-0 md:h-full md:bg-slate-900 md:text-white md:transition-all md:duration-300 ${sidebarOpen ? 'md:w-64' : 'md:w-20'} md:z-40`}>
                {/* Logo Section */}
                <div className="flex items-center gap-3 p-6 border-b border-slate-700">
                    <div className="p-2 rounded-lg bg-blue-600">
                        <Store className="h-6 w-6" onClick={toggleSidebar}/>
                    </div>
                    {sidebarOpen && <span className="font-bold text-lg">BillFLow</span>}
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col gap-2 p-4">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`
                            }
                            title={!sidebarOpen ? item.label : ''}
                        >
                            {item.icon}
                            {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-slate-700 p-4">
                    <button
                        onClick={handleLogout}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition-colors ${!sidebarOpen && 'justify-center'}`}
                    >
                        <LogOut size={20} />
                        {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </div>


            {/* Mobile Toggle Button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden left-4 top-4 z-50 p-3 fixed rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Backdrop */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar Drawer */}
            <div
                className={`md:hidden fixed left-0 top-0 h-full w-64 bg-slate-900 text-white transition-transform duration-300 z-40 ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-3 p-6 border-b border-slate-700">
                    <div className="p-2 rounded-lg bg-blue-600">
                        <Store className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">PayWallet</span>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col gap-2 p-4">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`
                            }
                        >
                            {item.icon}
                            <span className="text-sm font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-slate-700 p-4">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
