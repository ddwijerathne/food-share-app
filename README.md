# 🍲 FoodShare

A high-performance, community-driven web application built with **Next.js 16** and **Supabase**. This project leverages the latest advancements in the React ecosystem to provide a seamless experience for sharing surplus food items.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-DB%20%26%20Storage-3ECF8E?style=for-the-badge&logo=supabase)

---

## 🚀 Modern Tech Stack

This project is built using "Bleeding Edge" technologies:

- **Framework:** [Next.js 16.1.6](https://nextjs.org/) (App Router)
- **Library:** [React 19.2.3](https://react.dev/)
- **Compiler:** [React Compiler](https://react.dev/learn/react-compiler) (Enabled for automatic memoization)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & Auth:** [Supabase](https://supabase.com/) with `@supabase/ssr`
- **Quality Control:** [ESLint 9](https://eslint.org/) (Flat Config)

---

## ✨ Key Features

* **Real-time Gallery:** A responsive 4-column grid displaying shared food items directly from PostgreSQL.
* **Large File Support:** Custom Server Action configuration allowing image uploads up to **25MB**.
* **Instant Preview:** Client-side Blob URL generation for immediate image feedback.
* **Optimized Rendering:** Utilizing React 19 Server Components for faster initial page loads.
* **Custom Error Handling:** A professional "Dish Not Found" 404 experience for mismatched URLs.

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/ddwijerathne/food-share-app.git](https://github.com/ddwijerathne/food-share-app.git)
cd food-share-app

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Configuration

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

```

### 4. Run the Development Server

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

* `app/` - Next.js 16 App Router (Pages, Layouts, and Custom 404).
* `app/actions/` - Type-safe Server Actions for database and storage mutations.
* `app/share/` - The dedicated food submission interface.
* `utils/supabase/` - SSR-ready Supabase clients for server and client contexts.
* `components/` - Reusable UI components styled with Tailwind v4 utility classes.

---

## 🛡️ Configuration Notes

The `next.config.ts` has been optimized for:

* **`bodySizeLimit: '25mb'`**: Necessary for high-resolution food photography.
* **`remotePatterns`**: Strict security rules for image optimization via Supabase storage.
* **`reactCompiler`**: Activated to eliminate the need for manual `useMemo` or `useCallback`.

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

---

## 👨‍💻 Author

**Daksitha Wijerathne** *Full Stack Developer* [GitHub](https://github.com/ddwijerathne) | [LinkedIn](https://www.linkedin.com/in/dhanuja-wijerathne/)