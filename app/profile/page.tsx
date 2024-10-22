import { Separator } from "@/components/ui/separator";
import { ProfileCardWithForm } from "./_components/profile-card";
import { ProfileImageCarousel } from "./_components/profile-image-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, UsersIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const userFirstConnections = [
    { id: 1, imgSrc: "/images/profile/PaulC.jpg" },
    { id: 2, imgSrc: "/images/profile/pingping.jpg" },
    { id: 3, imgSrc: "/images/profile/ThisIsFin.jpg" },
    { id: 4, imgSrc: "/images/profile/Ssick.jpg" },
    { id: 4, imgSrc: "/" },
  ];

  const userSecondConnections = [
    { id: 1, imgSrc: "/images/profile/PaulC.jpg" },
    { id: 2, imgSrc: "/images/profile/pingping.jpg" },
    { id: 3, imgSrc: "/images/profile/ThisIsFin.jpg" },
    { id: 4, imgSrc: "/images/profile/Ssick.jpg" },
    { id: 4, imgSrc: "/images/pile/Ssick.jpg" },
  ];
  return (
    <>
      <section className="flex  max-w-2xl lg:max-w-[1024px] w-full flex-col gap-5 p-5 ">
        <h1>Your Profile</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row gap-4">
            <ProfileCardWithForm />
            <Card className="flex-1">
              <CardHeader className="pb-3">
                <CardTitle>Connection Statistic</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold text-primary flex items-center gap-2">
                    <UserIcon className="text-primary" />
                    <span> 1st Connections : 15</span>
                  </div>
                  <div className="flex -space-x-4">
                    {userFirstConnections.map((connection) => (
                      <Avatar
                        key={connection.id}
                        className="w-14 h-14 hover:scale-110 transition-all duration-300"
                      >
                        <AvatarImage src={connection.imgSrc} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    ))}
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-background ">
                        +11
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold text-primary flex items-center gap-2">
                    <UsersIcon className="text-primary" />
                    <span> 2nd Connections : 6</span>
                  </div>
                  <div className="flex -space-x-4">
                    {userSecondConnections.map((connection) => (
                      <Avatar
                        key={connection.id}
                        className="w-14 h-14 hover:scale-110 transition-all duration-300"
                      >
                        <AvatarImage src={connection.imgSrc} />
                        <AvatarFallback>ET</AvatarFallback>
                      </Avatar>
                    ))}
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-background">
                        +11
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1024px]  items-center flex flex-col gap-2">
        <h3 className="px-5 max-w-2xl lg:max-w-[1024px] w-full">
          Profile Gallery
        </h3>
        <ProfileImageCarousel />
      </section>
    </>
  );
}
