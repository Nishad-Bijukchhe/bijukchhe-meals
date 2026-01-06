import React from 'react'
import Card from "@/components/ui/Card/Card";
import Counter from "@/components/Counter/Counter";

interface MenuItem{
  id: number,
  name: string,
  price: number,
  description: string,
}

const Menu = async () => {
  let data = await fetch("http://localhost:5037/menu");
  let menu = await data.json();
  // console.log("Hello from MENU!", forecast)
  menu.map((item: MenuItem) => {
    console.log("name: ", item.name)
  })
  // const page = async () => {
  //   let data = await fetch("http://localhost:5037/weatherforecast");
  //   let forecast = await data.json();
  //   console.log(forecast);
  // }

  return (
      <Card className=" bg-white">
        {menu.map((item: MenuItem) => {
          return (
            <div key={item.id} className="flex justify-between py-2">
              <div className="text-2xl">{item.name}</div>
              <div className="text-2xl">${item.price}</div>
              {/* Counter */}
              <Counter />
            </div>
          );
        })}
      </Card>
  )
}

export default Menu

// free menu api: https://free-food-menus-api-two.vercel.app/burgers