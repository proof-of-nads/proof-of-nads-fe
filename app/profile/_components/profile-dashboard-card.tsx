import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BirdIcon,
  CameraIcon,
  CrownIcon,
  InfoIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UserIcon,
  UserPlus2Icon,
  UsersIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export default function ProfileDashboardCard({
  firstConnections,
  secondConnections,
}: {
  firstConnections: { id: number; imgSrc: string }[];
  secondConnections: { id: number; imgSrc: string }[];
}) {
  const questData = [
    {
      id: 1,
      title: "New starter",
      description: "Like 5 posts",
      icon: <BirdIcon />,
    },
    {
      id: 5,
      title: "Photo of the day",
      description: "Post your photo",
      icon: <CameraIcon />,
    },
    {
      id: 2,
      title: "Get likes",
      description: "Get 10 likes",
      icon: <ThumbsUpIcon />,
    },
    {
      id: 3,
      title: "Be Connected",
      description: "Connect with 5 people",
      icon: <UserPlus2Icon />,
    },
    {
      id: 4,
      title: "Nad's nad",
      description: "Connect yourself with nad",
      icon: <CrownIcon />,
    },
  ];
  return (
    <Card className="flex-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex gap-1 items-center">
          <span>Dashboard</span>
          <InfoIcon className="w-5 h-5" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold text-primary flex items-center gap-2">
              <UserIcon className="text-primary" />
              <span> 1st Connections : 15</span>
            </div>
            <div className="flex -space-x-4">
              {firstConnections.map((connection) => (
                <Avatar
                  key={connection.id}
                  className="w-14 h-14 hover:scale-110 transition-all duration-300"
                >
                  <AvatarImage src={connection.imgSrc} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
              <Avatar className="w-14 h-14">
                <AvatarFallback className="bg-background ">+11</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold text-primary flex items-center gap-2">
              <UsersIcon className="text-primary" />
              <span> 2nd Connections : 6</span>
            </div>
            <div className="flex -space-x-4">
              {secondConnections.map((connection) => (
                <Avatar
                  key={connection.id}
                  className="w-14 h-14 hover:scale-110 transition-all duration-300"
                >
                  <AvatarImage src={connection.imgSrc} />
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
              ))}
              <Avatar className="w-14 h-14">
                <AvatarFallback className="bg-background">+4</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold text-primary flex items-center gap-2">
            <TrophyIcon className="text-primary" />
            <div className="flex items-center gap-0.5">
              <span>Missions</span>
              <QuestionMarkCircledIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col gap-2 ml-3 border rounded-lg p-2">
            {questData.map((quest) => (
              <div key={quest.id} className="flex items-center gap-2">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-2">
                      {quest.icon}
                      <span>{quest.title}</span>
                    </TooltipTrigger>
                    <TooltipContent>{quest.description}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
