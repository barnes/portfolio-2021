import React from 'react'

export default function Project({ data }) {
    console.log(data)
    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}
