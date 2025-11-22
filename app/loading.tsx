import Image from "next/image";

export default function RootLoading() {
  return (
    <main className="flex-center-center h-screen w-full">
      <Image
        src="/logo.png"
        alt="Loading..."
        width={120}
        height={120}
        className="animate-pulse"
        priority
      />
    </main>
  );
}
