import React from 'react';

export default function TodoCard({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="group flex items-center gap-4 px-2 py-2 pl-4 bg-white rounded-full mb-3 shadow-sm hover:shadow-md transition-all duration-200">
            {/* Status Circle (Turquoise) */}
            <button
                onClick={() => toggleComplete(todo.id, todo.completed)}
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${todo.completed
                    ? 'bg-[#8CD4CC]' // Turquoise color from image
                    : 'bg-[#8CD4CC]' // Always turquoise, maybe opacity change or checkmark? Image shows solid turquoise.
                    }`}
            >
                {/* The image shows solid circles. Let's assume click marks it. 
                    If completed, maybe we show a check or just keep it solid?
                    The image shows consistent colors. Let's stick to the visual:
                    Turquoise circle on left.
                */}
            </button>

            {/* Content */}
            <div className="flex-1 min-w-0 px-2">
                {/* For this design, we might want to hide the text description if it makes the pill too tall, 
                   but the pill usually expands. The image shows empty bars or bars with text. 
                   Let's keep text visible but styled cleanly. */}
                <h3 className={`text-lg font-medium truncate transition-all duration-200 ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
                    }`}>
                    {todo.title}
                </h3>
            </div>

            {/* Delete Circle (Red) */}
            <button
                onClick={() => deleteTodo(todo.id)}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C1121F] hover:bg-[#A00F1A] flex items-center justify-center transition-colors duration-200"
                title="Delete task"
            >
                {/* Image shows solid red circle. No icon visible in the mockup, but usually a user needs a visual cue. 
                    I'll leave it empty to match the "clean" abstract look of the Canva design or add a subtle White X if needed.
                    For now, perfectly matching the "Solid Red Dot" look.
                */}
            </button>
        </div>
    );
}
