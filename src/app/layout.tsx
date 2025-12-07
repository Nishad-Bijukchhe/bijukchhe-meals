import Header from "../components/Header/Header";
import "./globals.css";
export const metadata = {
  title: "Bijukchhe Meals",
  description:
    "This is where you order delicious food to suffice your cravings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
