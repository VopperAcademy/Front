import vopper from "@public/img/vopper.svg";

const NotFound = () => {
  return (
    <div className=" size-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex gap-1 items-center justify-center">
          <img src={vopper.src} alt="vopper" className="w-1/2" />
          <h1 className="text-6xl font-bold text-white/50">404</h1>
        </div>
        <p className="text-lg text-center text-white/70">Parece que esta página no existe</p>
      </div>
    </div>
  );
};

export default NotFound;
