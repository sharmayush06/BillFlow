import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store, PlusCircle, Sparkles } from 'lucide-react'
import AddShop from '../components/AddShop'
import Shop from '../components/Shop'
import { getShops } from '../services/shopService'

function SelectStore() {
    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const data = await getShops()
                setShops(Array.isArray(data) ? data : [])
            } catch (error) {
                console.error('Failed to load shops', error)
            } finally {
                setLoading(false)
            }
        }

        fetchShops()
    }, [])

    const handleSelectShop = (shop) => {
        localStorage.setItem('activeShop', JSON.stringify(shop))
        navigate('/dashboard')
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.1),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#f1f5f9_100%)] px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                            <Sparkles className="h-4 w-4" /> Welcome back
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900">Choose your shop</h1>
                        <p className="mt-2 max-w-2xl text-slate-600">Select an existing shop or create a new one to continue into the dashboard.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <AddShop />
                    </div>
                </div>

                <div className="mb-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                            <Store className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900">Your shops</h2>
                            <p className="text-sm text-slate-500">Manage all your business locations in one place.</p>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">Loading shops...</div>
                ) : (
                    <Shop shops={shops} onSelect={handleSelectShop} />
                )}
            </div>
        </div>
    )
}

export default SelectStore
