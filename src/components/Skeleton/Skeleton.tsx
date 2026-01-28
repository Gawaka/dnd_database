import './skeleton.scss';

export function Skeleton() {
    return(
        <div className="wrapper">
            <div className="skeleton">
                <div className="skeleton__inner-shadow">
                <svg 
                    className="skeleton__slot-silhouette" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    <path 
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        fill="transparent" 
                        stroke="#888888" 
                        strokeWidth="0.1"
                        style={{
                                transform: 'scale(0.7)',
                                transformOrigin: 'center',
                                transformBox: 'fill-box',
                                filter: "drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.8))"
                            }}
                    />
                </svg>
                </div>
                <p className='skeleton__label'>Select a hero</p>
            </div>
        </div>
    )
}