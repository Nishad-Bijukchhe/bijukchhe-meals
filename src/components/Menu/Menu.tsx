import React from 'react'
import Card from "@/components/ui/Card/Card";
import menu from "@/services/menu";
import Counter from "@/components/Counter/Counter";

function Menu() {
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