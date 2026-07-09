import React, { useState } from 'react'
import { updateUserProfile } from '../services/walletService'
import { useAuth } from '../store/AuthStore'

function Profile() {
    const user = useAuth((state) => state.user)
    const setUser = useAuth((state) => state.setUser)
    const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' })
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const updated = await updateUserProfile(user.id, form)
            setUser(updated)
            setForm({ name: updated.name || '', email: updated.email || '' })
            setMessage('Profile updated successfully.')
        } catch (error) {
            setMessage(error.response?.data?.message || 'Update failed')
        }
    }

    return (
        <div className="p-6 md:p-8">
            <div className="mx-auto max-w-5xl space-y-6">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Profile</p>
                            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Your BillFlow profile</h1>
                            <p className="mt-2 text-sm text-slate-600">
                                Keep your personal details up to date so your account stays ready for every bill and reminder.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-medium text-sky-700">
                            Active account
                        </div>
                    </div>
                </section>

                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                                <input
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none ring-0 transition focus:border-sky-400"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none ring-0 transition focus:border-sky-400"
                                />
                            </div>
                            <button type="submit" className="w-full rounded-lg bg-sky-600 py-2.5 font-semibold text-white transition hover:bg-sky-700">
                                Save changes
                            </button>
                            {message && (
                                <p className={`text-sm ${message.includes('success') ? 'text-emerald-600' : 'text-slate-600'}`}>
                                    {message}
                                </p>
                            )}
                        </form>
                    </section>

                    <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-900/20">
                        <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Account overview</p>
                        <h2 className="mt-4 text-2xl font-semibold">Stay ready for every payment</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-200">
                            Keep your profile current so reminders, alerts, and billing information always reflect the right details.
                        </p>
                        <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-300">Name</span>
                                <span className="font-medium">{form.name || 'Not provided'}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-300">Email</span>
                                <span className="font-medium">{form.email || 'Not provided'}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile
