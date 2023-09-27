export const styles = {
  infoAct: {
    display: 'flex',
    alignItems: 'flex-end',
    '.star-contents': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '20px',
      '> span': {
        fontSize: '13px',
        color: '#787878',
        marginBottom: '5px',
      },
    },
    '.act.act-button': {
      display: 'flex',
      width: '250px',
      height: '45px',
      backgroundColor: '#fbfbfb',
      border: '1px solid $color-light-gray',
      borderRadius: '7px',
      cursor: 'pointer',
      '&:hover': {
        '.fa-plus': {
          transform: 'rotate(90deg)',
        },
      },
      '.button-contents': {
        margin: 'auto',
        '> i': {
          marginRight: '10px',
          fontSize: '16px',
          color: '$color-pink',
          transition: 'transform 0.3s ease-in-out',
        },
        '.button-text': {
          fontSize: '18px',
          fontWeight: '600',
          color: '$color-light-black',
        },
      },
    },
    '.act-button': {
      display: 'flex',
      width: '250px',
      height: '45px',
      backgroundColor: '$color-pink',
      borderRadius: '7px',
      cursor: 'pointer',
      '&:hover': {
        '.fa-plus': {
          transform: 'rotate(90deg)',
        },
      },
      '.button-contents': {
        margin: 'auto',
        '> i': {
          marginRight: '10px',

          fontSize: '16px',
          color: '$color-white',
          transition: 'transform 0.3s ease-in-out',
        },
        '.button-text': {
          fontSize: '18px',
          color: '$color-white',
        },
      },
    },
  },
  disappear: {
    display: 'none',
  },
};
