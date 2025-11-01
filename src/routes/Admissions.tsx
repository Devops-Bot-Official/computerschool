import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { courses } from '../data/courses'

interface FormState {
  name: string
  email: string
  phone: string
  selectedCourse: string
  message: string
}

const Admissions: React.FC = () => {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('course') ?? ''

  const options = useMemo(() => courses, [])

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', selectedCourse: preselected, message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (preselected) {
      setForm((f) => ({ ...f, selectedCourse: preselected }))
    }
  }, [preselected])

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.selectedCourse) e.selectedCourse = 'Please choose a course'
    return e
  }

  const handleChange = (k: keyof FormState, v: string) => {
    setForm((s) => ({ ...s, [k]: v }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
    setSuccess(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eObj = validate()
    setErrors(eObj)
    if (Object.keys(eObj).length === 0) {
      const payload = { ...form, timestamp: new Date().toISOString() }
      console.log('Admissions form submitted:', payload)
      setSuccess('Your application has been submitted. We will contact you soon.')
      setForm({ name: '', email: '', phone: '', selectedCourse: '', message: '' })
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-sm p-6">
        <h1 className="text-2xl font-bold">Admissions</h1>
        <p className="text-sm text-slate-500 dark:text-slate-300 mt-2">Complete the form below to apply. This is a demo — submissions are logged to the console.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {success && <div className="p-3 bg-green-100 text-green-800 rounded-md">{success}</div>}

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
            <input
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
            />
            {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
            <input
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
            />
            {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Select course</label>
            <select
              value={form.selectedCourse}
              onChange={(e) => handleChange('selectedCourse', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
            >
              <option value="">-- choose --</option>
              {options.map((c) => (
                <option key={c.id} value={c.slug}>{c.title}</option>
              ))}
            </select>
            {errors.selectedCourse && <div className="text-sm text-red-600 mt-1">{errors.selectedCourse}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message (optional)</label>
            <textarea
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
              rows={4}
            />
          </div>

          <div>
            <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-md">Submit application</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admissions
