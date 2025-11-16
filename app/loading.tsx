import { Logo } from "@/components/atoms/logo";
import { APP } from "@/constants/APP";

export default function RootLoading() {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center gap-4">
      <Logo size="lg" />
      <h1 className="text-2xl font-bold">{APP.title}</h1>
    </main>
  );
}
