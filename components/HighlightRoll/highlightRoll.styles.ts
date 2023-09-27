export const styles = {
  clipRoll: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    overflowX: 'auto',
    margin: '10px 0',
    pb: '4px',
    scrollbarColor: '#616161 transparent',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#616161',
    },
  },
  headTxt: {
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '18px',
    },
  },
  clipItem: {
    position: 'relative',
    width: '640px',
    overflow: 'hidden',
    flex: 'none',
    marginRight: '18px',
    borderRadius: '10px',
    '& .clipLink': {
      width: 'inherit',
      height: 'inherit',
    },
    '@media (max-width: 900px)': {
      width: '456px',
    },
    '@media (max-width: 600px)': {
      width: '356px',
    },

    '@media (max-width: 480px)': {
      width: '356px',
    },
  },
  clipThumb: {
    width: 'inherit',
    height: 'inherit',
    position: 'relative',
  },
  ytLogo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%,-50%)',
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
  },
  ytLogoIco: {
    fontSize: '55px',
    color: 'red',
  },
};
