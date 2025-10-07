"use client";
import { useAuth } from "../components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const dashboardCards = [
  {
    title: "RMA Dashboard",
    description: "Return Merchandise Authorization reports and analytics",
    href: "/dashboard/rma",
    icon: "📊",
    color: "card-blue",
  },
  {
    title: "Audit Dashboard",
    description: "Audit reports and compliance tracking",
    href: "/dashboard/audit",
    icon: "📋",
    color: "card-green",
  },
  {
    title: "Ordering Dashboard",
    description: "Order management and tracking reports",
    href: "/dashboard/ordering",
    icon: "🛒",
    color: "card-purple",
  },
  {
    title: "ISR Reports",
    description: "Internal Service Reports and analytics",
    href: "/dashboard/isr",
    icon: "📈",
    color: "card-orange",
  },
];

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="app">
      {/* Header */}
      <header className="topbar">
        <div className="brand">
          <div className="logo">🚀</div>
          <div className="title">
            <div className="main">Inventor Analytics</div>
            <div className="sub">
              Access your department reports and analytics
            </div>
          </div>
        </div>
      </header>

      <main className="main-area">
        {/* Dashboard Cards Grid */}
        <section className="dashboard-grid">
          {dashboardCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className="dashboard-card-link"
            >
              <div className={`dashboard-card ${card.color}`}>
                <div className="card-icon">{card.icon}</div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <div className="card-arrow">→</div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Stats Footer */}
        <div className="stats-footer">
          <div className="kpi-row">
            <div className="kpi">
              <div className="label">Dashboard Modules</div>
              <div className="value">4</div>
            </div>
            <div className="kpi">
              <div className="label">System Uptime</div>
              <div className="value">100%</div>
            </div>
            <div className="kpi">
              <div className="label">Access</div>
              <div className="value">24/7</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
