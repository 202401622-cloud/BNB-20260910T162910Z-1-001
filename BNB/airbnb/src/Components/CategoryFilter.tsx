interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  "All",
  "Beach",
  "City",
  "Mountain",
  "Luxury",
  "Countryside",
]

function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl overflow-x-auto px-5">
        <div className="flex min-w-max gap-8 py-5">
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`border-b-2 pb-3 text-sm font-medium transition ${
                selectedCategory === category
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}

        </div>
      </div>
    </section>
  )
}

export default CategoryFilter