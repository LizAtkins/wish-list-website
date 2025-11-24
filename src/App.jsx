import './App.css'
import gifts from './data/gifts.json'
import { categories } from './data/categories'
import CategorySection from './components/CategorySection'

function App() {
  const groupedCategories = categories
    .map((category) => {
      const items = gifts.filter((gift) => {
        const giftCategories = Array.isArray(gift.categories)
          ? gift.categories
          : [gift.category]
        return giftCategories.includes(category.slug)
      })
      return { ...category, items }
    })
    .filter((category) => category.items.length > 0)

  return (
    <div className="app-shell">
      <div className="orb orb--one" aria-hidden />
      <div className="orb orb--two" aria-hidden />
      <div className="sticker sticker--heart" aria-hidden />
      <div className="sticker sticker--star" aria-hidden />
      <div className="sticker sticker--sparkle" aria-hidden />

      <header className="hero">
        <p className="hero__eyebrow">2025 Holiday Wishlist</p>
        <h1 className="hero__title">My Wish List</h1>
        <nav className="hero__nav" aria-label="Category navigation">
          <ul>
            {groupedCategories.map((category) => (
              <li key={category.slug}>
                <a href={`#${category.slug}`}>
                  <span className="hero__nav-icon">{category.icon}</span>
                  <span className="hero__nav-label">{category.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {groupedCategories.map((category) => (
          <CategorySection
            key={category.slug}
            category={category}
            items={category.items}
          />
        ))}
      </main>

      <footer className="site-footer">
        <p>
          Thanks for shopping for me! Ping me if something goes out of stock or
          you find an even dreamier dupe.
        </p>
      </footer>
    </div>
  )
}

export default App
