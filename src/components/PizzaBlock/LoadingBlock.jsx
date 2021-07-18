import React from 'react';
import ContentLoader from "react-content-loader"


const LoadingBlock = (props) => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="137" cy="120" r="110" />
            <rect x="0" y="247" rx="5" ry="5" width="280" height="24" />
            <rect x="0" y="282" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="379" rx="6" ry="6" width="84" height="38" />
            <rect x="148" y="379" rx="14" ry="14" width="133" height="38" />
        </ContentLoader>
    )
}

export default LoadingBlock
