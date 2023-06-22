import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { PricingCard } from "@/components/coding_cubes/pricing_card"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <>
      <div className="w-[1920px] h-[1844px] relative bg-zinc-800 shadow">
        <div className="w-[1920px] h-[69px] left-[0px] top-[0px] absolute">
          <div className="w-[1920px] h-[69px] left-[0px] top-[0px] absolute bg-neutral-800" />
          <div className="w-[577px] h-[29px] left-[186px] top-[20px] absolute">
            <div className="left-[223px] top-[0px] absolute text-stone-300 text-[24px] font-bold">
              PROJECTS
            </div>
            <div className="left-[0px] top-[0px] absolute text-stone-300 text-[24px] font-bold">
              EXPLORE
            </div>
            <div className="left-[465px] top-[0px] absolute text-stone-300 text-[24px] font-bold">
              LESSONS
            </div>
          </div>
          <div className="w-[189px] h-[35px] left-[1313px] top-[17px] absolute">
            <div className="w-[189px] h-[35px] left-[0px] top-[0px] absolute bg-yellow-400 rounded-2xl" />
            <div className="left-[64px] top-[7px] absolute text-amber-100 text-[20px] font-bold">
              PREMIUM
            </div>
          </div>
          <div className="w-[255px] h-[29px] left-[1584px] top-[20px] absolute">
            <div className="left-[0px] top-[0px] absolute text-stone-300 text-[24px] font-bold">
              SIGN UP
            </div>
            <div className="left-[180px] top-[0px] absolute text-amber-300 text-[24px] font-bold">
              LOGIN
            </div>
          </div>
        </div>
        <div className="w-6 h-6 left-[89px] top-[20px] absolute" />
        <div className="w-[1763px] h-[1369px] left-[76px] top-[429px] absolute">
          <div className="w-[1763px] h-[99px] left-[0px] top-[0px] absolute bg-neutral-800" />
          <div className="w-[25px] h-[1271px] left-[1738px] top-[98px] absolute bg-neutral-800" />
          <div className="w-[25px] h-[1271px] left-[0px] top-[98px] absolute bg-neutral-800" />
          <div className="w-[25px] h-[1738px] left-[1763px] top-[1344px] absolute origin-top-left rotate-90 bg-neutral-800" />
        </div>
        <div className="w-[25px] h-[86px] left-[1814px] top-[574px] absolute bg-neutral-900" />
        <div className="w-[427px] h-[99px] left-[76px] top-[429px] absolute bg-zinc-900" />
        <div className="w-[1064px] h-[39px] left-[181px] top-[459px] absolute">
          <div className="left-[0px] top-[0px] absolute text-white text-[31.8885440826416px] font-bold">
            DESCRIPTION
          </div>
          <div className="left-[424px] top-[0px] absolute text-white text-[31.8885440826416px] font-bold">
            SUBMISSIONS
          </div>
          <div className="left-[864px] top-[0px] absolute text-white text-[31.8885440826416px] font-bold">
            DISCUSSION
          </div>
        </div>
        <div className="w-[1492px] h-[690px] left-[212px] top-[1130px] absolute">
          <div className="w-[1492px] left-[0px] top-[0px] absolute">
            <span className="text-white text-[36px] font-bold leading-10">
              User Interface
              <br />
            </span>
            <span className="text-white text-[36px] font-medium leading-10">
              Design and implement a visually appealing and intuitive graphical
              user interface (GUI) for the Tic Tac Toe game.
              <br />
              Display the game board grid consisting of cells where players can
              make their moves.
              <br />
              Highlight the cells that form a winning combination when a player
              wins.
              <br />
              Show a message or dialog box indicating the game result (win,
              draw, or in progress).
            </span>
          </div>
          <div className="w-[1492px] left-[0px] top-[516px] absolute">
            <span className="text-white text-[36px] font-bold leading-10">
              Game Logic
              <br />
            </span>
            <span className="text-white text-[36px] font-medium leading-10">
              Implement the core logic of the Tic Tac Toe game using a suitable
              programming
              <br />
            </span>
          </div>
        </div>
        <div className="left-[172px] top-[1046px] absolute text-white text-[36px] font-extrabold leading-10">
          INSTRUCTIONS
        </div>
        <div className="w-[1635px] h-[342px] left-[140px] top-[646px] absolute">
          <div className="w-[1635px] h-[342px] left-[0px] top-[0px] absolute bg-neutral-700 rounded-[25px]" />
          <div className="left-[75px] top-[26px] absolute text-white text-[28px] font-medium leading-10">
            User Interface Design and Development
            <br />
            Game Logic Implementation
            <br />
            Input Handling
            <br />
            Artificial Intelligence (optional)
            <br />
            Score keeping and Statistics (optional)
          </div>
          <div className="w-[282px] h-[282px] left-[1292px] top-[31px] absolute bg-zinc-300 bg-opacity-10 rounded-[25px] shadow" />
          <div className="w-[241px] h-[241px] left-[1313px] top-[52px] absolute" />
        </div>
        <div className="left-[172px] top-[567px] absolute text-white text-[36px] font-extrabold leading-10">
          SKILLS REQUIRED
        </div>
        <div className="w-[1767px] h-[265px] left-[76px] top-[106px] absolute">
          <div className="w-[1767px] h-[265px] left-[0px] top-[0px] absolute bg-neutral-800 rounded-[25px] shadow" />
          <div className="w-[206px] h-[81.32px] left-[53px] top-[149px] absolute">
            <div className="w-[206px] h-[81.32px] left-[0px] top-[0px] absolute bg-green-200 bg-opacity-60 rounded-[25px]" />
            <div className="left-[43.37px] top-[13.55px] absolute text-green-950 text-[43.3684196472168px] font-semibold">
              EASY
            </div>
          </div>
          <div className="left-[23px] top-[36px] absolute text-white text-[72px] font-bold">
            TIC TAC TOE
          </div>
          <div className="w-[121.82px] h-12 left-[1596px] top-[181px] absolute">
            <div className="left-[55.82px] top-[4.62px] absolute text-zinc-400 text-[31.8885440826416px] font-bold">
              1.2K
            </div>
            <div className="w-12 h-12 left-[0px] top-[0px] absolute" />
          </div>
          <div className="w-[60px] h-[60px] left-[1658px] top-[50px] absolute" />
        </div>
      </div>
    </>
  )
}
