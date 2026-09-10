import { useMemo, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom"

import Navbar from "./Components/Navbar"
import CategoryFilter from "./Components/CategoryFilter"
import PropertyCard from "./Components/PropertyCard"
import { listingsData } from "./listingsData"


// ==================== HOME PAGE ====================

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const navigate = useNavigate()

  const filteredListings = useMemo(() => {
    if (selectedCategory === "All") {
      return listingsData
    }

    return listingsData.filter(
      (listing) => listing.category === selectedCategory
    )
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Categories */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-5 py-8">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-2xl font-semibold text-gray-900">
            Explore stays
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Find your perfect place to stay
          </p>
        </div>

        {/* Property Grid */}
        <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={listing}
              onClick={() => {
                navigate(`/property/${listing.id}`)
              }}
            />
          ))}

        </section>

        {/* No Results */}
        {filteredListings.length === 0 && (
          <div className="py-20 text-center">

            <h2 className="text-xl font-semibold">
              No properties found
            </h2>

            <p className="mt-2 text-gray-500">
              Try another category.
            </p>

          </div>
        )}

      </main>
    </div>
  )
}


// ==================== PROPERTY DETAILS ====================

function PropertyDetails() {
  const { id } = useParams()

  const navigate = useNavigate()

  const listing = listingsData.find(
    (item) => item.id === Number(id)
  )

  // Property doesn't exist
  if (!listing) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">

        <div className="text-center">

          <h1 className="text-2xl font-bold">
            Property not found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-5 rounded-lg bg-black px-5 py-3 text-white"
          >
            Back to Home
          </button>

        </div>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-[#FF385C]"
          >
            airbnb
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold hover:shadow-md"
          >
            Back
          </button>

        </div>
      </header>


      {/* Page Content */}
      <main className="mx-auto max-w-6xl px-5 py-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          {listing.title}
        </h1>

        {/* Rating + Location */}
        <div className="mt-3 flex flex-wrap gap-3 text-sm">

          <span>
            ★ {listing.rating}
          </span>

          <span>•</span>

          <span className="underline">
            {listing.location}
          </span>

        </div>


        {/* Main Image */}
        <div className="mt-8 overflow-hidden rounded-2xl">

          <img
            src={listing.image}
            alt={listing.title}
            className="h-[300px] w-full object-cover sm:h-[450px]"
          />

        </div>


        {/* Details */}
        <div className="mt-8 grid gap-10 md:grid-cols-3">

          {/* Description */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-semibold">
              About this place
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Enjoy a comfortable stay in this beautiful
              property. This home offers a great location,
              modern facilities and everything you need
              for a relaxing trip.
            </p>


            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-xl border p-4">
                <p className="font-semibold">
                  Guest favorite
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Highly rated
                </p>
              </div>


              <div className="rounded-xl border p-4">
                <p className="font-semibold">
                  Great location
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Easy access
                </p>
              </div>


              <div className="rounded-xl border p-4">
                <p className="font-semibold">
                  Clean home
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Comfortable
                </p>
              </div>

            </div>

          </div>


          {/* Reservation Card */}
          <div className="h-fit rounded-2xl border border-gray-200 p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>
                <span className="text-xl font-semibold">
                  ${listing.price}
                </span>

                <span className="text-gray-500">
                  {" "}night
                </span>
              </div>

              <span className="text-sm">
                ★ {listing.rating}
              </span>

            </div>


            <button
              type="button"
              onClick={() => {
                alert("Reservation feature coming soon!")
              }}
              className="mt-6 w-full rounded-lg bg-[#FF385C] py-3 font-semibold text-white transition hover:bg-[#E31C5F]"
            >
              Reserve
            </button>

          </div>

        </div>

      </main>
    </div>
  )
}


// ==================== APP ====================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Property Details */}
        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App