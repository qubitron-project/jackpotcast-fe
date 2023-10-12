export const styles = {
  poster: {
    position: 'relative',
    color: 'secondary.main',
    minWidth: '320px',
    width: '100%',
    aspectRatio: '16/9',
    margin: '10px',
    '& .poster-img': {
      borderRadius: '8px',
    },
    '&:hover': {
      color: '#fff',
    },
    '@media (max-width: 900px)': {
      margin: '10px 3px',
      maxWidth: '320px',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  posterUp: {
    position: 'relative',
    width: '320px',
    aspectRatio: '16/9',
    '@media (max-width: 900px)': {
      width: '250px',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  posterDown: {
    paddingTop: '10px',
  },
  posterTitle: {
    fontSize: '1.2rem',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: '600',
    '@media (max-width: 900px)': {
      fontSize: '11px',
    },
  },
  posterYearMain: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pr: '3px',
  },
  posterYear: {
    '@media (max-width: 900px)': {
      fontSize: '11px',
    },
  },
  posterType: {
    borderRadius: '4px',
    color: 'primary.main',
    backgroundColor: 'secondary.main',
    fontSize: '11px',
    padding: '0 5px',
    '@media (max-width: 900px)': {
      fontSize: '8px',
    },
  },
  ratings: {
    position: 'absolute',
    bottom: 33,
    right: 0,
    backgroundColor: 'primary.main',
    padding: '3px',
    borderRadius: '50%',
    scale: '0.8',
  },
  ratingsInner: { position: 'relative', display: 'flex' },
  ratingsTxt: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
