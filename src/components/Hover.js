import React from 'react'

function Hover({ items }) {
    return (
        <figure className="hover-gallery w-full max-w-[25vw] mx-auto rounded-2xl m-4">
            <img src={items[0]} className="w-full h-56 object-cover" />
            <img src={items[1]} className="w-full h-56 object-cover" />
            <img src={items[2]} className="w-full h-56 object-cover" />
            <img src={items[3]} className="w-full h-56 object-cover" />
        </figure>


    )
}

export default Hover