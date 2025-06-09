#![Screen](https://github.com/user-attachments/assets/c69bbcd7-24cf-484c-b90f-aee411e0586a)
 Custom Date Range Picker

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/custom-date-range-picker/blob/main/LICENSE) 

A lightweight and customizable React-based date range picker for selecting date ranges with ease. Perfect for booking systems, calendars, and scheduling applications.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Styling](#styling)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/custom-date-range-picker.git 
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd custom-date-range-picker
   \`\`\`

3. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

   or

   \`\`\`bash
   yarn install
   \`\`\`

4. Start the development server:

   \`\`\`bash
   npm start
   \`\`\`

   or

   \`\`\`bash
   yarn start
   \`\`\`

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

---

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

## Project Structure

\`\`\`
custom-date-range-picker/
├── public/                  # Static assets (e.g., data.json)
├── src/                     # Source code
│   ├── components/          # Reusable components (e.g., Calendar, Month, Day)
│   ├── styles/              # SCSS styles
│   ├── utils/               # Utility functions (e.g., formatDate, useFetch)
│   ├── App.js               # Main application component
│   └── index.js             # Entry point
├── README.md                # This file
└── package.json             # Project dependencies and scripts
\`\`\`

---

## Features

- **Date Range Selection**: Select a start date with a single click and an end date with another click. The selected range will be visually highlighted.
- **Reserved Dates**: Reserved or unavailable dates are fetched from an external \`data.json\` file and displayed as disabled in the calendar.
- **State Update**: After selecting a date range, the application's state is updated, and the selected range is displayed in the summary section.
- **Clear Selection**: Reset the selected date range with a single click using the "Clear" button.
- **Responsive Design**: Fully responsive and mobile-friendly UI.
- **Customizable Styling**: Built with SCSS for easy theming and customization.

---

## Usage

### 1. **Data Source**

The calendar fetches reserved dates from a \`data.json\` file located in the \`public/\` directory. Update this file with your own data:

\`\`\`json
[
  { "date": "2025-06-10", "reserved": true },
  { "date": "2025-06-11", "reserved": true },
  { "date": "2025-06-14", "reserved": false }
]
\`\`\`

### 2. **Integration**

To integrate the date range picker into your project:

1. Copy the \`Calendar\` component and its dependencies (\`Month\`, \`Day\`, \`utils\`) into your project.
2. Import and use the \`Calendar\` component in your app:

   \`\`\`javascript
   import React, { useState } from 'react';
   import Calendar from './components/Calendar';

   function App() {
     const [dates, setDates] = useState(null);

     return (
       <div>
         <Calendar dbDates={[]} setDates={setDates} />
         <div>
           Selected Range: {dates?.start} - {dates?.end}
         </div>
       </div>
     );
   }

   export default App;
   \`\`\`

---

## Styling

Customize the appearance of the calendar by editing the SCSS files in the \`src/styles/\` directory. Each day has specific classes for styling:

- \`.day__today\`: Highlights today's date.
- \`.day__reserved\`: Marks reserved dates.
- \`.day__selected-as-start\`: Highlights the start of the selected range.
- \`.day__selected-as-end\`: Highlights the end of the selected range.
- \`.day__selected-between\`: Highlights dates between the selected range.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/YourFeatureName\`).
3. Commit your changes (\`git commit -m "Add some feature"\`).
4. Push to the branch (\`git push origin feature/YourFeatureName\`).
5. Open a pull request.

---

## Acknowledgments

- Inspired by modern date pickers used in booking platforms.
- Built with React and SCSS for simplicity and flexibility.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [Rafal Sprengel](https://github.com/RafalSprengel) 
- Email: sprengel.rafal@sprengel.com
