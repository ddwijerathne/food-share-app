import { createClient } from '@/utils/supabase/server'

// 1. Defining the Type locally or importing it
type FoodItem = {
  id: string
  heading: string | null
  subheading: string | null
  price: number | null
  image_url?: string | null // Added this to match your DB schema
}

export default async function Home() {
  // 2. ERROR FIX: createClient is async in your server.ts, so we MUST await it
  const supabase = await createClient()

  // 3. ERROR FIX: The correct syntax for typing a select query in Supabase 
  // is .select<string, FoodItem>('*') or simply using 'as' for the result.
  const { data, error } = await supabase
    .from('food_items')
    .select('*')

  // Type cast the data to your FoodItem array
  const foodItems = data as FoodItem[] | null

  if (error) {
    console.error('Error fetching:', error)
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Shared Food</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foodItems?.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-xl">
             {/* 4. ERROR FIX: Ensure properties exist before rendering */}
             <h2 className="font-bold">{item.heading || 'No Heading'}</h2>
             <p className="text-sm text-gray-600">{item.subheading}</p>
             <p className="text-green-600 font-semibold">${item.price || 0}</p>
          </div>
        ))}
      </div>
    </main>
  )
}