import { Separator } from "@/components/ui/separator";
import { ProfileCardWithForm } from "./_components/profile-card";
import { ProfileImageCarousel } from "./_components/profile-image-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, UsersIcon } from "lucide-react";

export default function ProfilePage() {
  return (
    <section className="flex flex-1 max-w-[1024px] w-full flex-col gap-5 p-5 ">
      <h1>Your Profile</h1>
      <Separator />
      <section className="flex flex-col gap-2">
        <h3>Connection Statistic</h3>
        <div className="flex  gap-4">
          <ProfileCardWithForm />
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Connection Statistic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <UserIcon className="text-primary" />
                <span> 1st Connections : 15</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="text-primary" />
                <span>2nd Connections : 15</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <h3>Profile Picture Gallery</h3>
        <ProfileImageCarousel />
      </section>
    </section>
  );
}
