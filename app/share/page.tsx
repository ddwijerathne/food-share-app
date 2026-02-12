'use client'

import { useState } from 'react'
import { shareFood } from '../actions/food-actions'

export default function SharePage() {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-[#D9D9D9] w-full max-w-5xl p-12 rounded-lg shadow-sm flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Inputs */}
        <form action={shareFood} className="flex-1 space-y-6">
          <div className="space-y-2">
            <label className="text-xl font-medium">heading</label>
            <input 
              name="heading"
              required
              className="w-full p-3 bg-white border-none outline-none text-gray-600"
              placeholder="Surplus Bakery Bundles (Ends Tonight)"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xl font-medium">subheading</label>
            <input 
              name="subheading"
              required
              className="w-full p-3 bg-white border-none outline-none text-gray-600"
              placeholder="Delicious bakery treats at unbeatable prices"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xl font-medium">price</label>
            <input 
              name="price"
              type="number"
              required
              className="w-full p-3 bg-white border-none outline-none text-gray-600"
              placeholder="Suggested price in USD"
            />
          </div>

          <div className="flex gap-0 pt-4">
            <input 
              type="file" 
              name="image"
              accept="image/*"
              onChange={handleImagePreview}
              required
              className="flex-1 p-2 bg-white text-gray-400"
            />
            <button 
              type="submit"
              className="bg-[#C4C4C4] px-10 py-2 text-xl font-medium hover:bg-gray-400 transition-colors"
            >
              share
            </button>
          </div>
        </form>

        {/* Right Side: Preview */}
        <div className="w-full md:w-[400px] h-[450px] bg-[#E5E5E5] flex items-center justify-center p-8 text-center border border-gray-300">
          {preview ? (
            <img src={preview} alt="Preview" className="w-full object-cover" />
          ) : (
            <p className="text-xl text-black">
              Your photo will appear here—add a clear, bright shot.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}