import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const SCROLLbar = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: 'rgba(180, 160, 255, 0.5)',
            borderRadius: '4px',
          }}
        />
      )}
    >
    </Scrollbars>
  );
};

export default SCROLLbar;
