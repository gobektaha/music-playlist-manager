import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { 
  CssBaseline, 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Grid, 
  Fab, 
  Tabs, 
  Tab,
  Paper
} from '@mui/material'
import { MusicNote, Add, PlaylistAdd } from '@mui/icons-material'
import { sampleSongs, samplePlaylists } from './data/models'
import { searchSongs, toggleFavorite, toggleSongInPlaylist, generateId } from './utils/helpers'
import SongCard from './components/SongCard'
import PlaylistCard from './components/PlaylistCard'
import SearchBar from './components/SearchBar'
import AddSongForm from './components/AddSongForm'
import AddPlaylistForm from './components/AddPlaylistForm'
import './App.css'

// Material-UI tema oluştur
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1db954', // Spotify yeşili
    },
    secondary: {
      main: '#1ed760',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  const [songs, setSongs] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentTab, setCurrentTab] = useState(0)
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [addSongOpen, setAddSongOpen] = useState(false)
  const [addPlaylistOpen, setAddPlaylistOpen] = useState(false)

  // Örnek verileri yükle
  useEffect(() => {
    setSongs(sampleSongs)
    setPlaylists(samplePlaylists)
  }, [])

  // Filtrelenmiş şarkılar
  const filteredSongs = searchSongs(songs, searchQuery)
  const favoriteSongs = songs.filter(song => song.isFavorite)

  // Şarkı işlemleri
  const handleToggleFavorite = (songId) => {
    setSongs(prev => prev.map(song => 
      song.id === songId ? toggleFavorite(song) : song
    ))
  }

  const handleAddSong = (newSong) => {
    setSongs(prev => [...prev, newSong])
  }

  const handleAddToPlaylist = (songId) => {
    if (!selectedPlaylist) {
      alert('Lütfen önce bir playlist seçin!')
      return
    }
    
    setPlaylists(prev => prev.map(playlist => 
      playlist.id === selectedPlaylist.id 
        ? toggleSongInPlaylist(playlist, songId)
        : playlist
    ))
  }

  // Playlist işlemleri
  const handleAddPlaylist = (newPlaylist) => {
    setPlaylists(prev => [...prev, newPlaylist])
  }

  const handleDeletePlaylist = (playlistId) => {
    if (window.confirm('Bu playlist\'i silmek istediğinizden emin misiniz?')) {
      setPlaylists(prev => prev.filter(playlist => playlist.id !== playlistId))
      if (selectedPlaylist?.id === playlistId) {
        setSelectedPlaylist(null)
      }
    }
  }

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
    setSelectedPlaylist(null)
  }

  const renderSongs = (songList) => (
    <Grid container spacing={3}>
      {songList.map((song) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={song.id}>
          <SongCard
            song={song}
            onToggleFavorite={handleToggleFavorite}
            onAddToPlaylist={handleAddToPlaylist}
            isInPlaylist={selectedPlaylist?.songs.includes(song.id)}
          />
        </Grid>
      ))}
    </Grid>
  )

  const renderPlaylists = () => (
    <Grid container spacing={3}>
      {playlists.map((playlist) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={playlist.id}>
          <PlaylistCard
            playlist={playlist}
            allSongs={songs}
            onEdit={(id) => console.log('Edit playlist:', id)}
            onDelete={handleDeletePlaylist}
            onPlay={(id) => {
              const playlist = playlists.find(p => p.id === id)
              setSelectedPlaylist(playlist)
              setCurrentTab(0) // Şarkılar sekmesine geç
            }}
          />
        </Grid>
      ))}
    </Grid>
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
          <Toolbar>
            <MusicNote sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              🎵 Music Playlist Manager
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hoş Geldiniz! 🎶
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Kendi müzik koleksiyonunuzu yönetin, playlist'ler oluşturun ve favori şarkılarınızı keşfedin.
          </Typography>
          
          {/* İstatistikler */}
          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <Box sx={{ 
              p: 2, 
              backgroundColor: 'background.paper', 
              borderRadius: 2,
              minWidth: 150
            }}>
              <Typography variant="h6" color="primary">
                {songs.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Toplam Şarkı
              </Typography>
            </Box>
            <Box sx={{ 
              p: 2, 
              backgroundColor: 'background.paper', 
              borderRadius: 2,
              minWidth: 150
            }}>
              <Typography variant="h6" color="primary">
                {playlists.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Playlist
              </Typography>
            </Box>
            <Box sx={{ 
              p: 2, 
              backgroundColor: 'background.paper', 
              borderRadius: 2,
              minWidth: 150
            }}>
              <Typography variant="h6" color="primary">
                {favoriteSongs.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Favori Şarkı
              </Typography>
            </Box>
          </Box>

          {/* Seçili Playlist Bilgisi */}
          {selectedPlaylist && (
            <Paper sx={{ p: 2, mb: 3, backgroundColor: 'primary.dark' }}>
              <Typography variant="h6" color="white">
                Seçili Playlist: {selectedPlaylist.name}
              </Typography>
              <Typography variant="body2" color="white">
                {selectedPlaylist.description}
              </Typography>
            </Paper>
          )}

          {/* Arama ve Tablar */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <SearchBar 
                value={searchQuery} 
                onChange={setSearchQuery}
                placeholder="Şarkı veya sanatçı ara..."
              />
            </Box>
            
            <Paper sx={{ backgroundColor: 'background.paper' }}>
              <Tabs 
                value={currentTab} 
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab label="Tüm Şarkılar" />
                <Tab label="Favoriler" />
                <Tab label="Playlist'ler" />
              </Tabs>
            </Paper>
          </Box>

          {/* İçerik */}
          <Box sx={{ mt: 3 }}>
            {currentTab === 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Tüm Şarkılar ({filteredSongs.length})
                </Typography>
                {filteredSongs.length > 0 ? (
                  renderSongs(filteredSongs)
                ) : (
                  <Typography color="text.secondary">
                    {searchQuery ? 'Arama kriterlerinize uygun şarkı bulunamadı.' : 'Henüz şarkı eklenmemiş.'}
                  </Typography>
                )}
              </Box>
            )}
            
            {currentTab === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Favori Şarkılar ({favoriteSongs.length})
                </Typography>
                {favoriteSongs.length > 0 ? (
                  renderSongs(favoriteSongs)
                ) : (
                  <Typography color="text.secondary">
                    Henüz favori şarkınız yok. ❤️
                  </Typography>
                )}
              </Box>
            )}
            
            {currentTab === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Playlist'ler ({playlists.length})
                </Typography>
                {playlists.length > 0 ? (
                  renderPlaylists()
                ) : (
                  <Typography color="text.secondary">
                    Henüz playlist oluşturulmamış.
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </Container>

        {/* Floating Action Buttons */}
        <Fab
          color="primary"
          aria-label="add song"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={() => setAddSongOpen(true)}
        >
          <Add />
        </Fab>
        
        <Fab
          color="secondary"
          aria-label="add playlist"
          sx={{ position: 'fixed', bottom: 16, right: 80 }}
          onClick={() => setAddPlaylistOpen(true)}
        >
          <PlaylistAdd />
        </Fab>

        {/* Formlar */}
        <AddSongForm
          open={addSongOpen}
          onClose={() => setAddSongOpen(false)}
          onAddSong={handleAddSong}
        />
        
        <AddPlaylistForm
          open={addPlaylistOpen}
          onClose={() => setAddPlaylistOpen(false)}
          onAddPlaylist={handleAddPlaylist}
        />
      </Box>
    </ThemeProvider>
  )
}

export default App
