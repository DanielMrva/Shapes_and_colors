import React from "react";

const styles = {
    gradient: {
        background: 
        `
        linear-gradient(65deg, rgba(63,135,166,.75) 10%, rgba(235,248,225,.5) 10% 35%, rgba(246,157,60,.5) 35% 75%, rgba(133,20,199,.5) 75% 100%),

        linear-gradient(55deg, rgba(200,195,7,.5) 37%, rgba(57,195,25,.5) 37% 70%, rgba(10,195,225,.5) 70% 100%),

        linear-gradient(15deg, rgba(193,95,166,.5) 33%, rgba(223,148,225,.5) 33% 66%, rgba(26,57,60,.5) 66% 100%),

        linear-gradient(10deg, rgba(88,55,216,.5) 45%, rgba(203,198,65,.5) 45% 100%),

        linear-gradient(45deg, rgba(78,55,5,.5) 50%, rgba(203,198,65,0) 50% 100%),

        linear-gradient(-45deg, rgba(5,155,95,0) 50%, rgba(5,155,195,.5) 50% 100%)
       
        `
        ,
        // background: 'linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)',
        // -webkit-background-size: 'cover',
        // -moz-background-size: 'cover',
        // -o-background-size: 'cover',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        zIndex: 0
    },
    gradient2: {
        background: 'linear-gradient(65deg, rgba(63,135,166,.5) 33% , rgba(235,248,225,.5) 33% 66%, rgba(246,157,60,.5) 66% 100%)',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        zIndex: 1
    }
}

const BackgroundOne = () => {
    return (
        <>
            {/* <div className="background-one background-cover child" style={styles.gradient2}>
                <h1>This is bg2</h1>
            </div> */}
            <div className="background-one background-cover child" style={styles.gradient}>
                <h1>This is bg1</h1>
            </div>

        </>
    )
}

export default BackgroundOne;