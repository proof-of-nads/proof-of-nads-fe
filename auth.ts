import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    TwitterProvider,
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      // authorization: { params: { scope: "identify" } },
    }),
  ],
});
