import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Chip, Box } from '@mui/material'
import { Favorite, FavoriteBorder, PlayArrow, Add } from '@mui/icons-material'
import { formatDuration } from '../utils/helpers'

const SongCard = ({ song, onToggleFavorite, onAddToPlaylist, isInPlaylist = false }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 300, 
        backgroundColor: 'background.paper',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={song.albumCover}
        alt={`${song.title} - ${song.artist}`}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" noWrap>
          {song.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {song.artist}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 1 }}>
          <Chip 
            label={formatDuration(song.duration)} 
            size="small" 
            color="primary" 
            variant="outlined"
          />
          {song.isFavorite && (
            <Chip 
              label="Favori" 
              size="small" 
              color="secondary" 
              icon={<Favorite />}
            />
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <IconButton 
          color="primary" 
          aria-label="play"
          sx={{ 
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark',
            }
          }}
        >
          <PlayArrow />
        </IconButton>
        
        <Box>
          <IconButton 
            color={song.isFavorite ? "secondary" : "default"}
            onClick={() => onToggleFavorite(song.id)}
            aria-label="toggle favorite"
          >
            {song.isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          
          <IconButton 
            color={isInPlaylist ? "secondary" : "default"}
            onClick={() => onAddToPlaylist(song.id)}
            aria-label="add to playlist"
          >
            <Add />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}

export default SongCard
