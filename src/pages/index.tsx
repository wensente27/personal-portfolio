/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Social from "../components/Social";
import Button from "../components/Button";
import Information from "../components/Information";
import Status from "../components/Status";

/* Import types */
import type { NextPage } from "next";

const faces = [
  '( ˶ˆᗜˆ˵ )',
  '(￢‿￢ )',
  '(*￣▽￣)b',
  '(￣▽￣)',
  '<(￣︶￣)>',
  '(＾◡＾)',
]

const randomFace = faces[Math.floor(Math.random() * faces.length)]

const Home: NextPage = () => (  
  <div className="grid min-h-screen p-6 space-y-6 md:space-y-0 md:p-0 md:grid-cols-2 bg-[#171717]">
    <div className="flex items-center justify-center">
      <div className="space-y-4 md:space-y-10">
        <div>
          <h1 className="text-3xl font-semibold text-[#D4D4D4] md:text-5xl">
            I'm <span className="text-[#737373]">Eli</span> {randomFace}
          </h1>
          <h2 className="text-xl text-[#737373] md:text-3xl">
            Front-end developer from {' '}
            <Image
            src="/ph.svg"
            height="25px"
            width="25px"
            alt="Flag"
            draggable="false"
            />
          </h2>
        </div>

        <div className="text-[#737373] md:text-xl">
          <p>I'm currenty in High School.</p>
          <p>I hope that I'll be able to learn full-stack in the near future.</p>
        </div>

        <Button href="https://r-s-s.vercel.app" target="_blank">
            Latest Project — R.S.S
        </Button>
      </div>
    </div>

    <div className="grid grid-rows-2 space-y-6 shadow-lg md:space-y-0">
      <div
        className="flex items-center justify-center truncate md:px-10"
        style={{
          backgroundImage: "url('/gradient.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Status />
      </div>

      <div className="items-center justify-center bg-[#010101] md:space-x-6 md:flex">
        <div className="items-center p-4 space-x-4 bg-[#101010] md:rounded md:flex">
          <Image
            className="rounded-xl"
            src="/av.jpg"
            height="150px"
            width="150px"
            alt="Memoji"
            draggable="false"
          />

          <div className="space-y-2">
            <Information />
          </div>
        </div>

        <div className="flex justify-center my-4 space-x-4 md:space-x-0 md:block md:space-y-2">
          <Social />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
