import GiftCard from './GiftCard'

const CategorySection = ({ category, items }) => (
  <section
    id={category.slug}
    className="category-section"
    style={{ '--accent-color': category.accent }}
  >
    <div className="category-section__header">
      <div className="category-section__icon">{category.icon}</div>
      <div>
        <p className="category-section__eyebrow">Category</p>
        <h2>{category.title}</h2>
        <p className="category-section__description">{category.description}</p>
      </div>
    </div>
    <div className="gift-grid">
      {items.map((gift) => (
        <GiftCard key={gift.id} gift={gift} categoryTitle={category.title} />
      ))}
    </div>
  </section>
)

export default CategorySection

