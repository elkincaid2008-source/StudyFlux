export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-4">
        STEMPath
      </h1>

      <p className="text-xl text-center max-w-xl">
        Helping students master AP Biology, Calculus, and Physics.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Biology
        </button>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Calculus
        </button>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Physics
        </button>
      </div>
    </main>
  );
}
