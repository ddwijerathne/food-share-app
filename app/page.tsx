import { createClient } from '@/utils/supabase/server'
import Image from 'next/image' // Import the Next.js Image component

type FoodItem = {
  id: string
  heading: string | null
  subheading: string | null
  price: number | null
  image_url: string | null
}

export default async function Home() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('food_items')
    .select('*')

  const foodItems = data as FoodItem[] | null

  if (error) {
    console.error('Error fetching:', error)
  }

  return (
    <main className="p-10 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Shared Food</h1>
      
      {/* 1. Added 'max-w-7xl' and 'mx-auto' to center the whole grid
          2. Changed grid-cols-3 to grid-cols-4 for smaller cards on large screens
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodItems?.map((item) => (
          <div key={item.id} className="bg-[#f8f9fa] text-black rounded-3xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] transition-transform duration-200">
            
            {/* Square Image Container */}
            <div className="relative w-full aspect-square bg-gray-200">
              {item.image_url ? (
                <Image 
                  src={item.image_url} 
                  alt={item.heading || 'Food image'} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Reduced padding from p-6 to p-4 for smaller cards */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-bold mb-1 truncate">{item.heading || 'Untitled Dish'}</h2>
              <p className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed">{item.subheading}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-bold text-green-600">
                  ${item.price?.toFixed(2) || '0.00'}
                </span>
                <button className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}