import React, { Component } from 'react';
import Star from '../../public/assets/icons/star4.svg';
import { styles as classes } from './InfoAct.styles';
import { Box, Grid, Typography } from '@mui/material';

type InfoActProps = {
  onClick: (index: number) => void;
  onClickBtn: () => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  ratingComment: (rating: number) => string;
  setHoverRating: number;
  setRating: number;
  clickBtn: boolean;
};

const InfoAct = ({
  onClick,
  onClickBtn,
  onMouseEnter,
  onMouseLeave,
  ratingComment,
  setHoverRating,
  setRating,
  clickBtn,
}: InfoActProps) => {
  // const {
  //   onMouseEnter,
  //   onMouseLeave,
  //   ratingComment,
  //   setHoverRating,
  //   setRating,
  //   clickBtn,
  // } = this.props;

  const rightStyle = { transform: 'scaleX(-1)' };

  return (
    <Box sx={classes.infoAct}>
      <button
        className={clickBtn ? 'act act-button' : 'act-button'}
        onClick={onClickBtn}
      >
        <div className='button-contents'>
          <i className={clickBtn ? 'fas fa-bookmark' : 'fas fa-plus'}></i>
          <span className='button-text'>보고싶어요</span>
        </div>
      </button>
      <div className='star-contents'>
        {/* <span>{ratingComment(setRating)}</span> */}
        <ul className='stars'>
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <React.Fragment key={index}>
                <Star
                  index={index}
                  onClick={() => onClick(index - 0.5)}
                  onMouseEnter={() => onMouseEnter(index - 0.5)}
                  onMouseLeave={onMouseLeave}
                  width='20px'
                  fill={
                    setRating < index - 0.5
                      ? setHoverRating < index - 0.5
                        ? '#eeeeee'
                        : '#FEDD63'
                      : '#FEDD63'
                  }
                />
                <Star
                  index={index}
                  onClick={() => onClick(index)}
                  onMouseEnter={() => onMouseEnter(index)}
                  onMouseLeave={onMouseLeave}
                  width='20px'
                  style={rightStyle}
                  fill={
                    setRating < index
                      ? setHoverRating < index
                        ? '#eeeeee'
                        : '#FEDD63'
                      : '#FEDD63'
                  }
                />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </Box>
  );
};

export default InfoAct;
