# 🌊 Orange Waves

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
</p>

> **A visual chatbot maker using easy drag-and-drop nodes.**[cite: 1] 
> Build, customize, and manage conversational flows without writing a single line of code.[cite: 1]

**Orange Waves** is a modern SaaS platform designed to make chatbot creation accessible[cite: 1]. Built on top of a robust Next.js framework, it combines an intuitive visual builder with a full-featured administrative dashboard, subscription management, and user authentication[cite: 1].

---

## 🚀 Core Features

* **Visual Node Editor:** Design complex conversational logic using an easy drag-and-drop interface[cite: 1].
* **Full Authentication Flow:** Secure user registration, login, and email verification pipelines (`pages/auth/login.jsx`, `VerifyEmail.jsx`)[cite: 1].
* **Admin & Analytics Dashboard:** Monitor performance and manage apps with dedicated dashboard metrics (`AdminHeader.jsx`, `StatCard.jsx`, `AppTable.jsx`)[cite: 1].
* **Integrated Billing:** Seamless subscription handling and credit card management out of the box (`billing.jsx`, `NewSubscriptionPage.jsx`, `CreditCard.jsx`)[cite: 1].
* **Deep Customization:** Personalize chatbot aesthetics directly from the dashboard using integrated styling tools (`ColorPicker.jsx`)[cite: 1].

---

## 💻 Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) (`next.config.js`)[cite: 1] |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) (`tailwind.config.js`, `postcss.config.js`)[cite: 1] |
| **Package Manager** | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white) (`yarn.lock`)[cite: 1] |
| **Linting** | `eslint` (`.eslintrc.json` utilizing `next/core-web-vitals`)[cite: 1] |

---

## 📂 Project Structure Overview

The repository is organized following Next.js best practices to separate UI components from business logic and page routing[cite: 1]:

* **`/pages`**: Contains the application routes, including the main dashboard (`index.jsx`), app creation (`createApp.jsx`), and dedicated sub-directories for `/auth` and `/Subscription`[cite: 1].
* **`/components`**: Reusable UI elements building the dashboard and tools (e.g., `Sidebar.jsx`, `Navbar.jsx`, `ColorPicker.jsx`)[cite: 1].
* **`/services`**: Core business logic and external communications, including `user.service.js` and `alert.service.js`[cite: 1].
* **`/helpers`**: Utility functions for data handling, API wrappers (`fetch-wrapper.js`), and form validation (`form-verifiers.js`)[cite: 1].
* **`/styles`**: Global CSS and modular stylesheets for specific components (`CreateApp.module.css`, `Home.module.css`)[cite: 1].
* **`/public`**: Static assets, SVGs, and branding materials[cite: 1].

---

## ⚙️ Local Development Setup

### 1. Install Dependencies
Ensure you have Yarn installed, then install the project dependencies:
```bash
yarn install
