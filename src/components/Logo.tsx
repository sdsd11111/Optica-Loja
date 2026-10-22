"use client";

export function Logo({ height = 48 }: { height?: number }) {
  return (
    <div className="logo-brand flex items-center justify-center">
      <img
        src="/Logo-svg.svg"
        alt="Óptica Loja - ¡Lo mejor para tus ojos!"
        style={{
          height: `${height}px`,
          width: "auto",
          display: "block",
        }}
        className="logo-img"
      />
    </div>
  );
}

