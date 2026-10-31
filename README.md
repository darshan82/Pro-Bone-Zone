# Pro Bono Zone — Frontend

Web app for **Pro Bono Zone**, a platform that runs free legal, business and financial consultation events. The public site lets visitors browse events, read blogs and register for a consultation. Behind the login, admins, licensees and staff each get a role-based dashboard to manage territories, events, promotions, sponsors, customers, appointments and a resource library.

Backend API: [pro-bone-zone-backend](https://github.com/darshan82/pro-bone-zone-backend)

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-2563EB?logoColor=white)

## Features

**Public site**
- Home page with upcoming events, about, FAQ, sponsor, privacy and terms pages
- Consultation registration form with email notifications (EmailJS)
- Blog pages with rich content

**Role-based dashboard** (admin / licensee / staff)
- JWT login with navigation and default landing page based on the user's role
- **Territories** – create, update and list service territories (admin)
- **Events & schedule** – manage events and customer appointments
- **Promotions & sponsors** – campaigns linked to sponsors and promoters
- **Personnel** – licensees, staff and customers
- **Library** – resources with per-role visibility, and blogs with a rich-text editor (Draft.js)
- Profile management

## Tech stack

| Area      | Tools                                               |
| --------- | --------------------------------------------------- |
| UI        | React 18, Vite, Tailwind CSS                        |
| Routing   | React Router                                        |
| Forms     | Formik                                              |
| Editors   | react-draft-wysiwyg (Draft.js)                      |
| Data      | Axios, React Context (user and event state)         |
| Other     | EmailJS, Moment, SweetAlert, React YouTube          |

## Project structure

```
src/
├── Homepage/, About/, FAQ/, Blog/, SmartSol/, Privacy/, Terms/   # Public pages
├── pages/              # Dashboard modules: territories, events, schedule, promotions,
│                       # sponsors, staff, Licensee, customer, resources, blogs, profile, auth
├── component/          # Navbar, Footer, cards, buttons
├── context/            # UserContext, EventContext
├── constants/          # Role-based navigation, dropdown options
└── helpingFunctions/   # Axios setup and helpers
```

## Getting started

**Requirements:** Node.js 18+ and the [backend API](https://github.com/darshan82/pro-bone-zone-backend) running

```bash
git clone https://github.com/darshan82/Pro-Bone-Zone.git
cd Pro-Bone-Zone
npm install
cp .env.example .env    # point VITE_API_URL at your backend
npm run dev             # http://localhost:5173
```

| Script            | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the dev server            |
| `npm run build`   | Production build into `dist/`   |
| `npm run preview` | Preview the production build    |
| `npm run deploy`  | Build and deploy to GitHub Pages |

## Author

**Darshan Lal** — Full-Stack Developer
[Portfolio](https://darshan-portfolio-one.vercel.app/) · [GitHub](https://github.com/darshan82)
