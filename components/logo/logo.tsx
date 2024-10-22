// import ProofOfNadsLogo from "@/public/icons/icon-pon-logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <Image
        src="/icons/icon-pon-logo.png"
        alt="Proof of Nads"
        width={40}
        height={40}
        unoptimized
      />
      <span className="text-xl font-bold text-primary">Proof of Nads</span>
    </div>
  );
}
