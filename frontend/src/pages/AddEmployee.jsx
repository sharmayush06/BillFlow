import React, { useState } from 'react'
import { ArrowLeft, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { registerEmployeeUser } from '../services/authService'

const initialForm = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
}

function AddEmployee() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const { firstName, lastName, username, email, phoneNumber, password, confirmPassword } = formData

    if (!firstName || !lastName || !username || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setIsSubmitting(true)
      await registerEmployeeUser({
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        password,
        role: 'EMPLOYEE',
      })
      setSuccess('Employee account created successfully')
      setFormData(initialForm)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unable to create employee account')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-6 md:px-10">
          <button onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Team</p>
              <h1 className="text-3xl font-bold text-slate-900">Add an employee</h1>
              <p className="mt-2 text-sm text-slate-500">Create a new employee account that will be stored with the employee role.</p>
            </div>
            <div className="rounded-2xl bg-sky-100 p-4 text-sky-700">
              <UserPlus className="h-8 w-8" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-8 md:px-10">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>First name</span>
              <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Last name</span>
              <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Username</span>
              <input name="username" value={formData.username} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Phone number</span>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Password</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Confirm password</span>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
          </div>

          {error && <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>}
          {success && <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{success}</div>}

          <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Creating employee...' : 'Create employee'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee
