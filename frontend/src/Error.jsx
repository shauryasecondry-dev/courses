import React from 'react';
function Error({SuccessError}){
return(
    <>
    {(SuccessError.status!=200 && SuccessError.status!=null)?
    <div className="alert alert-danger" role="alert">
        {SuccessError.message}
    </div>:(SuccessError.status==200 && SuccessError.status!=null)?
    <div className="alert alert-success" role="alert">
        {SuccessError.message}
    </div>:""}
    </>
)
}
export default Error;