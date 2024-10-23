import { Separator } from "@/components/ui/separator";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export default function ProfilePage() {
  const leaderboardData = [
    {
      username: "baeksu",
      connectionCount: 24,
      imgUrl: "/images/profile/baeksu.jpg",
    },
    {
      username: "Claire",
      connectionCount: 19,
      imgUrl: "/images/profile/Claire.jpg",
    },
    {
      username: "endgame",
      connectionCount: 15,
      imgUrl: "/images/profile/endgame.jpg",
    },
    {
      username: "buja",
      connectionCount: 14,
      imgUrl: "/images/profile/buja.jpg",
    },
    {
      username: "whitesocks",
      connectionCount: 13,
      imgUrl: "/images/profile/whitesocks.jpg",
    },
    {
      username: "PaulC",
      connectionCount: 12,
      imgUrl: "/images/profile/PaulC.jpg",
    },
    {
      username: "builnad",
      connectionCount: 12,
      imgUrl: "/images/profile/builnad.jpg",
    },
    {
      username: "Ssick",
      connectionCount: 11,
      imgUrl: "/images/profile/Ssick.jpg",
    },
    {
      username: "overcome",
      connectionCount: 11,
      imgUrl: "/images/profile/overcome.jpg",
    },
    {
      username: "berzan",
      connectionCount: 9,
      imgUrl: "/images/profile/berzan.jpg",
    },
    {
      username: "Jinie",
      connectionCount: 9,
      imgUrl: "/images/profile/Jinie.jpg",
    },
    { username: "HB", connectionCount: 8, imgUrl: "/images/profile/HB.jpg" },
    { username: "PingPing", connectionCount: 8 },
    { username: "mingming", connectionCount: 8 },
    {
      username: "Lavadong",
      connectionCount: 7,
      imgUrl: "/images/profile/Lavadong.jpg",
    },
    {
      username: "boba",
      connectionCount: 7,
      imgUrl: "/images/profile/boba.jpg",
    },
    {
      username: "PolyMoly",
      connectionCount: 6,
      imgUrl: "/images/profile/PolyMoly.jpg",
    },
    {
      username: "ozzy",
      connectionCount: 6,
      imgUrl: "/images/profile/ozzy.jpg",
    },
    {
      username: "chamdom",
      connectionCount: 5,
      imgUrl: "/images/profile/chamdom.jpg",
    },
    {
      username: "baram7",
      connectionCount: 4,
      imgUrl: "/images/profile/baram7.jpg",
    },
    {
      username: "BenjaNad",
      connectionCount: 4,
      imgUrl: "/images/profile/BenjaNad.jpg",
    },
    {
      username: "Choonsik",
      connectionCount: 3,
      imgUrl: "/images/profile/Choonsik.jpg",
    },
    {
      username: "ShimMoney",
      connectionCount: 2,
      imgUrl: "/images/profile/ShimMoney.jpg",
    },
    {
      username: "juju5378",
      connectionCount: 2,
      imgUrl: "/images/profile/juju5378.jpg",
    },
    {
      username: "Grimjow",
      connectionCount: 2,
      imgUrl: "/images/profile/Grimjow.jpg",
    },
    {
      username: "Jeongnam",
      connectionCount: 2,
      imgUrl: "/images/profile/Jeongnam.jpg",
    },
    {
      username: "Seungjae",
      connectionCount: 1,
      imgUrl: "/images/profile/Seungjae.jpg",
    },
    {
      username: "This is Fin",
      connectionCount: 1,
      imgUrl: "/images/profile/This is Fin.jpg",
    },
    {
      username: "bakba",
      connectionCount: 1,
      imgUrl: "/images/profile/bakba.jpg",
    },
  ];

  return (
    <>
      <section className="flex  max-w-2xl lg:max-w-[1024px] w-full flex-col gap-5 p-5 ">
        <h1>Leaderboard</h1>
        <Separator />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={leaderboardData} />
        </div>
      </section>
    </>
  );
}
