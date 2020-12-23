import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="139" cy="122" r="122" />
      <rect x="1" y="259" rx="6" ry="6" width="280" height="26" />
      <rect x="1" y="301" rx="10" ry="10" width="280" height="74" />
      <rect x="107" y="393" rx="27" ry="27" width="171" height="53" />
      <rect x="1" y="403" rx="6" ry="6" width="85" height="33" />
    </ContentLoader>
  );
}

export default LoadingBlock;
