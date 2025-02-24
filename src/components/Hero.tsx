export default function Hero({ title, link }: { title: string; link: string }) {
  return (
    <section className="text-center p-10 bg-blue-500 text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mt-2 text-xl font-bold underline">
        <a href={link}>View the Blog Feed</a>
      </p>
    </section>
  );
}
