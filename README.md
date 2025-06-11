Skip Hire Application
Overview
This is a React-based web application designed to display a list of available skips for hire. Users can browse skip sizes through a carousel, view details such as price and availability, and select a skip for further actions. The application features a modern Liquid Glass design with a dynamic background and smooth animations, using SCSS for styling and Supabase as the backend for skip data.
Features

Carousel Display: Browse skip sizes (4, 6, 8, 10, 12, 14, 16, 18, 20 yards) with images and details.
Skip Selection: Select a skip to view its summary, including price with VAT and road allowance status.
Responsive Design: Optimized for desktop and mobile devices.
Liquid Glass Styling: Transparent, blurred cards with a dynamic background for a sleek UI.
Supabase Integration: Fetches skip data dynamically from a Supabase backend.

Prerequisites
To run this project, you need:

Node.js (v16 or higher)
npm (v8 or higher)
A Supabase account with the skip data configured (e.g., table with fields: id, size, price_before_vat, vat, allowed_on_road, etc.)

Installation

Clone the repository:git clone <repository-url>
cd skip-hire-app


Install dependencies:npm install


Set up environment variables:
Create a .env file in the root directory.
Add your Supabase URL and API key:REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_KEY=your-supabase-key





Running the Application

Start the development server:npm start


Open your browser and navigate to http://localhost:3000.

Project Structure
skip-hire-app/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon
├── src/
│   ├── components/
│   │   ├── Carousel/       # Carousel component for displaying skips
│   │   ├── NavigationBar/  # Navigation bar component
│   │   └── SelectedSkipSummary/ # Summary for selected skip
│   ├── hooks/
│   │   └── useSkips.js     # Custom hook for fetching skip data from Supabase
│   ├── styles/
│   │   ├── SkipsList.scss  # SCSS styles for SkipsList component
│   │   └── NavigationBar.scss # SCSS styles for NavigationBar
│   ├── App.js              # Main App component
│   └── SkipsList.js        # Main component for skip listing and selection
├── .env                    # Environment variables (Supabase credentials)
├── package.json            # Project dependencies and scripts
└── README.md               # This file

Key Components

SkipsList.js: The main component that orchestrates the skip listing, carousel, and summary. It filters skips to display only allowed sizes (4, 6, 8, 10, 12, 14, 16, 18, 20 yards).
Carousel.js: Displays skips in a scrollable carousel with images fetched via the getSkipImage function.
SelectedSkipSummary.js: Shows detailed information about the selected skip.
useSkips.js: Custom hook to fetch skip data from Supabase.
SkipsList.scss: Implements the Liquid Glass design with blurred, transparent cards and a dynamic background.

Configuration
Skip Images
The getSkipImage function in SkipsList.js maps skip sizes to image URLs hosted on Supabase. Update the skipImages object if your image filenames or paths differ:
const skipImages = {
  4: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
  6: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg",
  // ... other sizes
  18: "https://via.placeholder.com/300x200?text=Skip+18yd", // Placeholder for missing 18-yard skip
};


Note: The 18-yard skip is not in the provided data. Replace its placeholder URL with the actual image URL if available.
To include the 40-yard skip (present in the data), add it to the allowedSizes array and skipImages object in SkipsList.js.

Supabase Setup
Ensure your Supabase table (skips) includes the following fields:

id (integer)
size (integer, e.g., 4, 6, 8, etc.)
price_before_vat (float)
vat (integer)
allowed_on_road (boolean)
allows_heavy_waste (boolean)
postcode, area, forbidden, created_at, updated_at (optional fields)

Troubleshooting

Content Not Visible:
Check browser support for backdrop-filter (used for Liquid Glass effect). Use Chrome or Safari for best results. For Firefox, enable layout.css.backdrop-filter.enabled in about:config.
Verify that image URLs in getSkipImage are accessible. Open them in a browser to test.
Clear browser cache or try incognito mode.
Check the Console (F12) for errors related to image loading or CSS.


Missing Skips:
Ensure the Supabase query in useSkips.js returns the expected data.
Verify that the allowedSizes array in SkipsList.js includes all desired skip sizes.


Development Issues:
Run npm install again if dependencies fail.
Ensure .env file contains valid Supabase credentials.



Future Improvements

Add animations for carousel transitions (e.g., fade or slide effects).
Implement 3D tilt effects on cards using react-tilt.
Add error handling for failed image loads with custom fallback images.
Support dynamic skip sizes beyond the predefined list.

License
This project is licensed under the MIT License.
Contact
For issues or feature requests, contact [engmohammaddarweesh@gmail.com] or open an issue on the repository.

[Demo](https://remwaste-liquid-glass.netlify.app/)