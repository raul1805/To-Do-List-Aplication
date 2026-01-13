import React from 'react';

export default function About() {
    return (
        <div className="max-w-xl mx-auto pt-10 px-6">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-light text-white mb-2">
                    Tasks
                </h1>
                <p className="text-gray-500">Simple. Clean. Focused.</p>
            </div>

            <div className="bg-[#1E1E1E] rounded-2xl p-6 border border-gray-800">
                <h2 className="text-lg font-medium text-gray-200 mb-4">Features</h2>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Dark Mode Interface
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Google Tasks Styling
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Firebase Sync
                    </li>
                </ul>
            </div>

            <div className="mt-8 text-center text-xs text-gray-600">
                Replicating the Google Tasks mobile aesthetic on web.
            </div>
        </div>
    );
}
