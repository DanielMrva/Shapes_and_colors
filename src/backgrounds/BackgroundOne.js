import React from "react";

const styles = {
    gradient: {
        background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
        // -webkit-background-size: 'cover',
        // -moz-background-size: 'cover',
        // -o-background-size: 'cover',
        backgroundSize: 'cover',
        height: '100%'

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