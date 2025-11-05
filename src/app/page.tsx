import Image from "next/image";
import Hero from "@/components/Hero";
import Accordion from "@/components/Accordion";

let items = [
  {
    title: "What is ACN?",
    parts: [
      {
        type: "text",
        value: `
              All City Network is an online community centered around the game Bomb Rush Cyberfunk and Movement+.
              We are full of talented people who want to improve the game or are cracked at it someway or another.
              Among our activities we have weekly events, monthly parties, graffity racing, clip farming and more to come.
        `,
      },
      {
        type: "stack",
        activities: [
          { name: "Weekly Takeovers", description: "Comunity gathering where we realease a pack with the latest skins.", image: "gif/Takeover.gif" },
          { name: "Monthly Parties", description: "Big themed gatherings with live music brought by our associated DJs.", image: "gif/Rave.gif" },
          { name: "Graffity Racing", description: "Speed and style meet in paint-tagging races across the city.", image: "gif/G-Race.gif" },
          { name: "Clip Contests", description: "Share your best tricks and moments for everyone to enjoy.", image: "gif/Gotw.gif" },
        ],
      },
      {
        type: "text",
        value: `
              If you want to take part, our main gathering point for organizing activities is our Discord server Freesoul where
              you can find all the info you need. We are a welcoming community and a safe space for everyone who wants to have fun.
              `,
      },
      {
        type: "stack",
        activities: [
          { name: "Freesoul", image: "img/freesoul.png" },
        ]
      },
      {
        type: "text",
        value: `              
              Additionally, you can take part on the crew system and join a crew, make your own one or just remain bossing up alone.
              The crew system is a way to improve bonding between people who already have established a relationship with each other
              and have the goal to make you feel more included in the community.
              You can find our main crews on the crew tab of this website. Joining a crew though is not really necessary and you need
              to be spotted by a crew leader or a member of the crew to join.
              The most known crews right now are:
              `,
      },
      {
        type: "stack",
        activities: [
          {image: "img/rok.png" },
          {image: "img/gf.png" },
          {image: "img/gcn.png" },
        ]
      },
    ],
  },
  {
    title: "Modding community",
    parts: [
      {
        type: "text",
        value: `
              As you may know, due to all the clips of famous characters doing stuns going viral every once in a while,
              we have a very dedicated and talented modding community.We do all kinds of stuff: from porting popular characters
              to the game, making your own character, adding new maps or new versions of the vanilla ones, to even adding new ways
              to play the game such as new movement systems or new cameras.You can find a lot of this content on GameBanana,
              but for the full experience, every release of a new mod is posted in our Discord server.
        `,
      },
      {
        type: "stack",
        activities: [
          { name: "GameBanana", image: "img/gamebanana.png" },
          { name: "R2Modman", image: "img/r2mod.png" },
        ]
      },
    ],
  },
  {
    title: "Community content",
    parts: [
      {
        type: "text",
        value: `
              Aside from all the modding work, we also have a bunch of people who just enjoy the game and want to share that with everyone.
              From taking awesome pictures to sharing the best moments of the meetups, funny clips, modding tutorials, and more.
        `,
      },
    ],
  },
];


export default function Home() {
  return (
    <div>
      <div className=" w-[90vw] bg-blue-950/80 p-4 m-4 flex flex-col mx-auto rounded-lg text-white">
        <Hero />
        <Accordion items={items} />
      </div>
    </div>
  );
}
