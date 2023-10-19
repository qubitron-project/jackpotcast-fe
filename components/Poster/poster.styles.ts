export const styles = {
  poster: {
    position: 'relative',
    color: 'secondary.main',
    width: '20vw',
    aspectRatio: '16/9',

    '& .poster-img': {
      borderRadius: '8px',
    },
    '&:hover': {
      color: '#fff',
    },
    '@media (max-width: 1920px)': {
      width: '10vw',
    },
    '@media (max-width: 900px)': {},
    '@media (max-width: 600px)': {},
  },
  posterUp: {
    position: 'relative',
    width: '18vw',
    aspectRatio: '16/9',
    '@media (max-width: 1920px)': {
      width: '18vw',
    },
    '@media (max-width: 900px)': {
      width: '45vw',
    },
    '@media (max-width: 600px)': {
      width: '90vw',
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
      fontSize: '2.2rem',
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
