import React, { useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard'
import FilterBar from '../components/FilterBar'
import { courses as allCourses } from '../data/courses'

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedLevel, setSelectedLevel] = useState<string>('')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allCourses.map((c) => c.category)))
    return unique
  }, [])

  const levels = useMemo(() => {
    const unique = Array.from(new Set(allCourses.map((c) => c.level)))
    return unique
  }, [])

  const filtered = useMemo(() => {
    return allCourses.filter((c) => {
      if (selectedCategory && c.category !== selectedCategory) return false
      if (selectedLevel && c.level !== selectedLevel) return false
      return true
    })
  }, [selectedCategory, selectedLevel])

  return (
    <div>
      <div className="mb-4 md:flex md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Courses</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">Browse all courses we offer. Click a course to see details and enroll.</p>
      </div>

      <FilterBar
        categories={categories}
        levels={levels}
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        onCategoryChange={setSelectedCategory}
        onLevelChange={setSelectedLevel}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 text-center text-slate-500 dark:text-slate-400">No courses found for the selected filters.</div>
      )}
    </div>
  )
}

export default Courses
