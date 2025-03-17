import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-20 select-none overflow-hidden bg-gradient-to-b from-black/50 to-black" />
      <div className="pointer-events-none fixed inset-0 -z-30 select-none overflow-hidden">
        <Image
          fill
          priority
          alt="background"
          className="object-cover object-center"
          src="/building-1-background.webp"
        />
      </div>
    </>
  );
}
