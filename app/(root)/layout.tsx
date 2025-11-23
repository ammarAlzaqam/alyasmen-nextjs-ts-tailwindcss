import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </section>
  );
}
