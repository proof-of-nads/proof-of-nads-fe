import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { BadgeCheckIcon, ReplyIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ProfileGuestBookCard() {
  const userGuestbookData = [
    {
      id: 123123454,
      fromUser: {
        userName: "baeksu",
        imgSrc: "/images/profile/baeksu.png",
        monadRole: "localnads",
        certified: true,
      },
      contents:
        "Wow, it was so great meeting you at the event! 🎉 I had such a blast sharing ideas and insights with you. Your enthusiasm and creativity really inspired me. Let's definitely catch up again soon and keep this awesome energy going! Can't wait for our next meetup! 😊",
      date: "2024-10-24 13:23",
    },
    {
      id: 987654321,
      fromUser: {
        userName: "Ssick",
        imgSrc: "/images/profile/Ssick.jpg",
        monadRole: "mon2",
        certified: false,
      },
      contents:
        "Hey there! 👋 It was fantastic connecting with you at the blockchain conference. Your insights on DeFi were mind-blowing! 🚀 I'm still processing all the innovative ideas we discussed. We should definitely collaborate on a project soon. Looking forward to our next chat and maybe grabbing a virtual coffee! ☕️",
      date: "2024-10-25 09:45",
    },
  ];
  return (
    <Card className="w-full flex-1">
      <CardHeader className="relative">
        <CardTitle className="flex justify-between items-center gap-2">
          <span>Guest Book</span>
          <span className="text-base font-normal text-gray-600 cursor-pointer lg:hover:text-primary lg:transition-all lg:duration-300">
            View All
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {userGuestbookData.map((guestbook, index) => (
          <div key={guestbook.id} className="flex flex-col gap-2">
            <div className="flex gap-2 items-center text-primary font-semibold">
              <span className="text-base">{guestbook.fromUser.userName}</span>
              <span className="text-sm text-gray-500">({guestbook.date})</span>
              <span className="text-xs bg-primary p-0.5 px-1 rounded-md text-background">
                {guestbook.fromUser.monadRole}
              </span>
              {guestbook.fromUser.certified && (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <BadgeCheckIcon className="w-5 h-5 text-green-700" />
                    </TooltipTrigger>
                    <TooltipContent>Certified!</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="flex gap-8 pl-3 ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative flex">
                    <Avatar className="w-16 h-16 cursor-pointer lg:hover:scale-110 transition-all duration-300">
                      <AvatarImage src={guestbook.fromUser.imgSrc} />
                      <AvatarFallback>
                        {guestbook.fromUser.userName.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Connections</DropdownMenuLabel>
                  <DropdownMenuItem>Copy user address</DropdownMenuItem>
                  <DropdownMenuItem>Copy user handle</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View User</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Button className="h-6" size="sm">
                      Ask to Connect
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div
                key={guestbook.date}
                className="flex flex-col leading-tight text-base"
              >
                <p>{guestbook.contents}</p>
                <div className="cursor-pointer flex items-end gap-1 self-end text-gray-500 lg:hover:text-primary lg:transition-all lg:duration-300">
                  <span className="text-sm">Reply</span>
                  <ReplyIcon className="w-3.5 h-3.5 rotate-180" />
                </div>
              </div>
            </div>

            {index !== userGuestbookData.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
