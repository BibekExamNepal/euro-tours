# Euro Tours – Frontend Developer Task

Live Demo: [https://euro-tours.vercel.app/](https://euro-tours.vercel.app/)

Repository: [https://github.com/BibekExamNepal/euro-tours](https://github.com/BibekExamNepal/euro-tours)

---

## 📌 Project Overview

**Euro Tours** is a modern frontend application built as part of a **Frontend Developer Task – Figma UI Replication + API Integration**. The goal of this project is to replicate the provided Figma design as **pixel-perfectly as possible** and integrate the required REST APIs using modern frontend best practices.

This project demonstrates:

- Accurate UI implementation
- Clean and scalable architecture
- API integration with proper state handling
- Strong TypeScript usage
- Performance and UX optimizations

---

## 🎯 Objective

- Replicate the provided **Figma UI** with high visual accuracy
- Integrate only the APIs that are used in the Figma design
- Follow modern frontend engineering best practices
- Ensure scalability, performance, and maintainability

---

## 🎨 Design Reference

**Figma Design:**  
[https://www.figma.com/design/rkRVzFx2MWW134T97xZRGl/Euro-Tours--Copy-](https://www.figma.com/design/rkRVzFx2MWW134T97xZRGl/Euro-Tours--Copy-)

---

## 🔗 API Reference

**API Base URL:**  
[https://api.eurotour.pbinfosystems.com/api](https://api.eurotour.pbinfosystems.com/api)

**API Documentation (Swagger):**  
[https://api.eurotour.pbinfosystems.com/api-docs](https://api.eurotour.pbinfosystems.com/api-docs)

> ℹ️ Only the APIs used in the Figma design have been implemented. Other endpoints are intentionally ignored.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (mandatory)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form
- **Validation:** Zod
- **HTTP Client:** Axios (with interceptors)
- **State Management:** Zustand

---

## ✅ Functional Requirements Implemented

### 1. UI Replication

- Pixel-perfect implementation based on Figma
- Accurate spacing, typography, colors, and layout
- Fully responsive design
- Mobile-first approach

### 2. API Integration

- Integrated required APIs using **TanStack Query**
- Implemented:
    - Loading states
    - Error states
    - Empty states
- Query caching and optimized refetching
- Mutations handled cleanly

### 3. Form Handling & Validation

- Forms built with **React Hook Form**
- Schema-based validation using **Zod**
- Inline validation messages
- User-friendly error feedback

### 4. State Management

- **Zustand** used for:
    - Global UI state
    - Shared application state
- Avoided unnecessary prop drilling

### 5. Axios Configuration

- Centralized Axios instance
- Request & response interceptors
- Clean separation of API layer

### 6. Folder Structure & Architecture

- Modular and scalable folder structure
- Clear separation of concerns
- Reusable components and hooks

---

## ⚡ Performance Optimizations (Bonus)

- Code splitting with Next.js App Router
- Lazy-loaded components where applicable
- Memoization to prevent unnecessary re-renders
- Optimized API caching strategies

---

## 🌟 Bonus Features

- Skeleton loaders for better UX
- Accessibility-friendly components
- Clean UI transitions
- Scalable architecture for future expansion

---

## 📂 Environment Variables

Create a `.env.local` file using the example below:

```env
NEXT_PUBLIC_BASE_URL=https://api.eurotour.pbinfosystems.com/api
```

An example file is provided as:

```bash
.env.example
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BibekExamNepal/euro-tours.git
cd euro-tours
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Code Quality & Best Practices

- Strong TypeScript typing
- Clean and readable code
- Reusable and composable components
- SOLID principles where applicable
- No unnecessary re-renders
- Consistent naming conventions

---

## 📦 Deployment

**Deployed on:** Vercel  
**Live URL:** [https://euro-tours.vercel.app/](https://euro-tours.vercel.app/)

---

## 👨‍💻 Author

**Bibek Sah**

- GitHub: [https://github.com/BibekExamNepal](https://github.com/BibekExamNepal)
- Portfolio: [https://portfolio-frontend-five-omega.vercel.app/](https://portfolio-frontend-five-omega.vercel.app/)
- Email: sahbibek55@gmail.com

---

## 📄 License

This project is created for evaluation purposes only.

---

✅ **Thank you for reviewing this submission!**