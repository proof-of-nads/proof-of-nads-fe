export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <div className="rounded-full bg-primary w-8 h-8" />
      <span className="text-xl font-bold text-primary">Proof of Nads</span>
    </div>
  );
}
