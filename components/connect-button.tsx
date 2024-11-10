"use client";

import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { doLogout, doSocialLogin } from "@/app/actions";
import { signOut } from "@/auth";

import { useSession } from "next-auth/react";

export const ConnectBtn = ({
  className,
  isConnected,
}: {
  className?: string;
  isConnected: boolean;
}) => {
  console.log("🚀 ~ isConnected:", isConnected);
  const { data: session } = useSession();
  console.log("🚀 ~ ConnectBtn ~ session:", session);

  if (isConnected) {
    return (
      <Button
        onClick={async () => {
          // Disconnecting wallet first because sometimes when is connected but the user is not connected
          await doLogout();
          return;
        }}
        // disabled={isConnecting}
        className={cn("md:min-w-[160px] text-base", className)}
      >
        <Avatar className="w-6 h-6 text-xs ">
          <AvatarImage src={session?.user?.image ?? ""} />
        </Avatar>
        Logout PoN
      </Button>
    );
  }

  return (
    <form className="flex items-center gap-2" action={doSocialLogin}>
      <Button
        className={cn(
          "flex justify-start items-center gap-2 min-w-[160px]",
          className
        )}
        type="submit"
        value="discord"
        name="action"
      >
        Connect Discord
      </Button>
    </form>
  );
};

export default ConnectBtn;
