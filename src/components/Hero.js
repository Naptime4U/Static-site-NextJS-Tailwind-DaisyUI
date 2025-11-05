import React from 'react'

function Hero() {
  return (
    <div
      className="relative h-[70vh] w-[50vw] mx-auto bg-cover bg-center flex justify-center items-center overflow-hidden rounded-sm"
      style={{
        backgroundImage:
          "url(hero.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-neutral-content max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome to ACN</h1>
        <p className="mb-5">
          We are an online comunity center around the game Bomb Rush Cyberfunk. Join
          us and have fun!
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>

  )
}

export default Hero