import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-sm p-6">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Get in touch with us for any inquiries or support.</p>

        <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <strong>Address</strong>
            <div className="mt-1">123 Tech Avenue, Suite 100<br />Cityville, ST 12345</div>
          </div>

          <div>
            <strong>Email</strong>
            <div className="mt-1">admissions@computerschool.example</div>
          </div>

          <div>
            <strong>Phone</strong>
            <div className="mt-1">+1 (555) 123-4567</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
