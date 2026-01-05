import React from 'react'
import Card from "@/components/ui/Card/Card";
import menu from "@/services/menu";
import Counter from "@/components/Counter/Counter";

interface ForecastItem{
  date: Date,
  temperatureC: number,
  summary: string,
  temperatureF: number,
}

const Menu = async () => {
  let data = await fetch("http://localhost:5037/weatherforecast");
  let forecast = await data.json();
  // console.log("Hello from MENU!", forecast)
  forecast.map((item: ForecastItem) => {
    console.log("id: ", item.summary)
  })
  // const page = async () => {
  //   let data = await fetch("http://localhost:5037/weatherforecast");
  //   let forecast = await data.json();
  //   console.log(forecast);
  // }

  return (
      <Card className=" bg-white">
        {menu.map((item) => {
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