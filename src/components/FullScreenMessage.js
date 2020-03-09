import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

import Lottie from 'react-lottie';
import * as animationData from './pinjump.json'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function SimpleBackdrop({ show, handleClose }) {
  const open = show ? true : false;
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
          isStopped={!open}
          isPaused={false}
          eventListeners={[
            {
              eventName: 'loopComplete',
              callback: () => handleClose(),
            },
          ]}
        />
      </Backdrop>
    </div>
  );
}