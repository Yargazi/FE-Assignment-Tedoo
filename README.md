# Project: Tedooo Feed Viewer

## Description
The **Tedooo Feed Viewer** is a responsive web application designed to display a user-friendly, infinite-scrolling feed of posts. The application is built with modern web technologies such as **Next.js**, **TypeScript**, and **Tailwind CSS**, and utilizes **React Query** for efficient data fetching and caching. This project is focused on creating an elegant and scalable user interface for viewing and interacting with social media posts.

---

## Features Implemented

### **Feed Display**
- Posts are displayed in a visually appealing, responsive layout.
- Each post includes:
  - **User avatar and username**.
  - **Shop name** (if available).
  - **Post text**.
  - Up to **two post images**, resized dynamically:
    - **Single image**: Max dimensions of `881x517px`.
    - **Two images**: Each image with max dimensions of `547x517px`.
  - **Total likes and comments**.

---

### **Navbar**
- A fixed navigation bar includes:
  - **A logo**.
  - **A search bar** with a placeholder and search icon.
  - **Navigation links** (Home, Messaging, Notifications, Profile).
  - **An avatar** for the user's profile.
- **Active link highlighting**:
  - A green indicator line appears below the active link.
  - Both the text and icon color change on hover.

---

### **Infinite Scrolling**
- Posts load continuously as the user scrolls to the bottom of the page.
- Implemented using **IntersectionObserver** with **React Query** for seamless API integration.
- Initial data fetched in batches of six posts with a `skip` parameter for pagination.

---

### **Dynamic Time Formatting**
- Post timestamps are displayed as:
  - `<X> hours ago` for posts within the last 12 hours.
  - `<X> days ago` for older posts.
- Fully implemented and reusable as a helper function.

---

### **SVG Optimization**
- **SVG icons** (e.g., Home, Messaging, Notifications) dynamically styled using `stroke` classes in **Tailwind CSS** for hover effects.
- SVGs are imported as React components for better reusability.

---

## Upcoming Updates

### **Enhanced Post Interactions**
- Users will be able to like or comment on posts.
- Real-time updates to the like and comment counters.


---

## Technologies Used
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query
- **SVG Optimization**: @svgr/webpack
- **Date Formatting**: date-fns

---

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Tedooo-Feed-Viewer.git
   cd Tedooo-Feed-Viewer
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
    npm run dev
5. Open http://localhost:3000 to view the app in your browser.
   

גכדגככ'קגכ
