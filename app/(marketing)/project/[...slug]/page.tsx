"use client";
import * as React from "react";
import Link from "next/link";
import { ProjectMenu } from "@/components/coding_cubes/project_menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ProjectHeaderCard,
  ProjectHeaderCardHeader,
  ProjectHeaderCardTitle,
  ProjectHeaderCardDescription,
  ProjectHeaderCardContent,
  ProjectHeaderCardFooter,
} from "@/components/coding_cubes/projectHeaderCard";
import { Ultra } from "next/font/google";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Project",
};

export default function ProjectPage() {
  return (
    <div className="mt-[25px] flex flex-col items-center justify-center">
      <ProjectHeaderCard className="w-[80%] bg-[#212121]">
        <ProjectHeaderCardHeader className="flex items-center justify-between">
          <ProjectHeaderCardTitle className="text-[42px]">
            1. TIC TAC TOE
          </ProjectHeaderCardTitle>
          <Link className="hover:fill-current hover:text-white" href="">
            <Icons.star className="text-gold h-[40px] w-[40px] transition-colors duration-200" />
          </Link>
        </ProjectHeaderCardHeader>
        <ProjectHeaderCardFooter className="flex justify-between">
          <Badge variant="easy_large">Easy</Badge>
          <div className="flex flex-row gap-1">
            <Icons.trendingUp className="h-[40px] w-[40px]" />
            <p className="text-[25px]">1.2k</p>
          </div>
        </ProjectHeaderCardFooter>
      </ProjectHeaderCard>

      <Card className="mt-[25px] w-[80%] bg-[#212121]">
        <CardHeader className="flex items-start justify-start">
          <ProjectMenu />
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Card className="w-[100%] bg-[#2C2C2C]">
            <CardHeader className="flex items-start justify-start">
              <p className="text-[20px] font-extrabold leading-10 text-white">
                SKILLS REQUIRED:
              </p>
              <Card className="mt-[25px] w-[100%] bg-[#3c3c3c]">
                <CardHeader className="flex items-start justify-start">
                  <div className="text-[20px] font-medium leading-10 text-white">
                    <li>User Interface Design and Development</li>
                    <li>Game Logic Implementation</li>
                    <li>Input Handling</li>
                    <li>Artificial Intelligence (optional)</li>
                    <li>Score keeping and Statistics (optional)</li>
                  </div>
                </CardHeader>
              </Card>
              <p className="pt-[25px] text-[20px] font-extrabold leading-10 text-white">
                INSTRUCTIONS:
              </p>
              <div className="ml-[15px] pt-[20px] text-[20px]">
                <p className="font-bold">User Interface</p>
                <div className="pl-5">
                  <li>
                    Design and implement a visually appealing and intuitive
                    graphical user interface (GUI) for the Tic Tac Toe game.
                  </li>
                  <li>
                    Display the game board grid consisting of cells where
                    players can make their moves.
                  </li>
                  <li>
                    Highlight the cells that form a winning combination when a
                    player wins.
                  </li>
                  <li>
                    Show a message or dialog box indicating the game result
                    (win, draw, or in progress).
                  </li>
                </div>
              </div>
              <div className="ml-[15px] pt-[25px] text-[20px]">
                <p className="font-bold">Game Logic</p>
                <div className="pl-5">
                  <li>
                    Design and implement a visually appealing and intuitive
                    graphical user interface (GUI) for the Tic Tac Toe game.
                  </li>
                  <li>
                    Display the game board grid consisting of cells where
                    players can make their moves.
                  </li>
                  <li>
                    Highlight the cells that form a winning combination when a
                    player wins.
                  </li>
                  <li>
                    Show a message or dialog box indicating the game result
                    (win, draw, or in progress).
                  </li>
                </div>
              </div>
              <div className="ml-[15px] pt-[25px] text-[20px]">
                <div className="flex flex-row gap-3">
                  <p className="font-bold">Scorekeeping and Statistics </p>
                  <Badge className="pl-[5px]">Optional ✨</Badge>
                </div>
                <div className="pl-5">
                  <li>
                    Design and implement a visually appealing and intuitive
                    graphical user interface (GUI) for the Tic Tac Toe game.
                  </li>
                  <li>
                    Display the game board grid consisting of cells where
                    players can make their moves.
                  </li>
                  <li>
                    Highlight the cells that form a winning combination when a
                    player wins.
                  </li>
                  <li>
                    Show a message or dialog box indicating the game result
                    (win, draw, or in progress).
                  </li>
                </div>
              </div>
              <div className="flex w-[100%] items-center justify-center pt-[25px] ">
                <Button
                  className="ml-[15px] h-[50px] w-[80%]"
                  variant="project_submission"
                >
                  <p className="pr-[15px] text-[35px] font-bold leading-10 text-white">
                    28K{" "}
                  </p>
                  <p className="text-[25px] font-medium leading-10 text-neutral-400">
                    submissions
                  </p>
                </Button>
              </div>
              <div className="flex w-[100%] flex-row items-center justify-center gap-5 pt-[55px]">
                <Button
                  className="h-[200px] w-[30%] text-[45px] font-bold"
                  variant="project_submission"
                >
                  GET TEMPLATE
                </Button>
                <Button
                  className="h-[200px] w-[30%] text-[45px] font-bold"
                  variant="project_submission"
                >
                  SUBMIT
                </Button>
              </div>
            </CardHeader>
          </Card>
        </CardFooter>
      </Card>
    </div>
  );
}
