import { useMemo, useState } from 'react'

type MenuItem = {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

const initialItems: MenuItem[] = [
  { id: 1, name: 'Chicken Burger', category: 'Burger', price: 180, stock: 12 },
  { id: 2, name: 'Beef Burger', category: 'Burger', price: 220, stock: 8 },
  { id: 3, name: 'French Fries', category: 'Sides', price: 100, stock: 20 },
  { id: 4, name: 'Milk Tea', category: 'Drinks', price: 40, stock: 30 },
]

export default function App() {
  const [items] = useState(initialItems)
  const [cart, setCart] = useState<Record<number, number>>({})
  const [search, setSearch] = useState('')

  const filteredItems = useMemo(
    () => items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
    [items, search],
  )

  const cartLines = items.filter((item) => (cart[item.id] ?? 0) > 0)
  const total = cartLines.reduce((sum, item) => sum + item.price * cart[item.id], 0)
  const orderCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)

  function addToCart(item: MenuItem) {
    setCart((current) => ({ ...current, [item.id]: (current[item.id] ?? 0) + 1 }))
  }

  function removeFromCart(itemId: number) {
    setCart((current) => {
      const next = { ...current }
      const quantity = (next[itemId] ?? 0) - 1
      if (quantity <= 0) delete next[itemId]
      else next[itemId] = quantity
      return next
    })
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">R</div>
        <div className="brand-name">Restaurant ERP</div>
        <p className="muted small">Learning prototype</p>
        <nav>
          <a className="nav-link active" href="#overview">Overview</a>
          <a className="nav-link" href="#pos">POS practice</a>
          <a className="nav-link" href="#inventory">Inventory preview</a>
        </nav>
        <div className="sidebar-note">Week 03<br />Frontend practice</div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div>
            <p className="eyebrow">OFFLINE RESTAURANT MANAGEMENT</p>
            <h1>Dashboard Preview</h1>
            <p className="muted">Your first React interface prototype.</p>
          </div>
          <span className="offline-pill"><span /> Offline prototype</span>
        </header>

        <section className="stats-grid">
          <article className="stat-card"><p>Today's sample sales</p><strong>৳ 12,450</strong><small>Static demo data</small></article>
          <article className="stat-card"><p>Sample orders</p><strong>38</strong><small>Static demo data</small></article>
          <article className="stat-card"><p>Menu items</p><strong>{items.length}</strong><small>In this prototype</small></article>
          <article className="stat-card"><p>Cart quantity</p><strong>{orderCount}</strong><small>Current practice cart</small></article>
        </section>

        <section className="content-grid" id="pos">
          <article className="panel menu-panel">
            <div className="panel-heading">
              <div><h2>Menu items</h2><p className="muted">Search and add sample food items.</p></div>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search food..." />
            </div>
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <button className="menu-item" key={item.id} onClick={() => addToCart(item)}>
                  <span className="food-category">{item.category}</span>
                  <strong>{item.name}</strong>
                  <span>৳ {item.price}</span>
                  <small>{item.stock} sample units in stock</small>
                  <span className="add-label">+ Add to cart</span>
                </button>
              ))}
              {filteredItems.length === 0 && <p className="muted">No matching menu items.</p>}
            </div>
          </article>

          <article className="panel cart-panel">
            <div className="panel-heading"><div><h2>Practice cart</h2><p className="muted">Not a real order or payment.</p></div></div>
            {cartLines.length === 0 ? <p className="empty-state">Add a menu item to begin.</p> : (
              <div className="cart-lines">
                {cartLines.map((item) => (
                  <div className="cart-line" key={item.id}>
                    <div><strong>{item.name}</strong><small>{cart[item.id]} × ৳ {item.price}</small></div>
                    <div className="quantity-actions">
                      <button onClick={() => removeFromCart(item.id)} aria-label={`Remove one ${item.name}`}>−</button>
                      <span>{cart[item.id]}</span>
                      <button onClick={() => addToCart(item)} aria-label={`Add one ${item.name}`}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="total-row"><span>Sample total</span><strong>৳ {total.toFixed(2)}</strong></div>
            <button className="clear-button" onClick={() => setCart({})}>Clear practice cart</button>
          </article>
        </section>

        <section className="panel inventory-preview" id="inventory">
          <h2>Inventory preview</h2>
          <p className="muted">This week is for frontend practice. Stock is sample data only; no database is connected yet.</p>
          <div className="inventory-row"><span>Chicken Burger</span><span>12 units</span><span className="stock-ok">Available</span></div>
          <div className="inventory-row"><span>Beef Burger</span><span>8 units</span><span className="stock-ok">Available</span></div>
          <div className="inventory-row"><span>French Fries</span><span>20 units</span><span className="stock-ok">Available</span></div>
        </section>
        <footer>Offline Restaurant ERP · Week 03 learning prototype · No cloud connection</footer>
      </main>
    </div>
  )
}
