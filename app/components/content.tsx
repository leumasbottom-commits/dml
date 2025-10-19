import MainCard from "./main-card";

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
        <MainCard />
      </main>
    </div>
  );
};

export default Content;
