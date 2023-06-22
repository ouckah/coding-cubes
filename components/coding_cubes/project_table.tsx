import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/icons";

export function ProjectTable() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[85%] pt-10">
        <p className="pb-5 text-[24px] font-bold">💻 PROJECTS:</p>
        <Table>
          <TableHeader>
            <TableRow rowIndex={0}>
              <TableHead className="w-[100px]">STATUS</TableHead>
              <TableHead>TITLE</TableHead>
              <TableHead className="text-right">CREATIONS</TableHead>
              <TableHead className="text-right">DIFFICULTY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow rowIndex={1}>
              <TableCell className="font-medium">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="ml-[5px]">
                        <Icons.success size={35} color="green" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Completed!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>1. Two Sum</TableCell>
              <TableCell className="text-right">
                <div className="mr-[20px] flex items-center justify-end">
                  <Icons.page size={35} color="white" />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="easy">Easy</Badge>
              </TableCell>
            </TableRow>
            <TableRow rowIndex={2}>
              <TableCell className="font-medium">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="ml-[5px]">
                        <Icons.loader size={35} color="yellow" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Attempted!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>2. Add Two Numbers</TableCell>
              <TableCell className="text-right">
                <div className="mr-[20px] flex items-center justify-end">
                  <Icons.page size={35} color="white" />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="medium">Medium</Badge>
              </TableCell>
            </TableRow>
            <TableRow rowIndex={3}>
              <TableCell className="font-medium">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="ml-[5px]">
                        <Icons.success size={35} color="green" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Completed!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>
                3. Longest Substring Without Repeating Characters
              </TableCell>
              <TableCell className="text-right">
                <div className="mr-[20px] flex items-center justify-end">
                  <Icons.page size={35} color="white" />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="hard">Hard</Badge>
              </TableCell>
            </TableRow>
            <TableRow rowIndex={4}>
              <TableCell className="font-medium"></TableCell>
              <TableCell>4. Median of Two Sorted Arrays</TableCell>
              <TableCell className="text-right">
                <div className="mr-[20px] flex items-center justify-end">
                  <Icons.page size={35} color="white" />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="easy">Easy</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
