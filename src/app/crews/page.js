import React from 'react'
import Carousel from '../../components/Carousel'
import TableZebra from '../../components/TableZebra'

function page() {
    return (
        <>
            <div className="w-[90vw] bg-blue-950/80 p-4 m-4 flex flex-col mx-auto rounded-lg text-white">
                <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-center wrap-break-word m-4">
                    Most acknowledged Crews
                </h1>
                <Carousel />
                <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-center wrap-break-word m-4">
                    Other Crews
                </h1>
                <TableZebra />
            </div>
        </>

    )
}

export default page