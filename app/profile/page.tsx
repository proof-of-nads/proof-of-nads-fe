export default function ProfilePage() {
  return (
    <section className="flex flex-1 max-w-[1024px] w-full flex-col gap-4 p-5 ">
      <h1>Your Profile</h1>
      <h3>Connection Status</h3>
      <div>
        <p>Wallet Address</p>
        <p>Wallet Balance</p>
      </div>
    </section>
  );
}
