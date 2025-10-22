'use client'

import MainCard from "./main-card";
import firstImage from "../assets/1.jpeg";
import secondImage from "../assets/2.jpeg";
import thirdImage from "../assets/3.jpeg";
import fourthImage from "../assets/4.jpg";

import firstRoleta from "../assets/roleta1.png";
import secondRoleta from "../assets/roleta2.png";
import thirdRoleta from "../assets/roleta3.png";
import fourthRoleta from "../assets/roleta4.png";

const Content = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-center text-3xl">Texto para ocupar espaço e ter ideia de como vai ficar</h2>

        <h3 className="text-center text-2xl text-slate-300">Texto um pouco menor para ter outra ideia de como fica o texto menorzinho ali embaixo</h3>

        <p className="mt-8">Renda-se</p>

        <p className="pl-4">
          <a href="https://livepix.gg/atinymilly" target="_blank">livepix.com</a>
        </p>

        <p className="pl-4">
          <a href="https://x.com/Adeusamilly" target="_blank">x.com</a>
        </p>

        <p className="pl-4">
          <a href="https://instagram.com/atinymilly" target="_blank">instagram.com</a>
        </p>
      </div>

      <main className="flex p-4">
        <MainCard click={() => alert('teste')} images={[firstImage, secondImage, thirdImage, fourthImage]} baseId="packs" title="Packs" />
      </main>

      <main className="flex p-4">
        <MainCard click={() => alert('teste')} images={[firstRoleta, secondRoleta, thirdRoleta, fourthRoleta]} baseId="roletas" title="Roletas" />
      </main>
    </div>
  );
};

export default Content;
