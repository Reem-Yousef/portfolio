import { Children } from "react";

export function DockIcon({ children, onClick, style }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 36, height: 36,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: "50%", cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Dock({ children }) {
  return (
    <div style={{
      display: "flex", flexDirection: "row", alignItems: "center",
      gap: 4, padding: "8px 16px",
      background: "rgba(15,15,25,0.85)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 999, boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    }}>
      {children}
    </div>
  );
}