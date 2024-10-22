"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signIn } from "@/auth";

export function ProfileCardWithForm() {
  const handleDiscordLogin = () => {
    signIn("discord");
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Twitter Handle</Label>
              <div className="flex items-center gap-2">
                <Input id="name" placeholder="@your twitter handle" />
                <Button className="min-w-[130px]" onClick={handleDiscordLogin}>
                  Connect twitter
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Discord User</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="name"
                  placeholder="@your twitter handle"
                  value={"0xHugo.nad"}
                  disabled
                />
                <Button
                  disabled
                  onClick={handleDiscordLogin}
                  className="w-[130px]"
                >
                  Discord Verified
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Profile Picture</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
