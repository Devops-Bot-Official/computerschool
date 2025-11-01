import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 border-t border-gray-100 dark:border-slate-800 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {year} Computer School. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
