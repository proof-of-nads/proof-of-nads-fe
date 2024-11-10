import { Separator } from "@/components/ui/separator";
import { ProfileCardWithForm } from "./_components/profile-card";
import { ProfileImageCarousel } from "./_components/profile-image-carousel";
import { ProofImageCarousel } from "./_components/proof-image-carousel";
import { auth } from "@/auth";
import ProfileDashboardCard from "./_components/profile-dashboard-card";
import ProfileGuestBookCard from "./_components/profile-guest-book";

export interface UserData {
  user: {
    username: string;
    twitterHandle: string;
    discordHandle: string | null;
    profilePicture: string;
  };
  userConnections: {
    firstConnections: { id: number; imgSrc: string }[];
    secondConnections: { id: number; imgSrc: string }[];
  };
  missions: { id: number; title: string; description: string }[];
  guestBook: GuestBook[];
  profileHistory: { id: number; imgSrc: string }[];
  proofHistory: { id: number; imgSrc: string }[];
}

export interface GuestBook {
  id: number;
  contents: string;
  date: string;
}

const fetchOrRegisterUserData = async (
  username: string | null | undefined,
  imgSrc: string | null | undefined,
  email: string | null | undefined
) => {
  if (!username) return;
  try {
    const response = await fetch(`http://51.89.7.79:7777/api/auth/${username}`);
    return await response.json();
  } catch (error) {
    console.log("🚀 ~ fetchOrRegisterUserData ~ error:", error);
    const body = {
      username: username,
      discord_id: username,
      email: email,
      current_profile_picture: imgSrc,
      wallet_address: "0xtestertesttesttesttesttesttest",
    };
    const registerResponse = await fetch(
      "http://51.89.7.79:7777/api/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    return await registerResponse.json();
  }
};

export default async function ProfilePage() {
  const userFirstConnections = [
    { id: 1, imgSrc: "/images/profile/ThisIsFin.jpg" },
    { id: 2, imgSrc: "/images/profile/Shuwski.jpg" },
    { id: 3, imgSrc: "/images/profile/Shimmoney.jpg" },
    { id: 4, imgSrc: "/images/profile/Ssick.jpg" },
  ];

  const userSecondConnections = [
    { id: 5, imgSrc: "/images/profile/whitesocks.jpg" },
    { id: 6, imgSrc: "/images/profile/pingping.jpg" },
    { id: 7, imgSrc: "/images/profile/HB.png" },
    { id: 8, imgSrc: "/images/profile/Jeongnam.png" },
  ];

  const session = await auth();

  const user = session?.user;

  const userData: UserData = await fetchOrRegisterUserData(
    user?.name,
    user?.image,
    user?.email
  );
  console.log(userData);

  return (
    <>
      <section className="flex max-w-2xl lg:max-w-[1024px] w-full flex-col gap-5 p-5 ">
        <h1>Your Profile</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row gap-4">
            <ProfileCardWithForm session={session} userInfo={userData} />
            <ProfileDashboardCard
              firstConnections={userFirstConnections}
              secondConnections={userSecondConnections}
            />
          </div>
        </div>
      </section>
      <section className="flex max-w-2xl lg:max-w-[1024px] w-full gap-5 p-5 pt-1 ">
        <ProfileGuestBookCard guestBook={userData?.guestBook ?? []} />
      </section>
      <section className="w-full max-w-[1024px]  items-center flex flex-col">
        <h3 className="px-5 font-bold max-w-2xl lg:max-w-[1024px] w-full">
          Profile Gallery
        </h3>
        <ProfileImageCarousel
          userProfileHistoryData={userData?.profileHistory ?? []}
        />
      </section>
      <section className="w-full max-w-[1024px] mt-5  items-center flex flex-col">
        <h3 className="font-bold px-5 max-w-2xl lg:max-w-[1024px] w-full">
          Proof Gallery
        </h3>
        <ProofImageCarousel
          userProfileHistoryData={userData?.proofHistory ?? []}
        />
      </section>
    </>
  );
}
