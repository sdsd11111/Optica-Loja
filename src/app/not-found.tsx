import Link from "next/link";

export default function NotFound() {
  return (
    <section className="phero">
      <div className="wrap">
        <h1>No encontramos esta página</h1>
        <p className="lead">Puede que el enlace haya cambiado. Vuelve al inicio o elige un servicio.</p>
        <div className="actions">
          <Link className="btn btn--primary" href="/">Ir al inicio</Link>
          <Link className="btn btn--ghost" href="/examen-visual-loja">Examen visual</Link>
        </div>
      </div>
    </section>
  );
}
