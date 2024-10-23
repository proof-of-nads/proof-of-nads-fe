"use client";

import * as React from "react";
import { doSocialLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/auth";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Session } from "next-auth";

export function ProfileCardWithForm({ session }: { session: Session | null }) {
  const handleDiscordLogin = () => {
    signIn("discord");
  };

  const user = session?.user;
  console.log("🚀 ~ ProfileCardWithForm ~ user:", user);

  return (
    <Card className="w-full flex-1">
      <CardHeader className="relative">
        <CardTitle className="flex justify-between items-center gap-2">
          <span>Profile</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={doSocialLogin}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col relative space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="your username"
                className="w-[150px]"
              />
              <div className="absolute  left-[170px] md:left-[310px] top-0 -translate-y-1/2">
                <Avatar className="w-28 h-28">
                  <AvatarImage
                    src="/images/profile/PaulC.jpg"
                    className="scale-110"
                  />
                  <AvatarFallback>NAD</AvatarFallback>
                </Avatar>
                <span className="border hover:bg-purple-500 border-black cursor-pointer hover:bg-primary transition-colors flex items-center absolute bottom-2 -right-3.5 bg-primary text-white text-[12px] rounded-lg px-3.5 py-1.5 leading-none">
                  Edit
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Twitter Handle</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="name"
                  className="w-[150px]"
                  placeholder="@twitter handle"
                />
                <Button
                  className="min-w-[100px] text-sm"
                  value="twitter"
                  type="submit"
                  name="action"
                  disabled
                >
                  Verify
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Discord User</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="name"
                  placeholder="@discord handle"
                  value={user?.name || undefined}
                  className="w-[150px]"
                  disabled
                />
                <Button
                  onClick={handleDiscordLogin}
                  className="w-[100px] text-sm"
                  value="discord"
                  disabled={!!user?.name}
                  type="submit"
                  name="action"
                >
                  Verified
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
