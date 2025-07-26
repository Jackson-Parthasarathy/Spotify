# Spotify Web App

This project is a web application that interacts with the Spotify API to display a user's top artists, songs, and genres over different time frames (1 month, 6 months, and 1 year). The application is built using Next.js and TypeScript.

## Features

- User authentication to access Spotify data.
- Displays top artists, songs, and genres based on user listening history.
- Rolling statistics for the last 1 month, 6 months, and 1 year.

## Project Structure

```
Spotify
├── src
│   ├── app
│   │   ├── page.tsx          # Main entry point for the application
│   │   └── layout.tsx        # Layout structure for the application
│   ├── components
│   │   └── SpotifyStats.tsx  # Component to display Spotify statistics
│   ├── lib
│   │   └── spotifyApi.ts     # Functions to interact with the Spotify API
│   ├── types
│   │   └── index.ts          # TypeScript interfaces and types
│   └── styles
│       └── globals.css       # Global CSS styles
├── public
│   └── favicon.ico           # Favicon for the web application
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
├── next.config.js            # Next.js configuration file
├── .env.local                # Environment variables for the application
├── README.md                 # Project documentation
└── .github
    └── copilot-instructions.md # Instructions for GitHub Copilot
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Spotify
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Spotify API credentials:
   ```
   SPOTIFY_CLIENT_ID=<your-client-id>
   SPOTIFY_CLIENT_SECRET=<your-client-secret>
   SPOTIFY_REDIRECT_URI=<your-redirect-uri>
   ```

4. Run the application:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Log in with your Spotify account to access your listening data.
- View your top artists, songs, and genres based on your listening history.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.