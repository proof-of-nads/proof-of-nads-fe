import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  // const leaderboardData = [
  //   {
  //     name: "Paul C",
  //     imageSrc: "/images/profile/paul.png",
  //     firstConnectionScore: 100,
  //     secondConnectionScore: 100,
  //   },
  //   {
  //     name: "Ping Ping",
  //     imageSrc: "/images/profile/PingPing.png",
  //     firstConnectionScore: 90,
  //     secondConnectionScore: 90,
  //   },
  //   {
  //     name: "ThisIsFin",
  //     imageSrc: "/images/profile/ThisIsFin.png",
  //     firstConnectionScore: 80,
  //     secondConnectionScore: 80,
  //   },
  //   {
  //     name: "Ssick",
  //     imageSrc: "/images/profile/Ssick.png",
  //     firstConnectionScore: 70,
  //     secondConnectionScore: 70,
  //   },
  // ];

  return (
    <>
      <section className="flex  max-w-2xl lg:max-w-[1024px] w-full flex-col gap-5 p-5 ">
        <h1>Leaderboard</h1>
        <Separator />
      </section>
    </>
  );
}
