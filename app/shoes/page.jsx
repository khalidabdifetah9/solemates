import React from 'react'
import ShoesPage from "@/Components/Shoes/Shoes";
import NavBar from "@/Components/Shoes/NavBar";

export const metadata = {
  title: "Shoes",
  description: "explore the shoes collection of solemates where you can find massive amount of famous shoes.",
};

const Page = () => {
  return (
    <div>
        <ShoesPage/>
    </div>
  )
}

export default Page