export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <section className="flex flex-col justify-center items-center rounded-full px-10 py-8 border-2 border-white animate-pulse">
        <div className="flex flex-col items-center justify-center">
          <figure className="size-20">
            <img src="/img/vopper.svg" alt="" />
          </figure>
          <p>cargando ...</p>
        </div>
      </section>
    </div>
  );
}
