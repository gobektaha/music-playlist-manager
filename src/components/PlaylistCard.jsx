import { Card, CardContent, CardActions, Typography, IconButton, Chip, Box, Avatar } from '@mui/material'
import { PlaylistPlay, Edit, Delete, MusicNote } from '@mui/icons-material'
import { getPlaylistStats } from '../utils/helpers'

const PlaylistCard = ({ playlist, allSongs, onEdit, onDelete, onPlay }) => {
  const stats = getPlaylistStats(playlist, allSongs)
  
  return (
    <Card 
      sx={{ 
        maxWidth: 350,
        backgroundColor: 'background.paper',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar 
            sx={{ 
              width: 60, 
              height: 60, 
              backgroundColor: 'primary.main',
              mr: 2
            }}
          >
            <MusicNote fontSize="large" />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" noWrap>
              {playlist.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {playlist.description}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip 
            label={`${stats.songCount} şarkı`} 
            size="small" 
            color="primary" 
            variant="outlined"
          />
          <Chip 
            label={stats.formattedDuration} 
            size="small" 
            color="secondary" 
            variant="outlined"
          />
        </Box>
        
        <Typography variant="caption" color="text.secondary">
          Oluşturulma: {new Date(playlist.createdAt).toLocaleDateString('tr-TR')}
        </Typography>
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <IconButton 
          color="primary" 
          onClick={() => onPlay(playlist.id)}
          aria-label="play playlist"
          sx={{ 
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark',
            }
          }}
        >
          <PlaylistPlay />
        </IconButton>
        
        <Box>
          <IconButton 
            color="default"
            onClick={() => onEdit(playlist.id)}
            aria-label="edit playlist"
          >
            <Edit />
          </IconButton>
          
          <IconButton 
            color="error"
            onClick={() => onDelete(playlist.id)}
            aria-label="delete playlist"
          >
            <Delete />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}

export default PlaylistCard
