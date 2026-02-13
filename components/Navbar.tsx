import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          FoodShare
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/share" 
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
          >
            Share Food
          </Link>
        </div>
      </div>
    </nav>
  )
}