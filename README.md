
# 🔐 Vite + React Auth System

A simple authentication system built with **Vite + React**, using:

- ✅ Redux Toolkit for state management
- ✅ LocalStorage for session persistence
- ✅ React Router for routing
- ✅ React Hook Form + Yup for form validation
- ✅ Tailwind CSS for styling
- ✅ Toast notifications with react-toastify

---

## 📁 Project Structure

```
src/
├── app/               # Redux store setup
│   └── store.js
├── components/        # Shared components
│   ├── ProtectedRoute.jsx
│   ├── Loading.jsx
├── features/
│   └── auth/
│       └── authSlice.js
├── layouts/           # Page layouts
│   ├── AuthLayout.jsx
│   └── UserLayout.jsx
├── pages/             # Pages/views
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Dashboard.jsx
├── App.jsx            # Routing logic
└── main.jsx           # App entry point
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/vite-auth-app.git
cd vite-auth-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

---

## 🧠 Features

### 🛠 Auth System
- Signup with email + password
- Login with stored credentials
- Protected dashboard (requires auth)
- Logout + session persistence
- Toast notifications on success/error

### 🧾 Validation
- Email must be valid
- Password must be at least 6 characters

### 🛡 Route Protection
- Users cannot access `/dashboard` if not logged in
- Redirects to `/login` if unauthenticated

### 💾 State Management & Persistence
- Redux Toolkit manages auth state
- LocalStorage stores:
  - all registered users under key `users`:
    ```json
    [
      { "email": "test@example.com", "password": "123456" }
    ]
    ```
  - currently logged-in user under key `authUser`

---

## 🔑 Default Pages

| Route         | Description                      |
|---------------|----------------------------------|
| `/`           | Home page with login/signup CTA  |
| `/login`      | Login form                       |
| `/signup`     | Signup form                      |
| `/dashboard`  | Protected user page              |

---

## ✨ Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📸 Screenshots

> You can add some screenshots of:
> - Signup page
> - Login page
> - Dashboard (after login)

---

## 📦 Production Build

```bash
npm run build
```

---

## 🧹 Future Improvements

- Hash passwords before saving (never store plain text)
- Integrate real authentication (Firebase, Supabase, or Node.js backend)
- Add forgot/reset password functionality
- Add profile & user roles
- Use JWT tokens for secure session management

---

## 📄 License

MIT License — free for personal and commercial use.

---

## 🙌 Author

Made by [Keval Satani](https://github.com/keval1707/) — feel free to contribute or fork!

