import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      {/* Visual cue for the user */}
      <div className="mb-6 text-green-500">
        <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <h2 className="text-4xl font-bold mb-3">Dish Not Found</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
        We couldn't find the page you were looking for. The link may be broken, 
        or the shared food item might have been removed.
      </p>

      <Link 
        href="/" 
        className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-xl"
      >
        Back to Food Gallery
      </Link>
    </main>
  )
}