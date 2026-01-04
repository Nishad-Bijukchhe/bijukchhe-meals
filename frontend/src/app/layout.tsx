import Header from "../components/Header/Header";
import "./globals.css";
import FoodBanner from "@/assets/images/food_landscape.jpg"
import Image  from 'next/image'

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
      <body className="bg-gray-900">
        <Header />
        {/* <img src="../assets/images/food_landscape.jpg" alt="food image"/>
        <img src={FoodBanner.src} alt="food image" /> */}
        <Image src={FoodBanner} alt="food image" className="w-full h-40 sm:h-80"/>
        <div className="bg-gray-900">{children}</div>
      </body>
    </html>
  );
}
