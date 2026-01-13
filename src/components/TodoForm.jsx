import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        addTodo({
            title,
            description,
            completed: false,
            createdAt: new Date(),
        });

        setTitle('');
        setDescription('');
        setIsExpanded(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 mx-4">
            <div className={`bg-[#1E1E1E] rounded-2xl border transition-all duration-200 ${isExpanded ? 'shadow-lg border-blue-500/50 ring-1 ring-blue-500/20' : 'border-gray-800'
                }`}>
                <div className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Add a task..."
                            className="w-full bg-transparent text-base font-normal text-white placeholder-gray-500 border-none focus:ring-0 p-0"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onFocus={() => setIsExpanded(true)}
                        />
                    </div>

                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="ml-8">
                            <textarea
                                placeholder="Details"
                                className="w-full bg-transparent text-sm text-gray-400 placeholder-gray-600 border-none focus:ring-0 p-0 resize-none"
                                rows="2"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div className="flex justify-end gap-3 mt-3">
                                <button
                                    type="button"
                                    onClick={() => setIsExpanded(false)}
                                    className="px-6 py-2 text-sm font-bold text-black bg-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={!title.trim()}
                                    className="px-6 py-2 text-sm font-bold text-black bg-gray-300 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
