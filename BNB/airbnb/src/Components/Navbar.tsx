import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-[#FF385C]">
            ⌂
          </span>

          <span className="text-2xl font-bold text-[#FF385C]">
            airbnb
          </span>
        </div>

        {/* Desktop Search */}
        <div className="hidden items-center rounded-full border border-gray-300 shadow-sm md:flex">
          
          <button className="border-r border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
            Anywhere
          </button>

          <button className="border-r border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
            Any week
          </button>

          <button className="px-5 py-3 text-sm text-gray-500">
            Add guests
          </button>

          <button className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#FF385C] text-white">
            🔍
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center gap-2">
          
          <button className="hidden rounded-full px-4 py-3 text-sm font-semibold hover:bg-gray-100 lg:block">
            Airbnb your home
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 hover:shadow-md"
          >
            ☰
            <span className="text-xl">●</span>
          </button>

          {/* Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-14 z-50 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
              
              <button className="w-full rounded-lg px-4 py-3 text-left text-sm hover:bg-gray-100">
                Sign up
              </button>

              <button className="w-full rounded-lg px-4 py-3 text-left text-sm hover:bg-gray-100">
                Log in
              </button>

              <hr className="my-1" />

              <button className="w-full rounded-lg px-4 py-3 text-left text-sm hover:bg-gray-100">
                Airbnb your home
              </button>

              <button className="w-full rounded-lg px-4 py-3 text-left text-sm hover:bg-gray-100">
                Help Center
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-5 pb-4 md:hidden">
        <button className="flex w-full items-center gap-3 rounded-full border border-gray-300 px-5 py-3 text-left shadow-sm">
          <span>🔍</span>

          <div>
            <p className="text-sm font-semibold">
              Where to?
            </p>

            <p className="text-xs text-gray-500">
              Anywhere • Any week • Add guests
            </p>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar