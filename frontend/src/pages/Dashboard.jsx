import React, { useEffect, useState } from 'react'
import { getBalance, getUserProfile, getWallet } from '../services/walletService'
import { useAuth, useAuthStore } from '../store/AuthStore'

function Dashboard() {
    const user = useAuth((state) => state.user)
    const [wallet, setWallet] = useState(null)
    const [balance, setBalance] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadDashboard = async () => {
            if (!user?.id) return
            try {
                const [profile, walletData, balanceData] = await Promise.all([
                    getUserProfile(user.id),
                    getWallet(user.id),
                    getBalance(user.id),
                ])
                setWallet(walletData)
                setBalance(balanceData)
                useAuthStore.getState().setUser(profile)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        loadDashboard()
    }, [user?.id])

    if (loading) {
        return <div className="p-8 text-slate-600">Loading dashboard...</div>
    }

    return (
        <div className="p-6 md:p-8 space-y-6">
            <div className="bg-linear-to-r from-sky-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-sm uppercase tracking-wide opacity-80">Welcome back</p>
                <h1 className="text-2xl font-semibold mt-2">{user?.name || 'User'}</h1>
                <p className="text-sm mt-2">Your wallet is connected to the backend.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <p className="text-sm text-slate-500">Current balance</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">₹{balance}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <p className="text-sm text-slate-500">Wallet ID</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{wallet?.id || '—'}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
