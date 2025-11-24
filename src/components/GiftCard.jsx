const GiftCard = ({ gift, categoryTitle }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: gift.currency ?? 'USD',
    maximumFractionDigits: 0,
  })

  const baseUrl = import.meta.env.BASE_URL
  const photoPath = gift.photo.startsWith('/') ? gift.photo.slice(1) : gift.photo
  const imageUrl = baseUrl + photoPath

  return (
    <article className="gift-card">
      <div className="gift-card__media">
        <img src={imageUrl} alt={gift.name} loading="lazy" />
        <span className="gift-card__store">{gift.store}</span>
      </div>
      <div className="gift-card__body">
        <div className="gift-card__heading">
          <h3>{gift.name}</h3>
          <p className="gift-card__price">{formatter.format(gift.price)}</p>
        </div>
        {gift.note && <p className="gift-card__note">{gift.note}</p>}
        <div className="gift-card__meta">
          {gift.size && (
            <span className="gift-card__badge">
              Size <strong>{gift.size}</strong>
            </span>
          )}
          <span className="gift-card__badge">
            Category <strong>{categoryTitle}</strong>
          </span>
        </div>
      </div>
      <a
        className="gift-card__cta"
        href={gift.url}
        target="_blank"
        rel="noreferrer"
      >
        View item
      </a>
    </article>
  )
}

export default GiftCard

