
![Screen](https://github.com/user-attachments/assets/09e5c714-7c4e-4f77-91d3-9b7c4e6a8a6a)

# Custom Date Range Picker

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/custom-date-range-picker/blob/main/LICENSE) 

A lightweight, high-performance date range selection component built from scratch in React. This project demonstrates complex UI logic and state management without relying on external date-picking libraries.

## 🚀 Live Demo
- **URL:** [https://custom-date-range-picker.vercel.app/](https://custom-date-range-picker.vercel.app/)

## 💡 Why this project?
Building a calendar component is a classic engineering challenge. It requires precise logic for handling months, years, leap years, and complex user interactions (selecting start/end dates, hover states, and range validation). This project was created to showcase "under the hood" programming skills.

## 🛠 Tech Stack
- **Framework:** React.js
- **Styling:** CSS Modules (custom styling for full control)
- **Date Logic:** Native JavaScript `Date` object
- **State Management:** React Hooks (`useState`, `useMemo`)

## ✨ Key Features
- **Custom Range Selection:** Intuitive two-click system to select a start and end date.
- **Dynamic Calendar Logic:** Automatically handles varying month lengths and leap years.
- **Hover Effects:** Real-time visual feedback when selecting a range.
- **Constraint Handling:** Ability to disable past dates or specific ranges (extensible).
- **Responsive Design:** Optimized for both desktop and mobile touch interactions.

## 🏗 Engineering Challenges Solved
- **Calendar Matrix Generation:** Implementing an algorithm to generate the 7x6 grid for any given month/year.
- **State Synchronization:** Managing the interaction between two separate month views to ensure a seamless range selection.
- **Zero Dependencies:** Achieved full functionality using only React and native JS, ensuring a minimal bundle size.

## 📁 Project Structure
- `/components`: Contains the `Calendar`, `Month`, and `Day` sub-components.
- `/utils`: Pure JavaScript functions for date calculations and formatting.
