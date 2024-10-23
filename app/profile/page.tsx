import { Separator } from "@/components/ui/separator";
import { ProfileCardWithForm } from "./_components/profile-card";
import { ProfileImageCarousel } from "./_components/profile-image-carousel";
import { ProofImageCarousel } from "./_components/proof-image-carousel";
import { auth } from "@/auth";
import ProfileDashboardCard from "./_components/profile-dashboard-card";

export default async function ProfilePage() {
  const userFirstConnections = [
    { id: 3, imgSrc: "/images/profile/ThisIsFin.jpg" },
    { id: 4, imgSrc: "/" },
    { id: 2, imgSrc: "/images/profile/pingping.jpg" },
    { id: 4, imgSrc: "/images/profile/Ssick.jpg" },
  ];

  const userSecondConnections = [
    { id: 3, imgSrc: "/images/profile/ThisIsFin.jpg" },
    { id: 2, imgSrc: "/images/profile/pingping.jpg" },
    { id: 4, imgSrc: "/images/pile/Ssick.jpg" },
    { id: 4, imgSrc: "/images/profile/Ssick.jpg" },
  ];

  const session = await auth();

  return (
    <>
      <section className="flex  max-w-2xl lg:max-w-[1024px] w-full flex-col gap-5 p-5 ">
        <h1>Your Profile</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row gap-4">
            <ProfileCardWithForm session={session} />
            <ProfileDashboardCard
              firstConnections={userFirstConnections}
              secondConnections={userSecondConnections}
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1024px]  items-center flex flex-col">
        <h3 className="px-5 font-bold max-w-2xl lg:max-w-[1024px] w-full">
          Profile Gallery
        </h3>
        <ProfileImageCarousel />
      </section>
      <section className="w-full max-w-[1024px] mt-5  items-center flex flex-col">
        <h3 className="font-bold px-5 max-w-2xl lg:max-w-[1024px] w-full">
          Proof Gallery
        </h3>
        <ProofImageCarousel />
      </section>
    </>
  );
}
