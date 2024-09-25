'use client'

import { useState } from 'react'

const initialClasses = [
  { name: 'Beginner', duration: '8 weeks', price: '€200' },
  { name: 'Intermediate', duration: '10 weeks', price: '€250' },
  { name: 'Advanced', duration: '12 weeks', price: '€300' },
]

export default function ClassesTable() {
  const [classes, setClasses] = useState(initialClasses)

  const addRow = () => {
    setClasses([...classes, { name: 'New Class', duration: 'TBD', price: 'TBD' }])
  }

  const removeRow = (index: number) => {
    setClasses(classes.filter((_, i) => i !== index))
  }

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 p-2">Class Name</th>
            <th className="border border-gray-300 p-2">Duration</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{cls.name}</td>
              <td className="border border-gray-300 p-2">{cls.duration}</td>
              <td className="border border-gray-300 p-2">{cls.price}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors duration-200"
                  onClick={() => removeRow(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
        onClick={addRow}
      >
        Add Row
      </button>
    </div>
  )
}
