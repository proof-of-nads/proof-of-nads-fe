"use client";

import * as React from "react";
import { doSocialLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import type { Session } from "next-auth";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CrownIcon } from "lucide-react";

export function ProfileCardWithForm({ session }: { session: Session | null }) {
  const user = session?.user;

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
                  <AvatarImage src={user?.image || ""} className="scale-110" />
                  <AvatarFallback className="bg-primary text-white font-bold text-xl">
                    NAD
                  </AvatarFallback>
                </Avatar>
                <span className="border lg:hover:bg-purple-500 border-black cursor-pointer lg:hover:bg-primary transition-colors flex items-center absolute bottom-2 -right-3.5 bg-destructive text-white text-[12px] rounded-lg px-3.5 py-1.5 leading-none">
                  Edit
                </span>
                {user?.name && (
                  <span className="flex top-0 mt-2 gap-2 items-center absolute left-3 -translate-x-1/2 text-sm bg-primary p-0.5 px-1 rounded-md text-white">
                    <CrownIcon className="w-4 h-4 " />
                    mon2
                  </span>
                )}
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
                  className="min-w-[100px] text-sm cursor-not-allowed"
                  value="twitter"
                  type="submit"
                  name="action"
                  variant="destructive"
                  disabled
                >
                  Verify <ExclamationTriangleIcon className="w-4 h-4" />
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
                  className="w-[100px] text-sm"
                  value="discord"
                  disabled={!!user?.name}
                  type="submit"
                  name="action"
                >
                  {!!user?.name ? "Verified!" : "Verify"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
