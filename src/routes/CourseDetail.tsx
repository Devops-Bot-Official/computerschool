import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { courses } from '../data/courses'

const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    return <div className="text-center py-12">Course not found.</div>
  }

  const handleEnroll = () => {
    navigate(`/admissions?course=${encodeURIComponent(course.slug)}`)
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{course.title}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-300 mt-2">{course.shortDesc}</p>
          <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">{course.category} • {course.level} • {course.duration}</div>
        </div>

        <div className="mt-4 md:mt-0">
          <button onClick={handleEnroll} className="bg-sky-600 text-white px-4 py-2 rounded-md">Enroll</button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Syllabus</h2>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
          {course.syllabus.map((s, i) => (
            <li key={i} className="py-1">{s}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">About this course</h2>
        <p className="text-slate-600 dark:text-slate-300">{course.shortDesc} This course covers the fundamentals and practical examples to help you gain real-world skills.</p>
      </div>
    </div>
  )
}

export default CourseDetail
