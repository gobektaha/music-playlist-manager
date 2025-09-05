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

const AddPlaylistForm = ({ open, onClose, onAddPlaylist }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (!formData.name.trim()) {
      alert('Lütfen playlist adını girin!')
      return
    }

    const newPlaylist = {
      id: generateId(),
      name: formData.name,
      description: formData.description,
      songs: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    onAddPlaylist(newPlaylist)
    setFormData({ name: '', description: '' })
    onClose()
  }

  const handleClose = () => {
    setFormData({ name: '', description: '' })
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6">🗂️ Yeni Playlist Oluştur</Typography>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              required
              label="Playlist Adı"
              value={formData.name}
              onChange={handleChange('name')}
              fullWidth
              variant="outlined"
              placeholder="Örnek: Çalışma Müzikleri, Spor, Chill"
            />
            
            <TextField
              label="Açıklama"
              value={formData.description}
              onChange={handleChange('description')}
              fullWidth
              variant="outlined"
              multiline
              rows={3}
              placeholder="Playlist hakkında kısa bir açıklama..."
            />
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleClose} color="inherit">
            İptal
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Playlist Oluştur
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddPlaylistForm
