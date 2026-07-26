# 📋 To-Do List Application - Modern Real-Time Task Management Web App

A sleek, modern, and minimalist web application designed for real-time task management and daily productivity. Inspired by the Google Tasks aesthetic, it features real-time cloud synchronization, interactive task creation, status filtering, and an ultra-responsive dark-mode user interface.

---

## ✨ Features

- **Task Management**: Create, view, complete, and delete tasks seamlessly with dynamic expanded form fields for task details.
- **Real-Time Cloud Synchronization**: Instant data persistence and live state updates powered by Firebase Cloud Firestore.
- **Dynamic Task Filtering**: Effortlessly organize your workflow by filtering tasks by status (**All Tasks**, **Active**, **Completed**).
- **Minimalist Dark UI**: Custom frameless dark theme styled with Tailwind CSS v4, smooth hover effects, and pill-shaped control elements.
- **Single-Page Application (SPA)**: Fast, uninterrupted client-side routing powered by React Router DOM.

---

## 🛠️ Technology Stack

- **Frontend Library**: React 19 (`react`, `react-dom`)
- **Build Tool & Dev Server**: Vite 7 (Fast HMR & Optimized Production Builds)
- **Styling & Design System**: Tailwind CSS v4 (`@tailwindcss/postcss`, `autoprefixer`)
- **Backend & Database**: Firebase Cloud Firestore 12 (Real-time NoSQL Data Sync)
- **Routing**: React Router DOM v7
- **Code Quality & Linting**: ESLint 9 with React Hooks & React Refresh rules

---

## 🚀 How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (Node Package Manager, installed automatically with Node.js)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/raul1805/To-Do-List-Aplication.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd To-Do-List-Aplication
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Open your browser and navigate to `http://localhost:5173` (or the local address displayed in your terminal).

---

## 📦 Build & Deployment

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally before deploying:

```bash
npm run preview
```

---

## 👨‍💻 About the Project

This project serves as a showcase for modern front-end web application development. It demonstrates clean React 19 architecture, component modularity, real-time Firebase Firestore data synchronization, single-page application routing, and a clean Google Tasks inspired minimalist dark UI styled with Tailwind CSS.
