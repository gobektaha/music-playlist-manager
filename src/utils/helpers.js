// Yardımcı fonksiyonlar

// Süreyi saniyeden dakika:saniye formatına çevir
export const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Toplam süreyi hesapla
export const calculateTotalDuration = (songs) => {
  return songs.reduce((total, song) => total + song.duration, 0);
};

// Playlist istatistiklerini hesapla
export const getPlaylistStats = (playlist, allSongs) => {
  const playlistSongs = allSongs.filter(song => playlist.songs.includes(song.id));
  const totalDuration = calculateTotalDuration(playlistSongs);
  const songCount = playlistSongs.length;
  
  return {
    songCount,
    totalDuration,
    formattedDuration: formatDuration(totalDuration)
  };
};

// Şarkı arama fonksiyonu
export const searchSongs = (songs, query) => {
  if (!query.trim()) return songs;
  
  const lowercaseQuery = query.toLowerCase();
  return songs.filter(song => 
    song.title.toLowerCase().includes(lowercaseQuery) ||
    song.artist.toLowerCase().includes(lowercaseQuery)
  );
};

// Favori şarkıları filtrele
export const getFavoriteSongs = (songs) => {
  return songs.filter(song => song.isFavorite);
};

// Benzersiz ID oluştur
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Şarkıyı playlist'e ekle/çıkar
export const toggleSongInPlaylist = (playlist, songId) => {
  const isInPlaylist = playlist.songs.includes(songId);
  
  if (isInPlaylist) {
    return {
      ...playlist,
      songs: playlist.songs.filter(id => id !== songId),
      updatedAt: new Date()
    };
  } else {
    return {
      ...playlist,
      songs: [...playlist.songs, songId],
      updatedAt: new Date()
    };
  }
};

// Şarkı favori durumunu değiştir
export const toggleFavorite = (song) => {
  return {
    ...song,
    isFavorite: !song.isFavorite
  };
};
