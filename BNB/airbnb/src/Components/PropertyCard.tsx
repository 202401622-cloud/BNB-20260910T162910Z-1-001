import type { Listing } from "../listingsData"

interface PropertyCardProps {
  listing: Listing
  onClick: () => void
}

function PropertyCard({
  listing,
  onClick,
}: PropertyCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        
        <img
          src={listing.image}
          alt={listing.title}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Heart */}
        <button
          onClick={(event) => {
            event.stopPropagation()
          }}
          aria-label="Add to favorites"
          className="absolute right-3 top-3 text-2xl text-white drop-shadow-lg transition hover:scale-110"
        >
          ♡
        </button>
      </div>

      {/* Information */}
      <div className="mt-3">
        
        <div className="flex items-start justify-between gap-3">
          
          <div className="min-w-0">
            
            <h3 className="truncate font-semibold text-gray-900">
              {listing.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {listing.location}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Available now
            </p>

            <p className="mt-2 text-sm text-gray-700">
              <span className="font-semibold text-gray-900">
                ${listing.price}
              </span>{" "}
              night
            </p>

          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-1 text-sm">
            <span>★</span>
            <span>{listing.rating}</span>
          </div>

        </div>
      </div>
    </article>
  )
}

export default PropertyCard