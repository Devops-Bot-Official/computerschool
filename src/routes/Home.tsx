import React from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

const Home: React.FC = () => {
  const featured = courses.slice(0, 3)

  return (
    <div>
      <section className="rounded-2xl bg-white dark:bg-slate-800 shadow-sm p-8 mb-8">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Computer School</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Practical technology training to launch your career — hands-on, project based.</p>
            <div className="mt-4">
              <Link to="/admissions" className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md">Apply Now</Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
              <strong>Next cohort:</strong> Starting soon — limited seats
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((c) => (
            <Link key={c.id} to={`/courses/${c.slug}`} className="block rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md card-border p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">{c.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{c.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
