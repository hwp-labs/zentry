export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted flex-center-center min-h-screen">
      <div className="container-fluid grid w-full gap-6">{children}</div>
    </div>
  );
}
