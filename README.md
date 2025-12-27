
# Hr-portal-login
A modern HR Portal Login Page built with React and CSS, featuring responsive design, role selection (Admin, HR, Employees, Interns), password visibility toggle, and support guidance. Includes a visually appealing card layout with logo integration and background illustration.

# HR Portal Login Page

This is a **React-based HR Portal Login Page** with a modern UI, responsive design, and role selection functionality.

## Features

* **Responsive Layout**: Works on desktop and mobile screens.
* **Role Selection**: Users can select their role (Admin, HR, Employees, Interns) before logging in.
* **Password Visibility Toggle**: Show/hide password feature.
* **Logo Integration**: Displays a circular logo at the top of the login box.
* **Modern UI**: Clean design with card layout and background illustration.
* **Support Text**: Provides IT support guidance for login issues.

## Folder Structure

hr-portal-login/
│
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── illustration.png
│   │   └── logo.png
│   ├── App.css
│   └── App.js
├── package.json
└── README.md

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Anuradha1234-bi/Hr-portal-login.git
````

2. Navigate into the project folder:

```bash
cd hr-portal-login
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## Code Overview

### `App.js`

* **State Management**:
  Uses `useState` for `showPassword` (to toggle password visibility) and `role` (for selected role).

* **Login Box**:
  Contains logo, title, role selection dropdown, username input, password input with toggle, "Change Password" link, login button, and support text.

* **Dynamic Background**:
  The `.card` div uses an imported illustration as the background.

### `App.css`

* **Page Layout**: `.page` class ensures full-height background with centered card.
* **Card Design**: `.card` handles background image, padding, shadow, and border-radius.
* **Login Box**: `.login-box` styles the login form with padding, shadow, and rounded corners.
* **Role Selection**: `.role-select` provides a styled dropdown menu.
* **Inputs & Password Toggle**: `.password-container` allows the eye icon to toggle password visibility.
* **Responsive Design**: Media queries ensure proper alignment on mobile devices.

## Git Workflow

1. **Initialize Git in your project folder**:

```bash
git init
```

2. **Check status**:

```bash
git status
```

3. **Stage files for commit**:

```bash
git add .
```

4. **Commit changes**:

```bash
git commit -m "Initial commit: Added HR Portal Login Page"
```

5. **Connect to a remote repository**:

```bash
git remote add origin https://github.com/Anuradha1234-bi/Hr-portal-login.git
```

6. **Push changes**:

```bash
git push -u origin main
```
