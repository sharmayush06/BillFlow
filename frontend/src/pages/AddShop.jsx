import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Building2, Store, MapPin, Landmark, Globe2, Banknote, FileText } from 'lucide-react'
import { createShop } from '../services/shopService'

const initialForm = {
    shopName: '',
    gstNumber: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    logoUrl: '',
    currency: 'INR',
}

function AddShop() {
    const [formData, setFormData] = useState(initialForm)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsSubmitting(true)

        try {
            const payload = {
                ...formData,
                logoUrl: formData.logoUrl || 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
            }
            await createShop(payload)
            navigate('/select-store')
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Unable to create shop')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-10">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                <div className="border-b border-slate-200 px-6 py-6 md:px-10">
                    <button onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
                        <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Create Shop</p>
                            <h1 className="text-3xl font-bold text-slate-900">Add your business profile</h1>
                            <p className="mt-2 text-sm text-slate-500">This information is used for invoices, dashboard analytics, and shop selection.</p>
                        </div>
                        <div className="rounded-2xl bg-sky-100 p-4 text-sky-700">
                            <Building2 className="h-8 w-8" />
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10">
                    <div className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-2"><Store className="h-4 w-4" /> Shop Name</span>
                                <input required name="shopName" value={formData.shopName} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none ring-0 transition focus:border-sky-500" placeholder="Example: City Mart" />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> GST Number</span>
                                <input required name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="22AAAAA0000A1Z5" />
                            </label>
                        </div>

                        <label className="space-y-2 text-sm font-medium text-slate-700">
                            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Address</span>
                            <textarea required rows="3" name="address" value={formData.address} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="Shop address" />
                        </label>

                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-2"><Landmark className="h-4 w-4" /> City</span>
                                <input required name="city" value={formData.city} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="Mumbai" />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-2"><Landmark className="h-4 w-4" /> State</span>
                                <input required name="state" value={formData.state} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="Maharashtra" />
                            </label>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-2"><Globe2 className="h-4 w-4" /> Country</span>
                                <input required name="country" value={formData.country} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="India" />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Pincode</span>
                                <input required name="pincode" value={formData.pincode} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="400001" />
                            </label>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <Banknote className="h-4 w-4 text-sky-600" /> Shop Preferences
                        </div>
                        <div className="mt-4 space-y-4">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span>Currency</span>
                                <input required name="currency" value={formData.currency} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="INR" />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                <span>Logo URL</span>
                                <input name="logoUrl" value={formData.logoUrl} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none transition focus:border-sky-500" placeholder="https://..." />
                            </label>

                            {error && (
                                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>
                            )}

                            <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60">
                                {isSubmitting ? 'Creating shop...' : 'Create Shop'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShop
