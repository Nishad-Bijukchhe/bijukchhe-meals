import Card from "@/components/ui/Card/Card";
import { Fragment } from "react";
import Button from "@/components/Button/Button";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <Fragment>
      {/* Hero Section */}
      <Card className="text-white text-center border-white border-2 mx-auto w-[90%] bg-gray-800 px-4 py-2">
        <div className="text-3xl font-bold py-4">
          Delicious Food Delivered To You
        </div>
        <Button />
        <div className="py-3">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious meal at home.
        </div>
        <div className="py-2">
          All our meals are cooked with high quality ingredients, freshly made
          by experienced chefs.
        </div>
      </Card>
      <Menu />
    </Fragment>
  );
}
