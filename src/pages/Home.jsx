import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import TodoForm from '../components/TodoForm';
import TodoCard from '../components/TodoCard';

export default function Home({ filter }) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArr);
            setLoading(false);
        }, (error) => {
            console.error("Firebase error:", error);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const addTodo = async (todo) => {
        try {
            // Suprascriem createdAt cu serverTimestamp pentru o ordonare corecta
            await addDoc(collection(db, 'todos'), {
                ...todo,
                createdAt: serverTimestamp()
            });
            console.log("Task added successfully!");
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Error adding task. Check F12 Console.");
        }
    };

    const toggleComplete = async (id, currentStatus) => {
        await updateDoc(doc(db, 'todos', id), {
            completed: !currentStatus,
        });
    };

    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className="pt-6 pb-20">
            {/* Form is now top-level in the list flow */}
            <TodoForm addTodo={addTodo} />

            <div className="px-4 space-y-1">
                {loading ? (
                    <div className="flex justify-center p-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>
                    </div>
                ) : filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <TodoCard
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
                        <div className="mb-4">
                            <svg className="w-16 h-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-base font-medium text-gray-400">No tasks found</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
