// App.jsx
import React, { useState } from "react";
import {
  Building2,
  Rocket,
  Wallet,
  Smartphone,
  ShoppingCart,
  Store,
  Layers,
  LayoutGrid,
  BarChart3,
  Cloud,
  Globe,
  Sparkles,
  Play,
  Lightbulb,
  Heart,
  Plane,
  ShoppingBag,
  Umbrella,
  Package,
  Users,
  CreditCard,
  Menu as MenuIcon,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// ------- DATA --------
const navbarItems = [
  { menu: "Products", url: "/products" },
  {
    menu: "Solutions",
    sections: [
      {
        title: "BY STAGE",
        items: [
          {
            label: "Enterprises",
            icon: "building",
            url: "/solutions/enterprises",
          },
          {
            label: "Startups",
            icon: "rocket",
            url: "/solutions/startups",
          },
        ],
      },
      {
        title: "BY USE CASE",
        items: [
          { label: "Crypto", icon: "crypto", url: "/solutions/crypto" },
          {
            label: "In-app payments",
            icon: "mobile",
            url: "/solutions/in-app-payments",
          },
          { label: "E-commerce", icon: "cart", url: "/solutions/ecommerce" },
          {
            label: "Marketplaces",
            icon: "store",
            url: "/solutions/marketplaces",
          },
          {
            label: "Embedded finance",
            icon: "layers",
            url: "/solutions/embedded-finance",
          },
          { label: "Platforms", icon: "grid", url: "/solutions/platforms" },
          {
            label: "Finance automation",
            icon: "chart",
            url: "/solutions/finance-automation",
          },
          { label: "SaaS", icon: "cloud", url: "/solutions/saas" },
          {
            label: "Global businesses",
            icon: "globe",
            url: "/solutions/global-businesses",
          },
        ],
      },
      {
        title: "BY INDUSTRY",
        items: [
          { label: "AI companies", icon: "ai", url: "/solutions/ai-companies" },
          {
            label: "Media and entertainment",
            icon: "play",
            url: "/solutions/media-entertainment",
          },
          {
            label: "Creator economy",
            icon: "creator",
            url: "/solutions/creator-economy",
          },
          { label: "Non-profits", icon: "heart", url: "/solutions/non-profits" },
          {
            label: "Hospitality, travel and leisure",
            icon: "plane",
            url: "/solutions/hospitality-travel",
          },
          { label: "Retail", icon: "bag", url: "/solutions/retail" },
          { label: "Insurance", icon: "umbrella", url: "/solutions/insurance" },
        ],
      },
      {
        title: "ECOSYSTEM",
        items: [
          {
            label: "Stripe App Marketplace",
            icon: "marketplace",
            external: true,
            url: "https://stripe.com/apps",
          },
          {
            label: "Partners",
            icon: "partners",
            url: "/partners",
          },
        ],
      },
    ],
  },
  { menu: "Developers", url: "/developers" },
  { menu: "Resources", url: "/resources" },
  { menu: "Pricing", url: "/pricing" },
];

const iconMap = {
  building: Building2,
  rocket: Rocket,
  crypto: Wallet,
  mobile: Smartphone,
  cart: ShoppingCart,
  store: Store,
  layers: Layers,
  grid: LayoutGrid,
  chart: BarChart3,
  cloud: Cloud,
  globe: Globe,
  ai: Sparkles,
  play: Play,
  creator: Lightbulb,
  heart: Heart,
  plane: Plane,
  bag: ShoppingBag,
  umbrella: Umbrella,
  marketplace: Package,
  partners: Users,
  "credit-card": CreditCard,
};

// ------- APP --------
function App() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileScreen, setMobileScreen] = useState("root"); // "root" | "solutions"

  const solutionsItem = navbarItems.find((i) => i.menu === "Solutions");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(90deg,#ff7a18 0%,#e52e71 40%,#6b5bff 100%)",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "12px 0",          // no side padding
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr", // logo left, nav center, ctas right
            alignItems: "center",
            color: "#fff",
          }}
        >
          {/* Left: logo aligned to very left */}
          <div style={{ justifySelf: "start", paddingLeft: 32 }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>Logo</span>
          </div>

          {/* Center: nav */}
          <nav
            className="desktop-nav"
            style={{
              justifySelf: "center",
              display: "flex",
              alignItems: "center",
              gap: 32,
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            {navbarItems.map((item) => {
              if (item.menu === "Solutions") {
                return (
                  <div
                    key={item.menu}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "pointer",
                      }}
                    >
                      {item.menu}
                      <ChevronDown size={16} />
                    </button>

                    {/* Mega menu panel */}
                    {isSolutionsOpen && solutionsItem?.sections && (
                      <div
                        style={{
                          position: "absolute",
                          top: 40,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 760,
                          background: "#ffffff",
                          borderRadius: 12,
                          boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
                          padding: "20px 24px",
                          color: "#1f2933",
                        }}
                      >
                        {/* little triangle */}
                        <div
                          style={{
                            position: "absolute",
                            top: -10,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 18,
                            height: 18,
                            background: "#ffffff",
                            borderRadius: 4,
                            boxShadow: "0 -2px 4px rgba(15,23,42,0.08)",
                            transformOrigin: "center",
                            rotate: "45deg",
                          }}
                        />

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 24,
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {solutionsItem.sections.map((section, sIndex) => (
                            <div
                              key={section.title}
                              style={{
                                paddingTop: sIndex === 0 ? 0 : 16,
                                borderTop:
                                  sIndex === 0 ? "none" : "1px solid #e5e7eb",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  letterSpacing: "0.12em",
                                  color: "#6b7280",
                                  textTransform: "uppercase",
                                  marginBottom: 12,
                                }}
                              >
                                {section.title}
                              </div>

                              {/* two column grid */}
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                                  columnGap: 40,
                                  rowGap: 10,
                                }}
                              >
                                {section.items.map((it) => {
                                  const Icon = iconMap[it.icon];
                                  return (
                                    <a
                                      key={it.label}
                                      href={it.url}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        textDecoration: "none",
                                        color: "#1f2933",
                                        fontSize: 14,
                                      }}
                                    >
                                      <span
                                        style={{
                                          width: 20,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "#4f46e5",
                                        }}
                                      >
                                        {Icon && <Icon size={18} />}
                                      </span>
                                      <span
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 4,
                                        }}
                                      >
                                        {it.label}
                                        {it.external && (
                                          <ExternalLink
                                            size={14}
                                            color="#9ca3af"
                                          />
                                        )}
                                      </span>
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // normal link
              return (
                <a
                  key={item.menu}
                  href={item.url}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {item.menu}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div
            className="desktop-ctas"
            style={{
              justifySelf: "end",
              paddingRight: 180,
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontSize: 14,
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Sign in <ChevronRight size={16} />
            </button>
            <button
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: "none",
                background: "#ffffff",
                color: "#d97706",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Contact sales <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile hamburger (hidden by default; you can show via CSS media query if needed) */}
          <button
            className="mobile-toggle"
            type="button"
            onClick={() => {
              setIsMobileOpen(true);
              setMobileScreen("root");
            }}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#fff",
            }}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </header>

      {/* just some height so you can see background */}
      <div style={{ height: "400px" }} />

      {/* Simple mobile menu (optional) */}
      {isMobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.7)",
            zIndex: 30,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 320,
              maxWidth: "100%",
              background: "#fff",
              padding: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div style={{ fontWeight: 600 }}>Menu</div>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {mobileScreen === "root" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {navbarItems.map((item) =>
                  item.menu === "Solutions" ? (
                    <button
                      key={item.menu}
                      type="button"
                      onClick={() => setMobileScreen("solutions")}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 4px",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <span>{item.menu}</span>
                      <ChevronRight size={18} />
                    </button>
                  ) : (
                    <a
                      key={item.menu}
                      href={item.url}
                      style={{
                        padding: "8px 4px",
                        textDecoration: "none",
                        color: "#111827",
                      }}
                    >
                      {item.menu}
                    </a>
                  )
                )}
              </div>
            )}

            {mobileScreen === "solutions" && solutionsItem?.sections && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  height: "100%",
                }}
              >
                <button
                  type="button"
                  onClick={() => setMobileScreen("root")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    marginBottom: 8,
                  }}
                >
                  <ChevronRight size={16} style={{ transform: "rotate(180deg)" }} />
                  Back
                </button>

                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    paddingRight: 4,
                  }}
                >
                  {solutionsItem.sections.map((section) => (
                    <div key={section.title} style={{ marginBottom: 12 }}>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#6b7280",
                          marginBottom: 6,
                        }}
                      >
                        {section.title}
                      </div>
                      {section.items.map((it) => {
                        const Icon = iconMap[it.icon];
                        return (
                          <a
                            key={it.label}
                            href={it.url}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              padding: "6px 0",
                              textDecoration: "none",
                              color: "#111827",
                              fontSize: 14,
                            }}
                          >
                            <span
                              style={{
                                width: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {Icon && <Icon size={18} />}
                            </span>
                            <span>{it.label}</span>
                            {it.external && (
                              <ExternalLink size={14} color="#9ca3af" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
