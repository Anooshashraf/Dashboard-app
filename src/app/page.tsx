'use client';
import { useAuth } from '../components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  ClipboardCheck,
  ShoppingCart,
  TrendingUp
} from 'lucide-react';
import { DashboardCard } from './types';

const dashboardCards: DashboardCard[] = [
  {
    title: 'RMA Dashboard',
    description: 'Return Merchandise Authorization reports and analytics',
    href: '/dashboard/rma',
    icon: BarChart3,
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    title: 'Audit Dashboard',
    description: 'Audit reports and compliance tracking',
    href: '/dashboard/audit',
    icon: ClipboardCheck,
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    title: 'Ordering Dashboard',
    description: 'Order management and tracking reports',
    href: '/dashboard/ordering',
    icon: ShoppingCart,
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    title: 'ISR Reports',
    description: 'Internal Service Reports and analytics',
    href: '/dashboard/isr',
    icon: TrendingUp,
    color: 'bg-orange-500 hover:bg-orange-600'
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Company Dashboards
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access your department reports and analytics in one centralized platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {dashboardCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="block transform transition-transform hover:scale-105 focus:scale-105 focus:outline-none"
            >
              <div className={`${card.color} rounded-xl shadow-lg p-6 text-white h-full transition-colors duration-200`}>
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-blue-100 opacity-90 leading-relaxed">{card.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}