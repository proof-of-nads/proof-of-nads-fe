"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/auth";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export function ProfileCardWithForm() {
  const handleDiscordLogin = () => {
    signIn("discord");
  };

  return (
    <Card className="w-full md:w-[400px]">
      <CardHeader className="relative">
        <CardTitle className="flex justify-between items-center gap-2">
          <span>Profile</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col relative space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your username"
                className="w-[150px]"
              />
              <div className="absolute left-[220px] top-0 -translate-y-1/2">
                <Avatar className="w-28 h-28">
                  <AvatarImage
                    src="/images/profile/sample-1.png"
                    className="scale-[2]"
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
                  onClick={handleDiscordLogin}
                >
                  Connect
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Discord User</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="name"
                  placeholder="@twitter handle"
                  value={"0xHugo.nad"}
                  className="w-[150px]"
                  disabled
                />
                <Button
                  disabled
                  onClick={handleDiscordLogin}
                  className="w-[100px] text-sm"
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
