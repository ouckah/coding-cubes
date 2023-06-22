import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PricingCard } from "@/components/coding_cubes/pricing_card";
import { Icons } from "@/components/icons";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <>
      <div className="relative h-[1844px] w-[1920px] bg-zinc-800 shadow">
        <div className="absolute left-[0px] top-[0px] h-[69px] w-[1920px]">
          <div className="absolute left-[0px] top-[0px] h-[69px] w-[1920px] bg-neutral-800" />
          <div className="absolute left-[186px] top-[20px] h-[29px] w-[577px]">
            <div className="absolute left-[223px] top-[0px] text-[24px] font-bold text-stone-300">
              PROJECTS
            </div>
            <div className="absolute left-[0px] top-[0px] text-[24px] font-bold text-stone-300">
              EXPLORE
            </div>
            <div className="absolute left-[465px] top-[0px] text-[24px] font-bold text-stone-300">
              LESSON
            </div>
          </div>
          <div className="absolute left-[1313px] top-[17px] h-[35px] w-[189px]">
            <div className="absolute left-[0px] top-[0px] h-[35px] w-[189px] rounded-2xl bg-yellow-400" />
            <div className="absolute left-[64px] top-[7px] text-[20px] font-bold text-amber-100">
              PREMIUM
            </div>
          </div>
          <div className="absolute left-[1584px] top-[20px] h-[29px] w-[255px]">
            <div className="absolute left-[0px] top-[0px] text-[24px] font-bold text-stone-300">
              SIGN UP
            </div>
            <div className="absolute left-[180px] top-[0px] text-[24px] font-bold text-amber-300">
              LOGIN
            </div>
          </div>
        </div>
        <div className="absolute left-[89px] top-[20px] h-6 w-6" />
        <div className="absolute left-[76px] top-[429px] h-[1369px] w-[1763px]">
          <div className="absolute left-[0px] top-[0px] h-[99px] w-[1763px] bg-neutral-800" />
          <div className="absolute left-[1738px] top-[98px] h-[1271px] w-[25px] bg-neutral-800" />
          <div className="absolute left-[0px] top-[98px] h-[1271px] w-[25px] bg-neutral-800" />
          <div className="absolute left-[1763px] top-[1344px] h-[1738px] w-[25px] origin-top-left rotate-90 bg-neutral-800" />
        </div>
        <div className="absolute left-[1814px] top-[574px] h-[86px] w-[25px] bg-neutral-900" />
        <div className="absolute left-[76px] top-[429px] h-[99px] w-[427px] bg-zinc-900" />
        <div className="absolute left-[181px] top-[459px] h-[39px] w-[1064px]">
          <div className="absolute left-[0px] top-[0px] text-[31.8885440826416px] font-bold text-white">
            DESCRIPTION
          </div>
          <div className="absolute left-[424px] top-[0px] text-[31.8885440826416px] font-bold text-white">
            SUBMISSIONS
          </div>
          <div className="absolute left-[864px] top-[0px] text-[31.8885440826416px] font-bold text-white">
            DISCUSSION
          </div>
        </div>
        <div className="absolute left-[212px] top-[1130px] h-[690px] w-[1492px]">
          <div className="absolute left-[0px] top-[0px] w-[1492px]">
            <span className="text-[36px] font-bold leading-10 text-white">
              User Interface
              <br />
            </span>
            <span className="text-[36px] font-medium leading-10 text-white">
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
          <div className="absolute left-[0px] top-[516px] w-[1492px]">
            <span className="text-[36px] font-bold leading-10 text-white">
              Game Logic
              <br />
            </span>
            <span className="text-[36px] font-medium leading-10 text-white">
              Implement the core logic of the Tic Tac Toe game using a suitable
              programming
              <br />
            </span>
          </div>
        </div>
        <div className="absolute left-[172px] top-[1046px] text-[36px] font-extrabold leading-10 text-white">
          INSTRUCTIONS
        </div>
        <div className="absolute left-[140px] top-[646px] h-[342px] w-[1635px]">
          <div className="absolute left-[0px] top-[0px] h-[342px] w-[1635px] rounded-[25px] bg-neutral-700" />
          <div className="absolute left-[75px] top-[26px] text-[28px] font-medium leading-10 text-white">
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
          <div className="absolute left-[1292px] top-[31px] h-[282px] w-[282px] rounded-[25px] bg-zinc-300 bg-opacity-10 shadow" />
          <div className="absolute left-[1313px] top-[52px] h-[241px] w-[241px]" />
        </div>
        <div className="absolute left-[172px] top-[567px] text-[36px] font-extrabold leading-10 text-white">
          SKILLS REQUIRED
        </div>
        <div className="absolute left-[76px] top-[106px] h-[265px] w-[1767px]">
          <div className="absolute left-[0px] top-[0px] h-[265px] w-[1767px] rounded-[25px] bg-neutral-800 shadow" />
          <div className="absolute left-[53px] top-[149px] h-[81.32px] w-[206px]">
            <div className="absolute left-[0px] top-[0px] h-[81.32px] w-[206px] rounded-[25px] bg-green-200 bg-opacity-60" />
            <div className="absolute left-[43.37px] top-[13.55px] text-[43.3684196472168px] font-semibold text-green-950">
              EASY
            </div>
          </div>
          <div className="absolute left-[23px] top-[36px] text-[72px] font-bold text-white">
            TIC TAC TOE
          </div>
          <div className="absolute left-[1596px] top-[181px] h-12 w-[121.82px]">
            <div className="absolute left-[55.82px] top-[4.62px] text-[31.8885440826416px] font-bold text-zinc-400">
              1.2K
            </div>
            <div className="absolute left-[0px] top-[0px] h-12 w-12" />
          </div>
          <div className="absolute left-[1658px] top-[50px] h-[60px] w-[60px]" />
        </div>
      </div>
    </>
  );
}
