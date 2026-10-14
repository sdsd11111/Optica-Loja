import type { VisualKey } from "@/content/services";

const ink = "#0F3447";
const lens = "#0E9BD0";
const mist = "#E3F4FA";

function Exam() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Optotipo dentro de un lente de prueba">
      <circle cx="200" cy="200" r="184" fill={mist} />
      <circle cx="200" cy="200" r="140" fill="#fff" stroke={lens} strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      <circle cx="200" cy="200" r="96" fill="none" stroke={ink} strokeOpacity=".12" strokeWidth="2" />
      <text x="200" y="244" textAnchor="middle" fontSize="150" fontWeight="800" fill={ink} fontFamily="var(--font-display), sans-serif">E</text>
      <path d="M200 20v34M200 346v34M20 200h34M346 200h34" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="318" cy="92" r="22" fill="#F6C453" />
    </svg>
  );
}

function Retina() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustración de fondo de ojo y corte de OCT">
      <defs>
        <radialGradient id="fundus" cx="45%" cy="45%" r="65%">
          <stop offset="0" stopColor="#FFC27A" />
          <stop offset=".7" stopColor="#F28A4B" />
          <stop offset="1" stopColor="#C8532F" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="170" r="150" fill="url(#fundus)" />
      <circle cx="250" cy="160" r="26" fill="#FFE9A8" />
      <g stroke="#9A3A20" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M250 160C210 120 160 100 110 110" />
        <path d="M250 160C220 190 170 215 120 230" />
        <path d="M250 160C240 110 230 80 215 50" />
        <path d="M250 160C275 205 280 235 270 280" />
      </g>
      <rect x="40" y="300" width="320" height="80" rx="18" fill={ink} />
      <path d="M52 346c24-18 38-18 62 0s38 18 62 0 38-18 62 0 38 18 62 0 38-18 52-6" stroke={lens} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M52 330c24-14 38-14 62 0s38 14 62 0 38-14 62 0 38 14 62 0 38-14 52-4" stroke="#7FD3F0" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity=".7" />
    </svg>
  );
}

function LensV() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Rayos de luz enfocados por un lente">
      <circle cx="200" cy="200" r="184" fill={mist} />
      <g stroke={lens} strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M24 130L170 160" /><path d="M24 200L170 200" /><path d="M24 270L170 240" />
      </g>
      <path d="M200 70c46 40 46 220 0 260-46-40-46-220 0-260Z" fill="#fff" stroke={ink} strokeWidth="4" />
      <path d="M200 70c18 40 18 220 0 260" stroke={lens} strokeOpacity=".35" strokeWidth="3" fill="none" />
      <g stroke={ink} strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M232 160L330 200" /><path d="M232 200L330 200" /><path d="M232 240L330 200" />
      </g>
      <circle cx="330" cy="200" r="9" fill="#F6C453" stroke={ink} strokeWidth="3" />
    </svg>
  );
}

function Align() {
  const eye = "M0 0C28-34 74-34 102 0 74 34 28 34 0 0Z";
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Dos ojos que se alinean hacia un mismo punto">
      <circle cx="200" cy="200" r="184" fill={mist} />
      <g transform="translate(60 150)">
        <path d={eye} fill="#fff" stroke={ink} strokeWidth="4" />
        <circle cx="51" cy="0" r="17" fill={lens} /><circle cx="51" cy="0" r="7" fill={ink} />
      </g>
      <g transform="translate(238 150)">
        <path d={eye} fill="#fff" stroke={ink} strokeWidth="4" />
        <circle cx="38" cy="0" r="17" fill={lens} /><circle cx="38" cy="0" r="7" fill={ink} />
      </g>
      <path d="M111 150L200 285M276 150L200 285" stroke={ink} strokeWidth="3" strokeDasharray="4 9" strokeLinecap="round" />
      <circle cx="200" cy="285" r="22" fill="none" stroke="#F6C453" strokeWidth="6" />
      <circle cx="200" cy="285" r="6" fill={ink} />
    </svg>
  );
}

function Alert() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ojo con señal de alerta">
      <circle cx="200" cy="200" r="184" fill="#FFF1EC" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#E9654B" strokeOpacity=".25" strokeWidth="3" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#E9654B" strokeOpacity=".4" strokeWidth="3" />
      <path d="M60 200C100 130 150 110 200 110s100 20 140 90c-40 70-90 90-140 90s-100-20-140-90Z" fill="#fff" stroke={ink} strokeWidth="5" strokeLinejoin="round" />
      <g stroke="#E9654B" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M80 190l36 8M86 220l34-8M320 190l-36 8M314 220l-34-8M150 130l14 26M250 130l-14 26" />
      </g>
      <circle cx="200" cy="200" r="48" fill={lens} /><circle cx="200" cy="200" r="20" fill={ink} />
      <circle cx="214" cy="184" r="8" fill="#fff" />
      <rect x="176" y="316" width="48" height="48" rx="24" fill="#E9654B" />
      <path d="M200 328v16M200 352v.01" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Visual({ kind }: { kind: VisualKey }) {
  const map = { exam: Exam, retina: Retina, lens: LensV, align: Align, alert: Alert } as const;
  const C = map[kind];
  return (
    <div className="visual">
      <C />
    </div>
  );
}
