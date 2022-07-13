import React from "react";

const styles = {
    gradient: {
        background: `linear-gradient(to right, rgba(63,135,166,1) 33% , rgba(235,248,225,1) 33% 66%, rgba(246,157,60,1) 66% 100%
        `,
        // background: 'linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)',
        // -webkit-background-size: 'cover',
        // -moz-background-size: 'cover',
        // -o-background-size: 'cover',
        backgroundSize: 'cover',
        height: '100vh'
    }
}

const BackgroundOne = () => {
    return (
        <div className="background-one background-cover" style={styles.gradient}>
            <h1>This is text</h1>
        </div>
    )
}

export default BackgroundOne;