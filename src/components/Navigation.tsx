'use client';
import { useAuth } from './AuthProvider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
    const { isAuthenticated, logout } = useAuth();
    const pathname = usePathname();

    if (!isAuthenticated || pathname === '/login') return null;

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
                    Company Dashboards
                </Link>
                <div className="flex items-center space-x-4">
                    <span className="text-blue-200">Welcome, Admin</span>
                    <button
                        onClick={logout}
                        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition duration-200 font-medium"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}