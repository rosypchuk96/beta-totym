import React from 'react';

function UploadIcon(props) {
  const { fill = '#C7C7C7' } = props;
  return (
    <svg
      viewBox="0 0 94 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 12.6667V0.916748H20.4167V12.6667H32.6667V20.5001H20.4167V32.2501H12.25V20.5001H0V12.6667H12.25ZM24.5 36.1668V24.4167H36.75V12.6667H65.3333L72.8058 20.5001H85.75C90.2417 20.5001 93.9167 24.0251 93.9167 28.3334V75.3334C93.9167 79.6418 90.2417 83.1668 85.75 83.1668H20.4167C15.925 83.1668 12.25 79.6418 12.25 75.3334V36.1668H24.5ZM53.0833 71.4168C64.3533 71.4168 73.5 62.6434 73.5 51.8334C73.5 41.0234 64.3533 32.2501 53.0833 32.2501C41.8133 32.2501 32.6667 41.0234 32.6667 51.8334C32.6667 62.6434 41.8133 71.4168 53.0833 71.4168ZM40.0167 51.8334C40.0167 58.7659 45.8558 64.3668 53.0833 64.3668C60.3108 64.3668 66.15 58.7659 66.15 51.8334C66.15 44.9009 60.3108 39.3001 53.0833 39.3001C45.8558 39.3001 40.0167 44.9009 40.0167 51.8334Z"
        fill={props.fill}
      />
    </svg>
  );
}

export default UploadIcon;