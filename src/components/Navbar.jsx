function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#111",
      color: "white"
    }}>
      
      {/* Logo */}
      <h2>ShopHub</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        style={{
          padding: "8px",
          width: "300px",
          borderRadius: "5px",
          border: "none"
        }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "15px" }}>
        <button>Login</button>
        <button>Cart</button>
      </div>

    </nav>
  );
}

export default Navbar