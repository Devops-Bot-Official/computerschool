import React from 'react'

interface FilterBarProps {
  categories: string[]
  levels: string[]
  selectedCategory: string
  selectedLevel: string
  onCategoryChange: (value: string) => void
  onLevelChange: (value: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, levels, selectedCategory, selectedLevel, onCategoryChange, onLevelChange }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
      <div className="flex gap-3 items-center">
        <label className="text-sm text-slate-600 dark:text-slate-300">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-3 items-center">
        <label className="text-sm text-slate-600 dark:text-slate-300">Level</label>
        <select
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value)}
          className="rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
        >
          <option value="">All</option>
          {levels.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar
