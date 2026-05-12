# MedFind

**Live:** [findclinic.netlify.app](https://findclinic.netlify.app)

A web application for quickly finding hospitals in Moldova and Romania — with addresses, phone numbers, and direct links, based on the user's location.

## Features

- **Geolocation** — detects the user's city and shows nearby hospitals first
- **Hospital cards** — each card has a photo, address (with Google Maps link), phone, email, and website
- **Detail page** — full contact info for each hospital
- **All hospitals page** — browse the complete list by city
- **Responsive design** — works on mobile and desktop

## Tech Stack

| Technology | Version |
|---|---|
| React | 19 |
| React Router | 7 |
| Tailwind CSS | 4 |
| Vite | 8 |
| Axios | 1.x |
| React Icons | 5 |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── HospitalCard.jsx
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Hospitals.jsx
│   └── HospitalDetail.jsx
├── data/
│   └── hospitals.json
└── router.jsx
```

## Data

Hospital data is stored in `src/data/hospitals.json`. Each city entry follows this structure:

```json
{
  "city": "Chișinău",
  "hospitals": [
    {
      "id": 1,
      "name": "Hospital Name",
      "image": "https://...",
      "address": "Street, City, Country",
      "contact": {
        "phone": "+373 ...",
        "email": "contact@hospital.md",
        "website": "https://hospital.md"
      }
    }
  ]
}
```

Currently covers: **Chișinău**, **Orhei**, **Tiraspol**, **Iași**, **București**.
