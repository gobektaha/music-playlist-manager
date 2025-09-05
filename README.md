# 🎵 Music Playlist Manager

A modern, Spotify-inspired music playlist management application built with React, Vite, and Material-UI. Create, organize, and manage your personal music collection with an intuitive and beautiful interface.

![Music Playlist Manager](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-5.15.0-0081CB.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

### 🎵 Song Management
- **Add Songs**: Create your music library with song details (title, artist, duration, album cover)
- **Visual Cards**: Beautiful album cover display with hover effects
- **Favorites System**: Mark songs as favorites with heart icon
- **Duration Display**: Automatic time formatting (MM:SS)

### 🗂️ Playlist Management
- **Create Playlists**: Organize songs into custom playlists (Work, Gym, Chill, etc.)
- **Add/Remove Songs**: Easily manage songs within playlists
- **Playlist Statistics**: View total duration and song count for each playlist
- **Visual Indicators**: See which songs are already in selected playlists

### 🔍 Search & Filter
- **Real-time Search**: Find songs by title or artist name
- **Tab Navigation**: Switch between All Songs, Favorites, and Playlists
- **Smart Filtering**: Instant results as you type

### 📊 Statistics Dashboard
- **Overview Cards**: Total songs, playlists, and favorites count
- **Playlist Analytics**: Duration and song count for each playlist
- **Visual Progress**: Clean, modern statistics display

### 🎨 Modern UI/UX
- **Dark Theme**: Spotify-inspired dark mode design
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Material Design**: Beautiful Material-UI components
- **Smooth Animations**: Hover effects and transitions
- **Floating Action Buttons**: Quick access to add songs and playlists

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/music-playlist-manager.git
   cd music-playlist-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Built With

- **[React 19.1.1](https://reactjs.org/)** - Frontend framework
- **[Vite 7.1.2](https://vitejs.dev/)** - Build tool and development server
- **[Material-UI 5.15.0](https://mui.com/)** - React component library
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling
- **[JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Programming language

## 📱 Usage

### Adding Songs
1. Click the **"+"** floating action button (bottom right)
2. Fill in song details:
   - Song title (required)
   - Artist name (required)
   - Duration in seconds (required)
   - Album cover URL (optional)
3. Click **"Add Song"**

### Creating Playlists
1. Click the **playlist icon** floating action button
2. Enter playlist name and description
3. Click **"Create Playlist"**

### Managing Songs in Playlists
1. Go to the **"Playlists"** tab
2. Click on a playlist to select it
3. Switch to **"All Songs"** or **"Favorites"** tab
4. Click the **"+"** button on songs to add them to the selected playlist

### Favoriting Songs
- Click the **heart icon** on any song card to toggle favorite status
- View all favorites in the **"Favorites"** tab

### Searching
- Use the search bar to find songs by title or artist
- Search works across all tabs in real-time

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── SongCard.jsx        # Individual song display card
│   ├── PlaylistCard.jsx    # Playlist display card
│   ├── SearchBar.jsx       # Search input component
│   ├── AddSongForm.jsx     # Song creation form
│   └── AddPlaylistForm.jsx # Playlist creation form
├── data/
│   └── models.js           # Data models and sample data
├── utils/
│   └── helpers.js          # Utility functions
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## 🎯 Key Components

### SongCard
- Displays song information with album cover
- Toggle favorite status
- Add/remove from playlists
- Play button (ready for future audio integration)

### PlaylistCard
- Shows playlist details and statistics
- Quick actions (play, edit, delete)
- Visual indicators for song count and duration

### SearchBar
- Real-time search functionality
- Clear button for easy reset
- Responsive design

## 🔮 Future Enhancements

- **Audio Playback**: Integrate with Web Audio API for actual music playback
- **Spotify API**: Connect to Spotify for real music data and streaming
- **User Authentication**: Add user accounts and cloud sync
- **Import/Export**: Backup and restore playlist data
- **Advanced Filtering**: Filter by genre, year, duration, etc.
- **Social Features**: Share playlists with friends
- **Mobile App**: React Native version for mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
- [React](https://reactjs.org/) for the amazing frontend framework
- Spotify for the design inspiration

## 📸 Screenshots

### Main Dashboard
![Dashboard](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Music+Playlist+Manager+Dashboard)

### Song Cards
![Song Cards](https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Beautiful+Song+Cards+with+Album+Covers)

### Playlist Management
![Playlists](https://via.placeholder.com/800x400/3a3a3a/ffffff?text=Playlist+Management+Interface)

---

⭐ **Star this repository if you found it helpful!**

🎵 **Happy listening!**