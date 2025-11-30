import { useState } from "react";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar lógica de suscripción
    console.log("Suscrito con el correo:", inputValue);
    setInputValue("");
  }

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Únete a la Comunidad Gamer</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Suscríbete para ofertas exclusivas, lanzamientos y novedades del mundo gaming
          </p>
          <form className="mt-6 flex flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
            <input
              type="email"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder={"Ingresa tu correo"}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;