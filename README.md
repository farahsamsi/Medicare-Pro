# 🩺 Medicare Pro

A modern SaaS-based medical management platform where **Admins manage Doctors**, and **Doctors manage Assistants** — powered by **Next.js**, **Redux Toolkit**, **Tailwind CSS (DaisyUI)**, and **REST APIs**.

---

## 🚀 Features

### 🔑 Authentication

- Admin & Doctor login (token-based)

### 👨‍⚕️ Admin Panel

- Add, View, and Manage Doctors
- View subscription info & status
- Filter & sort doctors by expiry
- Create, manage and delete subscription plans

### 👩‍⚕️ Doctor Panel

- Add, Edit, and Delete Assistants
- View personal profile & subscription
- Doctor-only dashboard
- Manage schedule & patient modules _(planned)_

### 💳 Subscription System

- Add/Edit/Delete subscription plans (Admin only)
- View all available plans (Doctor)
- Dynamic status badge: `Active`, `Expiring Soon`, `Expired`

---

## 🛠️ Tech Stack

| Tech                                                         | Description                       |
| ------------------------------------------------------------ | --------------------------------- |
| [Next.js](https://nextjs.org/)                               | React Framework for SSR & routing |
| [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Data fetching and caching         |
| [Tailwind CSS](https://tailwindcss.com/)                     | Utility-first CSS framework       |
| [DaisyUI](https://daisyui.com/)                              | UI components built on Tailwind   |
| [React Icons](https://react-icons.github.io/react-icons/)    | Icon library integration          |

---

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/farahsamsi/Medicare-Pro.git
cd medicare-pro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Production build

```bash
npm run build
```

---

## 🔐 API Configuration

**Base URL:**

```txt
https://medicare-pro-backend.vercel.app/
```

**Token storage for protected routes:**

```js
localStorage.setItem("token", YOUR_TOKEN);
```

---

## ⭐️ Support & Feedback

If you find this project helpful, feel free to ⭐️ star the repo.
