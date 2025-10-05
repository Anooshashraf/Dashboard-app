// 'use client';
// import { useAuth } from '../components/AuthProvider';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import Link from 'next/link';
// import { DashboardCard } from './types';

// const dashboardCards: DashboardCard[] = [
//   {
//     title: 'RMA Dashboard',
//     description: 'Return Merchandise Authorization reports and analytics',
//     href: '/dashboard/rma',
//     icon: '📊',
//     color: 'from-blue-500 to-blue-600',
//     bgGradient: 'from-blue-50 to-blue-100',
//     borderColor: 'border-blue-200'
//   },
//   {
//     title: 'Audit Dashboard',
//     description: 'Audit reports and compliance tracking',
//     href: '/dashboard/audit',
//     icon: '📋',
//     color: 'from-green-500 to-green-600',
//     bgGradient: 'from-green-50 to-green-100',
//     borderColor: 'border-green-200'
//   },
//   {
//     title: 'Ordering Dashboard',
//     description: 'Order management and tracking reports',
//     href: '/dashboard/ordering',
//     icon: '🛒',
//     color: 'from-purple-500 to-purple-600',
//     bgGradient: 'from-purple-50 to-purple-100',
//     borderColor: 'border-purple-200'
//   },
//   {
//     title: 'ISR Reports',
//     description: 'Internal Service Reports and analytics',
//     href: '/dashboard/isr',
//     icon: '📈',
//     color: 'from-orange-500 to-orange-600',
//     bgGradient: 'from-orange-50 to-orange-100',
//     borderColor: 'border-orange-200'
//   }
// ];

// export default function Home() {
//   const { isAuthenticated, isLoading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, isLoading, router]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="flex flex-col items-center space-y-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
//             <span className="text-3xl">🚀</span>
//           </div>
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Company Dashboards
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Access your department reports and analytics in one centralized platform
//           </p>
//         </div>

//         {/* Dashboard Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {dashboardCards.map((card, index) => (
//             <Link
//               key={card.title}
//               href={card.href}
//               className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
//             >
//               <div className={`bg-gradient-to-br ${card.bgGradient} rounded-3xl shadow-xl p-8 h-full border-2 ${card.borderColor} group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
//                 {/* Background Pattern */}
//                 <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
//                   <div className="w-full h-full bg-current rounded-full -translate-y-16 translate-x-16"></div>
//                 </div>

//                 <div className="relative z-10">
//                   <div className="flex items-center mb-6">
//                     <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
//                       <span className="text-2xl text-white">{card.icon}</span>
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
//                         {card.title}
//                       </h3>
//                       <div className={`w-12 h-1 bg-gradient-to-r ${card.color} rounded-full mt-2 group-hover:w-16 transition-all duration-300`}></div>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed text-lg mb-4">
//                     {card.description}
//                   </p>
//                   <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
//                     <span className="font-medium">View Dashboard</span>
//                     <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Stats Footer */}
//         <div className="max-w-4xl mx-auto mt-16">
//           <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
//                 <div className="text-gray-600">Dashboard Modules</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
//                 <div className="text-gray-600">Uptime</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
//                 <div className="text-gray-600">Access</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';
import { useAuth } from '../components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

const dashboardCards = [
  {
    title: 'RMA Dashboard',
    description: 'Return Merchandise Authorization reports and analytics',
    href: '/dashboard/rma',
    icon: '📊',
    color: 'card-blue'
  },
  {
    title: 'Audit Dashboard',
    description: 'Audit reports and compliance tracking',
    href: '/dashboard/audit',
    icon: '📋',
    color: 'card-green'
  },
  {
    title: 'Ordering Dashboard',
    description: 'Order management and tracking reports',
    href: '/dashboard/ordering',
    icon: '🛒',
    color: 'card-purple'
  },
  {
    title: 'ISR Reports',
    description: 'Internal Service Reports and analytics',
    href: '/dashboard/isr',
    icon: '📈',
    color: 'card-orange'
  }
];

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
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
            <div className="main">Company Dashboards</div>
            <div className="sub">Access your department reports and analytics</div>
          </div>
        </div>
      </header>

      <main className="main-area">
        {/* Dashboard Cards Grid */}
        <section className="dashboard-grid">
          {dashboardCards.map((card, index) => (
            <Link key={card.title} href={card.href} className="dashboard-card-link">
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