return (
  <div
    ref={menuRef}
    role="menu"
    aria-label="Listing actions"
    style={{
      position: "absolute",
      top: position?.top ?? "100%",
      right: position?.right ?? 0,
      left: position?.left ?? "auto",
      zIndex: 50,
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E5E5",
      borderRadius: "10px",
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
      padding: "30px",
      minWidth: "188px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    }}
  >
    {items.map(({ id, label, Icon, danger }) => {
      const isHovered = hovered === id;
      const textColor = danger ? "#EA0000" : "#0E0D0C";
      const hoverBg = danger ? "rgba(234, 0, 0, 0.04)" : "#F5F5F5";

      return (
        <button
          key={id}
          role="menuitem"
          onClick={() => handleAction(id)}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 20px",      // ← updated
            borderRadius: "7px",
            border: "none",
            backgroundColor: isHovered ? hoverBg : "transparent",
            color: textColor,
            cursor: "pointer",
            width: "100%",
            textAlign: "left",
            transition: "background-color 0.12s ease",
            fontFamily: "'Rethink Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "1",
          }}
        >
          <Icon
            size={17}
            strokeWidth={1.6}
            style={{ flexShrink: 0, color: textColor }}
          />
          {label}
        </button>
      );
    })}
  </div>
);