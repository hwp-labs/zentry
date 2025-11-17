import { Banner } from "@/components/organisms/banner";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {children}
    </div>
  );
}
