import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// 1. Next.js 16 requires params to be a Promise
export default async function FoodDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient();
  
  // 2. Await the params to safely extract the ID
  const { id } = await params;
  
  // 3. Fetch specific food item
  // ⚠️ IMPORTANT: Change 'food_items' below to match your EXACT Supabase table name!
  const { data: food, error } = await supabase
    .from('food_items') 
    .select('*')
    .eq('id', id)
    .single();

  // If Supabase throws an error (like a wrong table name), log it to your VS Code terminal
  if (error) {
    console.error("Supabase Error fetching detail:", error.message);
  }

  // If no food is found, trigger your beautiful 404 page
  if (!food) notFound();

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
          <Image
            src={food.image_url}
            alt={food.title || food.name || "Delicious shared food item"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-emerald-400 font-medium tracking-widest uppercase text-sm italic">
              Freshly Shared
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-2">{food.name}</h1>
            <p className="text-3xl text-emerald-500 font-semibold mt-4">${food.price}</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Description</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {food.description || "This delicious dish was prepared with fresh ingredients and is looking for a new home. Help reduce food waste by claiming it today!"}
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300">
              Claim This Meal
            </button>
            <button className="px-6 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}