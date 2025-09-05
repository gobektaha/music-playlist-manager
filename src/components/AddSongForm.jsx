import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material'
import { generateId } from '../utils/helpers'

const AddSongForm = ({ open, onClose, onAddSong }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    duration: '',
    albumCover: ''
  })

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (!formData.title || !formData.artist || !formData.duration) {
      alert('Lütfen tüm gerekli alanları doldurun!')
      return
    }

    const newSong = {
      id: generateId(),
      title: formData.title,
      artist: formData.artist,
      duration: parseInt(formData.duration),
      albumCover: formData.albumCover || 'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=No+Image',
      isFavorite: false,
      createdAt: new Date()
    }

    onAddSong(newSong)
    setFormData({ title: '', artist: '', duration: '', albumCover: '' })
    onClose()
  }

  const handleClose = () => {
    setFormData({ title: '', artist: '', duration: '', albumCover: '' })
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6">🎵 Yeni Şarkı Ekle</Typography>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              required
              label="Şarkı Adı"
              value={formData.title}
              onChange={handleChange('title')}
              fullWidth
              variant="outlined"
            />
            
            <TextField
              required
              label="Sanatçı"
              value={formData.artist}
              onChange={handleChange('artist')}
              fullWidth
              variant="outlined"
            />
            
            <TextField
              required
              label="Süre (saniye)"
              type="number"
              value={formData.duration}
              onChange={handleChange('duration')}
              fullWidth
              variant="outlined"
              helperText="Örnek: 180 (3 dakika)"
            />
            
            <TextField
              label="Albüm Kapağı URL'si"
              value={formData.albumCover}
              onChange={handleChange('albumCover')}
              fullWidth
              variant="outlined"
              helperText="İsteğe bağlı - URL girmezseniz varsayılan görsel kullanılır"
            />
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleClose} color="inherit">
            İptal
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Şarkı Ekle
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddSongForm
