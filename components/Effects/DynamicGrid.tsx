const DynamicGrid = () => (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" aria-hidden="true">
        <linearGradient id="grid-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0.2" />
          <stop offset="20%" stop-color="currentColor" stop-opacity="0.4" />
          <stop offset="50%" stop-color="currentColor" stop-opacity="0.6" />
          <stop offset="80%" stop-color="currentColor" stop-opacity="0.4" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0.2" />
        </linearGradient>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-gradient)"
          rx="8"
          ry="8"
          transform-origin="top left"
          transform="skewX(-10deg)"
        >
          <animate
            attributeName="transform"
            dur="10s"
            repeatCount="indefinite"
            keyTimes="0;0.5;1"
            values="skewX(-10deg);skewX(10deg);skewX(-10deg)"
          />
        </rect>
      </svg>
    </div>
  );
  
  export default DynamicGrid;
