import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.colors.background};
    --bg-alt: ${({ theme }) => theme.colors.backgroundAlt};
    --surface: ${({ theme }) => theme.colors.surface};
    --surface-strong: ${({ theme }) => theme.colors.surfaceStrong};
    --surface-muted: ${({ theme }) => theme.colors.surfaceMuted};
    --line: ${({ theme }) => theme.colors.line};
    --line-bright: ${({ theme }) => theme.colors.lineBright};
    --text: ${({ theme }) => theme.colors.text};
    --text-muted: ${({ theme }) => theme.colors.textMuted};
    --text-dim: ${({ theme }) => theme.colors.textDim};
    --accent: ${({ theme }) => theme.colors.accent};
    --accent-soft: ${({ theme }) => theme.colors.accentSoft};
    --accent-strong: ${({ theme }) => theme.colors.accentStrong};
    --shadow: ${({ theme }) => theme.colors.shadow};
    --danger: ${({ theme }) => theme.colors.danger};
    --font-heading: ${({ theme }) => theme.fonts.heading};
    --font-mono: ${({ theme }) => theme.fonts.mono};
    --content-width: ${({ theme }) => theme.sizes.content};
    --nav-height: ${({ theme }) => theme.sizes.nav};
    --radius: ${({ theme }) => theme.sizes.radius};
    --radius-small: ${({ theme }) => theme.sizes.radiusSmall};
    --transition: ${({ theme }) => theme.transition};
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: var(--bg);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--line-bright) var(--bg);
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: var(--bg);
  }

  *::-webkit-scrollbar-thumb {
    background: var(--line-bright);
    border-radius: 999px;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    color: var(--text);
    background:
      radial-gradient(circle at top right, rgba(57, 231, 255, 0.08), transparent 24%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.015), transparent 20%),
      var(--bg);
    font-family: var(--font-heading);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -2;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 72px 72px;
    pointer-events: none;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(180deg, transparent 0%, rgba(13, 17, 21, 0.18) 40%, rgba(13, 17, 21, 0.65) 100%);
    pointer-events: none;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition), border-color var(--transition), background-color var(--transition), transform var(--transition);
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    border: 0;
    background: none;
  }

  img,
  svg,
  canvas {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background: var(--accent-soft);
    color: var(--text);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  main {
    width: min(100%, var(--content-width));
    margin: 0 auto;
    padding: calc(var(--nav-height) + 32px) 24px 80px;
  }

  section {
    position: relative;
    padding: 56px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: var(--text);
    letter-spacing: -0.03em;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.7;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  code {
    font-family: var(--font-mono);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    content: '';
    width: 28px;
    height: 1px;
    background: currentColor;
  }

  .section-heading {
    display: grid;
    gap: 12px;
    margin-bottom: 28px;
  }

  .section-heading h2 {
    font-size: clamp(2rem, 4vw, 3.3rem);
  }

  .section-heading p {
    max-width: 720px;
  }

  @media (max-width: 900px) {
    main {
      padding-top: calc(var(--nav-height) + 20px);
    }

    section {
      padding: 44px 0;
    }
  }
`;

export default GlobalStyle;
