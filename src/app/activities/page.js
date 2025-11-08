import React from 'react'
import Hover from '../../components/Hover'
import InteractiveStack from '../../components/InteractiveStack'

function page() {
    return (
        <div className="w-[90vw] bg-blue-950/80 p-4 m-4 flex flex-col mx-auto rounded-lg text-white">
    <div className='bg-blue-950/80 rounded-2xl p-4 m-4'>
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-center wrap-break-word m-4">
            Takeovers
        </h1>
        <p>
            Takeovers are our weekly most known activity. During a takeover people will gather around different maps every week. Takeover are meant to meet people and have fun
            doing different activities such as chat, score battles g-racing and more.
        </p>
        <p>
            While being a great opportunity to meet new people and have fun, takeovers are also useful for ACN in order to gather every player skin so your CrewBoom folder keeps updated with the latest skins.
        </p>
        <p>
            You can find the channel to upload your skins in the Freesoul Discord Server and all the information related to them will be posted on the Announcement channel.
        </p>

        <div className='flex flex-wrap justify-center'> {/* <-- Solo esto cambia */}
            <Hover items={['img/glorpTK.png', 'img/glorpTK2.png', 'img/glorpTK3.jpg', 'img/glorpTK4.png']} />
            <Hover items={['img/havenTK.png', 'img/havenTK2.JGP', 'img/havenTK3.png', 'img/havenTK4.JGP']} />
        </div>
    </div>

    <div className='bg-blue-950/80 rounded-2xl p-4 m-4'>
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-center wrap-break-word m-4">
            Raves
        </h1>
        <p>
            Once every months instead of a takeover we have an special event called Raves. Raves are takeovers but way cooler and more fun! Instead of just hang around every body tunes in to the 
            Funky Uncle FM, our own and always live radio station.
        </p>
        <p>
            Instead of just blasting the regular playlist through the radio we live stream a set crafted by our own associated DJs specifically for us.
        </p>
        <p>
            Also at they're more rare than regular takeovers more people show up to the rave. Raves are our biggest group up event and are your greatest opportunity to meet new people.
            But be aware that you will most likely be vibing at 20fps due to the ammount of players in the map. G-Racing during a Rave is diabolical.
        </p>

        <div className='flex flex-wrap justify-center'> {/* <-- Solo esto cambia */}
            <InteractiveStack activities={[
                {image:'img/rave1.png'},
                {image:'img/rave2.png'},
                {image:'img/rave3.png'},
                {image:'img/rave4.png'}
            ]} />
        </div>
    </div>
</div>

    )
}

export default page