import { Heart, Calendar, Camera, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 grid place-items-center text-white shadow-lg">
            <Heart className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Expecting Dad</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#journey" className="hover:text-gray-900 transition-colors flex items-center gap-1">
            <Calendar className="h-4 w-4" /> Journey
          </a>
          <a href="#moments" className="hover:text-gray-900 transition-colors flex items-center gap-1">
            <Camera className="h-4 w-4" /> Moments
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors flex items-center gap-1">
            <User className="h-4 w-4" /> About
          </a>
        </nav>
        <a href="#journey" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          Follow the Journey
        </a>
      </div>
    </header>
  );
}
