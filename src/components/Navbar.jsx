import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const getLinkClasses = (path) => {
        const isActive = location.pathname === path;
        return `px-6 py-2 rounded-full text-lg font-medium transition-all duration-200 ${isActive
            ? 'bg-white text-black shadow-md'
            : 'bg-transparent text-gray-500 hover:bg-white/50 hover:text-gray-800'
            }`;
    };

    return (
        <nav className="pt-6 pb-2">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-8">
                    {/* Brand / Title */}
                    <div className="text-4xl font-bold text-white tracking-tight font-['Outfit']">
                        Sarcini
                    </div>

                    {/* Navigation Pills */}
                    <div className="flex gap-2">
                        <Link to="/" className={getLinkClasses('/')}>
                            Task-uri
                        </Link>
                        <Link to="/active" className={getLinkClasses('/active')}>
                            Active
                        </Link>
                        <Link to="/completed" className={getLinkClasses('/completed')}>
                            Complete
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
