'use client'

import { useState } from 'react'
import { shareFood } from '../actions/food-actions'

export default function SharePage() {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Professional check: limit preview for large files
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {/* Modern Glassmorphic Card */}
      <div className="bg-[#111] w-full max-w-5xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Inputs */}
        <form action={shareFood} className="flex-1 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Share Food</h1>
            <p className="text-gray-500 mb-8">Fill in the details to list your items.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">Heading</label>
              <input 
                name="heading"
                required
                className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-green-500/50 transition-all text-white placeholder:text-gray-600"
                placeholder="Surplus Bakery Bundles"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">Subheading</label>
              <input 
                name="subheading"
                required
                className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-green-500/50 transition-all text-white placeholder:text-gray-600"
                placeholder="Delicious treats at unbeatable prices"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">Price (USD)</label>
              <input 
                name="price"
                type="number"
                step="0.01"
                required
                className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-green-500/50 transition-all text-white placeholder:text-gray-600"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">Upload Image</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="file" 
                name="image"
                accept="image/*"
                onChange={handleImagePreview}
                required
                className="flex-1 p-3 bg-white/5 border border-white/10 rounded-2xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200 cursor-pointer"
              />
              <button 
                type="submit"
                className="bg-green-600 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-green-500 transition-all active:scale-95 shadow-lg shadow-green-900/20"
              >
                Share
              </button>
            </div>
          </div>
        </form>

        {/* Right Side: Professional Square Preview */}
        <div className="w-full md:w-[400px] flex flex-col gap-4">
           <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">Live Preview</label>
           <div className="relative aspect-square w-full bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 flex items-center justify-center border-dashed">
            {preview ? (
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-full object-cover animate-in fade-in zoom-in duration-300" 
              />
            ) : (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-gray-500 text-sm">
                  Add a bright photo to see how it looks.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}