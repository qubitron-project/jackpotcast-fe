import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import { Box } from '@mui/material';
import { styles as classes } from './YoutubePlayer.styles';

interface YoutubePlayerProps {
  link: string;
  start?: number;
  end?: number;
  width?: string;
  height?: string;
  isLight?: boolean;
}

const YoutubePlayer = ({
  link,
  start,
  end,
  width = '100%',
  height = '100%',
  isLight = false,
}: YoutubePlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [hideImage, setHideImage] = useState(true);
  const [muted, setMuted] = useState(true);
  const playerRef = useRef<ReactPlayer>(null);
  const handleEnded = (start: number) => {
    playerRef.current?.seekTo(start ?? 0);
  };

  const isLoaded = () => {
    console.log('Is loaded...');
    setHideImage(true);
  };

  return !hideImage ? (
    <img src={`https://img.youtube.com/vi/${link}/0.jpg`} alt='Thumbnail' />
  ) : (
    <Box sx={classes.playerWrapper}>
      <ReactPlayer
        ref={playerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        light={isLight}
        url={`https://www.youtube.com/embed/${link}/?modestbranding?controls=0?rel=0?start=${start}&end=${end}`}
        muted
        playing={true}
        events={{
          onClick: () => {},

          onMouseEnter: () => {
            setMuted(false);
            console.log('mouseover');
          },
          onMouseLeave: () => {
            setMuted(true);
            console.log('mouseout');
          },
        }}
        onStart={isLoaded}
        onEnded={() => {
          console.log('Play again from the beginning!');
          handleEnded(start ?? 0);
        }}
        // loop={true}
        controls={false}
        width={width}
        height={height}
      />
    </Box>
  );
};

export default YoutubePlayer;
