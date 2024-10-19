"use client";

import * as React from "react";
import { signIn, signOut } from "@/auth";
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

export function ProfileCardWithForm() {
  const handleDiscordLogin = () => {
    signIn("discord");
  };

  const handleDiscordLogout = () => {
    signOut();
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your username"
                value={session?.user?.username || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="discord">Discord</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="discord"
                  placeholder="Your Discord username"
                  value={
                    session?.user?.username
                      ? `${session.user.username}#${session.user.discriminator}`
                      : ""
                  }
                  readOnly
                />
                {status === "authenticated" ? (
                  <Button onClick={handleDiscordLogout}>Disconnect</Button>
                ) : (
                  <Button onClick={handleDiscordLogin}>Connect Discord</Button>
                )}
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
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
