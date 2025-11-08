import React from 'react'

function Carousel() {
    return (
        <div className="carousel w-full max-w-xl sm:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">

            <div id="slide1" className="carousel-item relative w-full h-80 sm:h-96">
                <img
                    src="img/ROK.png"
                    className="object-cover object-center w-full h-full"
                />
                <h1 className="absolute top-0 left-0 w-full text-3xl sm:text-4xl font-bold text-center text-white bg-black/60 py-2">
                    ROK
                </h1>
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-80 sm:h-96">
                <img
                    src="img/GF.png"
                    className="object-cover object-center w-full h-full"
                />
                <h1 className="absolute top-0 left-0 w-full text-3xl sm:text-4xl font-bold text-center text-white bg-black/60 py-2">
                    GOON FORCE
                </h1>
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-80 sm:h-96">
                <img
                    src="img/GCN.png"
                    className="object-cover object-center w-full h-full"
                />
                <h1 className="absolute top-0 left-0 w-full text-3xl sm:text-4xl font-bold text-center text-white bg-black/60 py-2">
                    GOON CUBE NETWORK
                </h1>
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Carousel