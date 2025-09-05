// Veri modelleri ve tip tanımlamaları

export const Song = {
  id: '',
  title: '',
  artist: '',
  duration: 0, // saniye cinsinden
  albumCover: '',
  isFavorite: false,
  createdAt: new Date()
};

export const Playlist = {
  id: '',
  name: '',
  description: '',
  songs: [], // Song ID'leri
  createdAt: new Date(),
  updatedAt: new Date()
};

// Örnek veri
export const sampleSongs = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: 355, // 5:55
    albumCover: 'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Queen',
    isFavorite: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    title: 'Hotel California',
    artist: 'Eagles',
    duration: 391, // 6:31
    albumCover: 'https://via.placeholder.com/300x300/2a2a2a/ffffff?text=Eagles',
    isFavorite: false,
    createdAt: new Date('2024-01-02')
  },
  {
    id: '3',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    duration: 482, // 8:02
    albumCover: 'https://via.placeholder.com/300x300/3a3a3a/ffffff?text=Led+Zeppelin',
    isFavorite: true,
    createdAt: new Date('2024-01-03')
  },
  {
    id: '4',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: 183, // 3:03
    albumCover: 'https://via.placeholder.com/300x300/4a4a4a/ffffff?text=John+Lennon',
    isFavorite: false,
    createdAt: new Date('2024-01-04')
  },
  {
    id: '5',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: 294, // 4:54
    albumCover: 'https://via.placeholder.com/300x300/5a5a5a/ffffff?text=Michael+Jackson',
    isFavorite: true,
    createdAt: new Date('2024-01-05')
  }
];

export const samplePlaylists = [
  {
    id: '1',
    name: 'Çalışma Müzikleri',
    description: 'Odaklanmak için ideal müzikler',
    songs: ['1', '3'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Spor',
    description: 'Egzersiz sırasında dinlenecek enerjik müzikler',
    songs: ['2', '5'],
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '3',
    name: 'Chill',
    description: 'Rahatlamak için sakin müzikler',
    songs: ['4'],
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  }
];
