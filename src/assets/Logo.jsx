import React from "react";

const Logo = ({ color = "#000", width, height }) => {
  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448.62 436.49"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`.cls-logo {
            fill: ${color || "#000"};
            stroke: #000;
          }`}
        </style>
      </defs>
      <path
        className="cls-logo"
        d="m171.91,244.17c1.64,1.54,4.15.57,4.64-1.79.24-1.15.5-2.23.85-3.26,1.95-5.75,3.54-11.76,6.32-17.06,8.19-15.6,22.75-22.35,39.3-18.34,13.29,3.22,23.76,10.99,31.14,23.03,3.41,5.56,5.38,11.72,4.98,18.38-.54,9-5.01,15.65-12.19,20.42-7.33,4.86-15.56,6.89-24.01,8.13-9.09,1.33-18.2,1.63-27.31.12h-.04c-2.25-.38-3.96,2.26-2.98,4.6,1.22,2.94,3.43,4.98,6.48,6.22,2.67,1.08,5.68,1.33,8.57,1.73.87.12,1.76.13,2.7.11,1.61-.03,2.94,1.44,2.94,3.28v10.04c0,1.62-1.04,3.03-2.45,3.24-12.73,1.87-31.1-4.57-35.31-24.64-.38-1.83-1.04-3.75-.82-5.52.61-4.9-2.07-7.08-5.59-9.47-14.74-10.03-23.53-24.57-26.63-42.36-5.1-29.25,2.11-55.1,22.21-76.43,14.18-15.05,31.99-21.83,51.98-22.78,11.18-.53,22.17,1.11,32.9,4.22,17.23,5,33.66,12.1,48.58,22.44,6.89,4.78,13.59,10.16,19.39,16.28,19.7,20.77,25.06,45.45,16.82,73.33-3.45,11.67-9.04,22.22-15.89,32.06-13.4,19.28-30.24,34.74-49.3,47.62-22.99,15.53-47.74,26.57-74.92,31.1-14.3,2.38-28.63,2.55-42.8-.95-26.9-6.65-44.9-23.84-54.44-50.76-6.62-18.67-8.2-38.13-7.45-57.82.96-24.93,5.29-49.34,11.36-73.43,0,0,0-.02,0-.03.49-1.92,2.25-3.04,3.95-2.58,2.59.7,5.16,1.39,7.77,2.09,2.53,.68,4.08,3.59,3.43,6.45-1.42,6.33-2.82,12.41-4.05,18.53-4.22,20.87-7.01,41.92-6.27,63.32.41,11.95,2,23.72,5.72,35.1,9.04,27.63,29.16,43.26,57.14,44.64,16.38,.81,32.21-2.03,47.62-7.52,28.72-10.22,54.02-26.32,75.44-48.83,10.54-11.08,19.41-23.43,25.12-38.02,9.5-24.29,5.19-46.28-12.86-64.43-3.74-3.76-7.82-7.28-12.16-10.25-18.91-12.97-39.33-22.26-61.95-25.07-40.45-5.01-66.44,20.8-71.84,54.39-2.27,14.13-.72,27.86,6.34,40.5,2.02,3.62,4.37,6.95,7.59,9.97Zm19.68,8.36c-.15,1.56,.7,3.01,2.01,3.49,.55,.2,1.08,.37,1.63,.49,7.91,1.69,15.91,1.79,23.84,.57,5.12-.79,10.33-1.86,15.14-3.79,9.5-3.81,11.17-10.6,5.16-19.28-4.64-6.7-10.88-11.2-18.51-13.43-9.84-2.88-17.7,.41-22.91,9.62-3.88,6.86-5.6,14.36-6.35,22.33Z"
      />
      <path
        className="cls-logo"
        d="m289.8,99.09c-2.44-1.46-3.6-2.69-5.43-3.78-2.27-1.35-2.09-7.75-.67-10.17h0c9.57-16.24,19.17-32.45,28.74-48.69,6.15-10.44,12.34-20.85,18.35-31.38C332.65,1.83,335.01-.03,338.64,0c5.79.04,9.53,5.83,7.32,11.41-.49,1.25-1.21,2.41-1.9,3.57-9.1,15.34-18.26,30.64-27.32,46-6.5,11.01-12.88,22.1-19.31,33.16-.04,.06-.07,.13-.11,.19-1.25,2.13-5.53,5.95-7.52,4.76Z"
      />
      <path
        className="cls-logo"
        d="m292.09,340.77c2.32-1.25,2.81-1.58,4.97-2.99,2.15-1.41,4.96-.59,6.26,1.81h0c11.84,22.15,23.69,44.29,35.49,66.46,3.33,6.25,6.58,12.54,9.74,18.88,1.93,3.87,.52,8.23-3.16,10.42-3.78,2.26-9.19,1.06-11.18-2.68-14.81-27.82-29.58-55.67-44.35-83.51h0c-1.59-2.99-.55-6.9,2.23-8.39Z"
      />
      <path
        className="cls-logo"
        d="m365.37,217.37c-2.53.24-4.78-1.83-5.1-4.7-.24-2.19-.46-4.22-.64-6.26h0c-.25-2.85,1.57-5.4,4.08-5.7,3.57-.44,7.15-.88,10.73-1.13,11.87-.81,23.75-1.39,35.62-2.14,9.26-.59,18.53-1.26,27.78-1.98,2.66-.21,5.18-.3,7.39,1.66,2.73,2.42,4.07,5.42,3.08,9.05-.98,3.56-3.4,5.78-7.05,6.08-8.44,.71-16.89,1.43-25.34,1.96-13.66,.85-27.33,1.52-40.99,2.35-3.13,.19-6.25,.49-9.55,.81Z"
      />
      <path
        className="cls-logo"
        d="m52.96,225.17c1.87.06,3.4,1.85,3.41,3.98,.01,2.67,.01,5.28-.03,7.89,0,.54-.04,1.08-.09,1.62-.14,1.54-1.06,2.89-2.38,3.29-.14.04-.28.07-.41.07-14.7-.31-29.21,1.81-43.75,3.65-5.57,.7-10.04-3.54-9.69-9.2,.22-3.57,2.45-6.88,5.8-7.25,15.68-1.76,28.44-4.1,47.14-4.05h0Z"
      />
      <path
        className="cls-logo"
        d="m140.7,67.6c1.57,2.45,1.02,5.82-1.22,7.48l-.93.69c-1.09.81-2.19,1.61-3.31,2.43-3.2,2.33-7.46,1.18-9.39-2.54h0c-6.08-11.65-13.86-23.36-19.6-35.2-2.12-4.38-.36-8.77,3.61-10.78,4.25-2.15,8.84-.54,11.19,3.96,5.45,10.46,14.28,24.5,19.18,33.2,.9,1.62,.47.76,.47.76Z"
      />
      <path
        className="cls-logo"
        d="m122.85,381.29c.22.25,.45,.5,.67,.75,2.69,3.01,2.98,7.85,.62,11.21-6.96,9.91-11.75,21.07-17.64,31.56-1.96,3.49-7.18,4.64-10.74,2.52-3.42-2.04-5.31-7.15-3.51-10.47,5.85-10.8,11.72-21.58,17.86-32.19,.6-1.05,1.3-2.03,2.06-3,2.79-3.58,7.67-3.72,10.67-.37Z"
      />
    </svg>
  );
};

export default Logo;
