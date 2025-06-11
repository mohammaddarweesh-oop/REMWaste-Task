RemWaste Skip Hire Application
Overview
The RemWaste Skip Hire Application is a React-based web platform for renting skips. Users can enter a postcode to check skip availability in their area, browse available skip sizes through an interactive carousel, and view detailed skip information, including pricing and road allowance status. The application features a modern Liquid Glass design for the skip listing page, with transparent, blurred cards and a dynamic background, styled using SCSS. It integrates with Supabase for fetching skip data.
[Live Demo]: (https://remwaste-liquid-glass.netlify.app/)
Features

Postcode Checker: Enter a postcode to verify skip availability in your area.
Skip Carousel: Browse skip sizes (4, 6, 8, 10, 12, 14, 16, 18, 20 yards) with images and details after postcode validation.
Skip Selection: View a summary of the selected skip, including price with VAT and road allowance status.
Responsive Design: Optimized for desktop and mobile devices.
Liquid Glass Styling: Applied to the skip listing page with blurred, transparent cards and a dynamic background.
Supabase Integration: Dynamically fetches skip data based on the provided postcode.

Prerequisites
To run this project locally, you need:

Node.js (v16 or higher)
npm (v8 or higher)
A Supabase account with a skips table configured (fields: id, size, price_before_vat, vat, allowed_on_road, postcode, etc.)

Installation

Clone the repository:git clone <repository-url>
cd remwaste-skip-hire


Install dependencies:npm install


Set up environment variables:
Create a .env file in the root directory.
Add your Supabase URL and API key:REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_KEY=your-supabase-key





Running the Application

Start the development server:npm start


Open your browser and navigate to http://localhost:3000.
Enter a valid postcode (e.g., NR32) to access the skip listing page.

Project Structure
remwaste-skip-hire/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon
├── src/
│   ├── components/
│   │   ├── Carousel/       # Carousel component for skip sizes
│   │   ├── NavigationBar/  # Navigation bar component
│   │   ├── SelectedSkipSummary/ # Summary for selected skip
│   │   └── PostcodeChecker/ # Component for postcode input form
│   ├── hooks/
│   │   └── useSkips.js     # Custom hook for fetching skip data from Supabase
│   ├── styles/
│   │   ├── SkipsList.scss  # SCSS styles for skip listing (Liquid Glass design)
│   │   ├── NavigationBar.scss # SCSS styles for navigation bar
│   │   └── PostcodeChecker.scss # SCSS styles for postcode form
│   ├── App.js              # Main App component with routing
│   ├── SkipsList.js        # Component for skip listing and selection
│   └── PostcodeChecker.js  # Component for postcode input
├── .env                    # Environment variables (Supabase credentials)
├── package.json            # Project dependencies and scripts
└── README.md               # This file

Key Components

PostcodeChecker.js: Handles postcode input and redirects to the skip listing page upon validation.
SkipsList.js: Manages the skip listing, carousel, and summary. Filters skips to display only allowed sizes (4, 6, 8, 10, 12, 14, 16, 18, 20 yards).
Carousel.js: Displays skips in a scrollable carousel with images fetched via the getSkipImage function.
SelectedSkipSummary.js: Shows detailed information about the selected skip.
useSkips.js: Custom hook to fetch skip data from Supabase based on postcode.
SkipsList.scss: Implements the Liquid Glass design with blurred, transparent cards and a dynamic background.

Configuration
Skip Images
The getSkipImage function in SkipsList.js maps skip sizes to image URLs hosted on Supabase. Update the skipImages object if your image filenames or paths differ:
const skipImages = {
  4: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
  6: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg",
  8: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg",
  10: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg",
  12: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg",
  14: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg",
  16: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg",
  18: "https://via.placeholder.com/300x200?text=Skip+18yd", // Placeholder (no 18-yard skip in data)
  20: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg",
};


Note: The 18-yard skip is not in the provided data. Replace its placeholder URL with the actual image URL if available.
A 40-yard skip exists in the data but is excluded by default. To include it, add 40 to the allowedSizes array and its image URL to skipImages in SkipsList.js.

Supabase Setup
Ensure your Supabase skips table includes:

id (integer)
size (integer, e.g., 4, 6, 8, etc.)
price_before_vat (float)
vat (integer)
allowed_on_road (boolean)
allows_heavy_waste (boolean)
postcode (string, e.g., "NR32")
area, forbidden, created_at, updated_at (optional)

Configure useSkips.js to query skips based on the entered postcode.
Deployment
The application is deployed on Netlify at https://remwaste-liquid-glass.netlify.app/. To deploy updates:

Push changes to your repository.
Link the repository to Netlify and configure build settings:
Build command: npm run build
Publish directory: build


Ensure environment variables (REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY) are set in Netlify's dashboard.

Troubleshooting

Content Not Visible on Skip Listing Page:
Ensure browser support for backdrop-filter (used for Liquid Glass effect). Use Chrome or Safari for best results. For Firefox, enable layout.css.backdrop-filter.enabled in about:config.
Verify that image URLs in getSkipImage are accessible. Test them in a browser.
Check the Console (F12) for errors related to image loading or CSS.
Clear browser cache or use incognito mode.


Carousel Not Displaying:
Ensure the postcode entered is valid (e.g., NR32) and exists in the Supabase skips table.
Check useSkips.js for correct query logic.
Verify that filteredSkips in SkipsList.js contains data after postcode submission.


Routing Issues:
Ensure React Router is configured to navigate to the skip listing page (e.g., /skips) after postcode validation.
Check App.js for correct route definitions.


Development Issues:
Re-run npm install if dependencies fail.
Verify .env contains valid Supabase credentials.



Future Improvements

Add animations for carousel transitions (e.g., fade or slide effects).
Implement 3D tilt effects on skip cards using react-tilt.
Enhance error handling for invalid postcodes or failed image loads.
Add a loading spinner for the postcode checker and skip data fetch.
Support dynamic skip sizes beyond the predefined list.

License
This project is licensed under the MIT License.
Contact
For issues or feature requests, open an issue on the repository or contact [your-email@example.com].
