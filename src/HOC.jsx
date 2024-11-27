import React from "react";

const WithLoader=(WrappedComponent)=>{
    return function withLoaderComponent ({isLoading,...props} ){
        if(isLoading)
            return <h1>Loading....</h1>
        return <WrappedComponent {...props} />
    }
}

export default WithLoader