import React from 'react'
import { Link } from 'react-router-dom'
import type { Course } from '../data/courses'

interface CourseCardProps {
  course: Course
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="block rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow card-border p-5 h-full"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{course.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{course.shortDesc}</p>
        </div>
        <div className="text-xs text-slate-400 dark:text-slate-300 ml-4 text-right">
          <div className="font-medium">{course.level}</div>
          <div className="mt-1">{course.duration}</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{course.category}</div>
    </Link>
  )
}

export default CourseCard
