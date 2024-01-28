import Sidebar from "../components/dashboard/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />

      <div className="pl-60">{children}</div>
    </>
  );
}
