import React, { useState, useEffect } from 'react';
import { del } from "./axios/api.js"

function Delete({ _id }) {
    async function remove() {
        let res = await del(_id);
        window.location.reload();
    }
    
    return (
        <button onClick={remove} className="btn btn-danger btn-sm w-100">
            Delete
        </button>
    )
}

export default Delete;