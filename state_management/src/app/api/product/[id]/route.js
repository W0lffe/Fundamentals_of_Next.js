import { NextResponse } from 'next/server';

const mockProducts = 
    [
        {id: "123", name: "Megaforce Energy Drink", price: "1,35€", description:"Cheap energy drink sold by S-group."},
        {id: "124", name: "Euroshopper Energy Drink", price: "1,50€", description:"Cheap energy drink sold by Kesko."}
    ]

export async function GET(req, {params}) {
    const {id} = await params;
    console.log(id, "ID")
    const product = mockProducts.find((item) => item.id === id);
    console.log(product)
  return NextResponse.json(product);
}