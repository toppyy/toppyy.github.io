export function matiasAvatarSVG(styles='') {
  return `
<svg class="matias-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" ${styles}>
  <!-- long back hair, behind the shoulders -->
  <path d="M32 5C20.8 5 14 12.6 14 23.5v16c0 7 1.8 12.6 4.4 16.5h27.2c2.6-3.9 4.4-9.5 4.4-16.5v-16C50 12.6 43.2 5 32 5z" fill="#4e2c13"/>
  <!-- broad shoulders / festive sweater -->
  <path d="M7 64c2-9.5 10.5-14.5 25-14.5S55 54.5 57 64z" fill="#b8352f"/>
  <path d="M14 59.5c4.5-2.8 10.5-4.2 18-4.2s13.5 1.4 18 4.2" fill="none" stroke="#f6efe6" stroke-width="2.4" stroke-linecap="round"/>
  <!-- neck + Adam's apple -->
  <path d="M28.4 40h7.2v9c0 2.8-1.7 4.2-3.6 4.2s-3.6-1.4-3.6-4.2z" fill="#d9a97e"/>
  <ellipse cx="32" cy="47.4" rx="1.3" ry="1.5" fill="#cf9d72" opacity="0.7"/>
  <!-- ears -->
  <ellipse cx="19.4" cy="30.5" rx="2.5" ry="3.6" fill="#dcae82"/>
  <ellipse cx="44.6" cy="30.5" rx="2.5" ry="3.6" fill="#dcae82"/>
  <!-- squared jaw and chin -->
  <path d="M32 15.8C24.4 15.8 19.6 21.6 19.6 29.6c0 5.2 1.4 9.4 4 12.8 2.2 3 5 4.6 8.4 4.6s6.2-1.6 8.4-4.6c2.6-3.4 4-7.6 4-12.8 0-8-4.8-13.8-12.4-13.8z" fill="#e9be92"/>
  <!-- stubble along the jaw -->
  <path d="M22.4 34.2c1.4 5.2 4.8 9.3 9.6 10.6 4.8-1.3 8.2-5.4 9.6-10.6-2.4 3.6-5.6 5.6-9.6 5.6s-7.2-2-9.6-5.6z" fill="#6b4a2c" opacity="0.2"/>
  <!-- brows: one raised high, one relaxed — puzzled, never angry -->
  <path d="M22.4 24c1.8-1.9 4.3-2.1 6-.7" fill="none" stroke="#33200d" stroke-width="2.1" stroke-linecap="round"/>
  <path d="M35.8 27.3c1.5-1.2 3.6-1.3 5.2-.2" fill="none" stroke="#33200d" stroke-width="2.1" stroke-linecap="round"/>
  <!-- eyes: left a touch wider and higher, pupils drifting apart -->
  <ellipse cx="26.3" cy="30.4" rx="3.2" ry="3.6" fill="#fff"/>
  <ellipse cx="37.8" cy="31.3" rx="2.9" ry="3.2" fill="#fff"/>
  <circle cx="26.3" cy="30.2" r="1.75" fill="#2f1c0b"/>
  <circle cx="38.4" cy="31.6" r="1.65" fill="#2f1c0b"/>
  <circle cx="26.9" cy="29.4" r="0.62" fill="#fff"/>
  <circle cx="39" cy="30.9" r="0.55" fill="#fff"/>
  <!-- stronger nose -->
  <path d="M32 32.8v3.1c0 .8-.5 1.4-1.2 1.7" fill="none" stroke="#c98d61" stroke-width="1.7" stroke-linecap="round"/>
  <!-- lopsided open grin -->
  <path d="M27.6 39.3c.6 3 2.7 4.9 5.2 4.6 2.4-.3 4-2.3 4.1-4.9-3 .4-6.2.5-9.3.3z" fill="#7d3a34"/>
  <path d="M28.4 39.6c2.5.6 5.1.5 7.4-.2" fill="none" stroke="#fdf6ee" stroke-width="1.8" stroke-linecap="round"/>
  <!-- high side-swept hairline, wavy and a little messy (forehead visible) -->
  <path d="M47 28.5C48.2 16 42 7.5 32 7.5S15.8 16 17 28.5c1.2-4.5 3.6-7.3 6.6-8.3-.6 3.4.7 5.8 3 6.4 1.2-3.8 3.6-6.4 6.8-7.4 4 1.4 7.4 2.2 10.6 1.4 1.4 2.2 2.5 4.8 3 7.9z" fill="#5a3417"/>
  <!-- hair shine -->
  <path d="M24 13.6c3-2.4 6.4-3.6 9.6-3.6" fill="none" stroke="#6d4526" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/>
  <!-- short sideburns in front of the ears -->
  <path d="M19.7 27.4c-.5 2-.6 3.7-.4 5.2l1.8-.2c-.3-1.5-.3-3 0-4.6z" fill="#4e2c13"/>
  <path d="M44.3 27.4c.5 2 .6 3.7.4 5.2l-1.8-.2c.3-1.5.3-3 0-4.6z" fill="#4e2c13"/>
</svg>`;
}

export function matiasCelebratingSVG(styles='') {
  return `
<svg class="matias-svg" viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" ${styles}>
  <!-- snowy ground -->
  <ellipse cx="70" cy="76" rx="66" ry="5" fill="#eef6fa"/>
  <ellipse cx="70" cy="76" rx="50" ry="3" fill="#ffffff" opacity="0.85"/>

  <!-- christmas tree -->
  <rect x="106" y="63" width="8" height="13" rx="2" fill="#7a4a21"/>
  <path d="M110 30 140 68H80Z" fill="#2f7d46"/>
  <path d="M110 20 136 54H84Z" fill="#35914f"/>
  <path d="M110 12 128 38H92Z" fill="#3fa65a"/>
  <path d="M110 1 112.2 5.6l4.9.4-3.7 3.3 1.1 4.8-4.5-2.6-4.5 2.6 1.1-4.8-3.7-3.3 4.9-.4z" fill="#f7c948"/>
  <circle cx="104" cy="60" r="2.4" fill="#d64545"/>
  <circle cx="118" cy="59" r="2.2" fill="#f7c948"/>
  <circle cx="98" cy="50" r="2.2" fill="#4a90d9"/>
  <circle cx="123" cy="49" r="2.4" fill="#d64545"/>
  <circle cx="108" cy="42" r="2.1" fill="#f7c948"/>
  <circle cx="117" cy="32" r="2.1" fill="#4a90d9"/>
  <circle cx="104" cy="30" r="2.1" fill="#d64545"/>
  <path d="M110 34v26" stroke="#256b3a" stroke-width="1" opacity="0.45"/>

  <!-- little presents at the base of the tree -->
  <rect x="82" y="64" width="12" height="12" rx="2" fill="#4a90d9"/>
  <path d="M88 64v12M82 70h12" stroke="#f6efe6" stroke-width="1.6"/>
  <rect x="94" y="68" width="8" height="8" rx="2" fill="#f7c948"/>
  <path d="M98 68v8M94 72h8" stroke="#b8352f" stroke-width="1.3"/>

  <!-- matias -->
  <g transform="translate(2,16) scale(0.92)">
    <!-- long back hair, behind the shoulders -->
    <path d="M32 5C20.8 5 14 12.6 14 23.5v16c0 7 1.8 12.6 4.4 16.5h27.2c2.6-3.9 4.4-9.5 4.4-16.5v-16C50 12.6 43.2 5 32 5z" fill="#4e2c13"/>
    <!-- broad shoulders / festive sweater -->
    <path d="M7 64c2-9.5 10.5-14.5 25-14.5S55 54.5 57 64z" fill="#b8352f"/>
    <path d="M14 59.5c4.5-2.8 10.5-4.2 18-4.2s13.5 1.4 18 4.2" fill="none" stroke="#f6efe6" stroke-width="2.4" stroke-linecap="round"/>
    <!-- neck + Adam's apple -->
    <path d="M28.4 40h7.2v9c0 2.8-1.7 4.2-3.6 4.2s-3.6-1.4-3.6-4.2z" fill="#d9a97e"/>
    <ellipse cx="32" cy="47.4" rx="1.3" ry="1.5" fill="#cf9d72" opacity="0.7"/>
    <!-- ears -->
    <ellipse cx="19.4" cy="30.5" rx="2.5" ry="3.6" fill="#dcae82"/>
    <ellipse cx="44.6" cy="30.5" rx="2.5" ry="3.6" fill="#dcae82"/>
    <!-- squared jaw and chin -->
    <path d="M32 15.8C24.4 15.8 19.6 21.6 19.6 29.6c0 5.2 1.4 9.4 4 12.8 2.2 3 5 4.6 8.4 4.6s6.2-1.6 8.4-4.6c2.6-3.4 4-7.6 4-12.8 0-8-4.8-13.8-12.4-13.8z" fill="#e9be92"/>
    <!-- stubble along the jaw -->
    <path d="M22.4 34.2c1.4 5.2 4.8 9.3 9.6 10.6 4.8-1.3 8.2-5.4 9.6-10.6-2.4 3.6-5.6 5.6-9.6 5.6s-7.2-2-9.6-5.6z" fill="#6b4a2c" opacity="0.2"/>
    <!-- brows: one raised high, one relaxed -->
    <path d="M22.4 24c1.8-1.9 4.3-2.1 6-.7" fill="none" stroke="#33200d" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M35.8 27.3c1.5-1.2 3.6-1.3 5.2-.2" fill="none" stroke="#33200d" stroke-width="2.1" stroke-linecap="round"/>
    <!-- eyes -->
    <ellipse cx="26.3" cy="30.4" rx="3.2" ry="3.6" fill="#fff"/>
    <ellipse cx="37.8" cy="31.3" rx="2.9" ry="3.2" fill="#fff"/>
    <circle cx="26.3" cy="30.2" r="1.75" fill="#2f1c0b"/>
    <circle cx="38.4" cy="31.6" r="1.65" fill="#2f1c0b"/>
    <circle cx="26.9" cy="29.4" r="0.62" fill="#fff"/>
    <circle cx="39" cy="30.9" r="0.55" fill="#fff"/>
    <!-- nose -->
    <path d="M32 32.8v3.1c0 .8-.5 1.4-1.2 1.7" fill="none" stroke="#c98d61" stroke-width="1.7" stroke-linecap="round"/>
    <!-- lopsided open grin -->
    <path d="M27.6 39.3c.6 3 2.7 4.9 5.2 4.6 2.4-.3 4-2.3 4.1-4.9-3 .4-6.2.5-9.3.3z" fill="#7d3a34"/>
    <path d="M28.4 39.6c2.5.6 5.1.5 7.4-.2" fill="none" stroke="#fdf6ee" stroke-width="1.8" stroke-linecap="round"/>
    <!-- hair -->
    <path d="M47 28.5C48.2 16 42 7.5 32 7.5S15.8 16 17 28.5c1.2-4.5 3.6-7.3 6.6-8.3-.6 3.4.7 5.8 3 6.4 1.2-3.8 3.6-6.4 6.8-7.4 4 1.4 7.4 2.2 10.6 1.4 1.4 2.2 2.5 4.8 3 7.9z" fill="#5a3417"/>
    <path d="M24 13.6c3-2.4 6.4-3.6 9.6-3.6" fill="none" stroke="#6d4526" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/>
    <path d="M19.7 27.4c-.5 2-.6 3.7-.4 5.2l1.8-.2c-.3-1.5-.3-3 0-4.6z" fill="#4e2c13"/>
    <path d="M44.3 27.4c.5 2 .6 3.7.4 5.2l-1.8-.2c.3-1.5.3-3 0-4.6z" fill="#4e2c13"/>

    <!-- arm reaching out -->
    <path d="M47 57c8 3 14 0 16-6" fill="none" stroke="#b8352f" stroke-width="8" stroke-linecap="round"/>
    <!-- banana -->
    <path d="M63.5 50.2C64.3 43.6 68.8 38.8 76 36.6c1.1-.3 1.7.8 1 1.7-2.9 4.3-6.2 7.9-10 10.9-1.4 1.1-3.5 1.9-3.5 1z" fill="#f8d84a" stroke="#d4b12e" stroke-width="0.9" stroke-linejoin="round"/>
    <path d="M66 47.5c2.6-3 5.6-5.7 8.8-8" fill="none" stroke="#e8c33c" stroke-width="0.8" opacity="0.8"/>
    <path d="M75.8 37.2c.5-.4 1.1-.7 1.7-.8" stroke="#6b4a1f" stroke-width="1.2" stroke-linecap="round"/>
    <!-- hand holding the banana -->
    <ellipse cx="63" cy="50" rx="3.4" ry="3.1" fill="#e9be92"/>
    <path d="M61.6 48.6c1.2.6 2.4.7 3.6.3" stroke="#cf9d72" stroke-width="0.7" fill="none" stroke-linecap="round"/>
  </g>

  <!-- confetti -->
  <circle cx="18" cy="18" r="1.6" fill="#d64545"/>
  <circle cx="34" cy="9" r="1.4" fill="#f7c948"/>
  <circle cx="56" cy="14" r="1.5" fill="#3fa65a"/>
  <circle cx="74" cy="24" r="1.4" fill="#4a90d9"/>
  <circle cx="86" cy="12" r="1.6" fill="#d64545"/>
  <circle cx="132" cy="26" r="1.5" fill="#f7c948"/>
  <path d="M24 26l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" fill="#f7c948"/>
  <path d="M128 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" fill="#ffffff"/>
</svg>`;
}

export function blockSVG() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90">
  <path d="M17 66 25 43 44 29 68 24 91 37 104 61 96 73 27 75Z"
        fill="#77736d" stroke="#514e49" stroke-width="3" stroke-linejoin="round"/>
  <path d="m25 43 19-14 10 20-14 16-23 1Z" fill="#918c83"/>
  <path d="m54 49 14-25 23 13-8 21-24 7Z" fill="#858078"/>
  <path d="m41 65 13-16 29 9 11 15-67 2Z" fill="#68655f"/>
  <path d="m44 34 8-4m30 6 8 5m-47 28 8-4" fill="none"
        stroke="#aaa59c" stroke-width="3" stroke-linecap="round"/>
</svg>`
}

export function leverSVG() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect fill="white"/>

  <!-- Base bottom edge -->
  <path d="M41 139v31c0 34 39 61 87 61s87-27 87-61v-31"
        fill="#292929"/>
  <ellipse cx="128" cy="139" rx="87" ry="52" fill="#aaa9ad"/>

  <!-- Button's dark red side -->
  <path d="M54 102v30c0 29 33 52 74 52s74-23 74-52v-30"
        fill="#3b080b"/>
  <ellipse cx="128" cy="102" rx="74" ry="43" fill="#d00008"/>

  <!-- Red top -->
  <path d="M54 102c0-24 33-43 74-43s74 19 74 43"
        fill="none"/>
</svg>
`;
}

export function leverDownSVG() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect fill="white"/>

  <!-- Base bottom edge -->
  <path d="M41 139v31c0 34 39 61 87 61s87-27 87-61v-31"
        fill="#294929"/>
  <ellipse cx="128" cy="139" rx="87" ry="52" fill="#aaa9ad"/>

  <!-- Short dark red side: button is pressed down -->
  <path d="M54 119v13c0 29 33 52 74 52s74-23 74-52v-13"
        fill="#3b080b"/>
  <ellipse cx="128" cy="119" rx="74" ry="43" fill="darkblue"/>
</svg>`
}

export function lavaSVG() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#e84a0c"/></svg>` }

export function exitSVG() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#222" /></svg>`; }

