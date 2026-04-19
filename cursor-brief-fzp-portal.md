# Cursor brief: FŽP AI Akademie — webový portál

## Co buduješ

Webový knowledge portál pro zaměstnance Fakulty životního prostředí ČZU v Praze.
Portál slouží jako rozcestník a studijní prostředí pro práci s umělou inteligencí.
Cílová skupina: vědci, pedagogové, administrativa.

**Technický stack:**
- Čisté HTML + CSS + vanilla JS (žádný framework)
- Žádný backend, žádné přihlašování
- Hostování na GitHub Pages
- Každá stránka = samostatný `.html` soubor

---

## Struktura souborů

```
/
├── index.html                  ← hlavní portál (dashboard)
├── _sidebar.html               ← sidebar jako sdílená komponenta (JS include)
├── sidebar.js                  ← skript pro načtení sidebaru do každé stránky
├── style.css                   ← globální styly (sdílené napříč celým portálem)
│
├── /prompty/
│   ├── priprava.html           ← obsah z původní Prompt banky, tab Příprava
│   ├── vyuka.html              ← obsah z původní Prompt banky, tab Výuka
│   ├── hodnoceni.html          ← obsah z původní Prompt banky, tab Hodnocení
│   └── pravidla.html           ← obsah z původní Prompt banky, tab Pravidla
│
├── /navody/
│   ├── jak-zacit.html
│   ├── rcpo-metoda.html
│   └── technicke-tipy.html
│
├── /v-praxi/
│   ├── vedecky-clanek.html     ← situační stránka: Píšu vědecký článek
│   ├── reserse.html
│   ├── priprava-vyuky.html
│   ├── administrativa.html
│   ├── grant-zprava.html
│   └── analyza-dat.html
│
├── /bezpecnost/
│   ├── pravidla-czu.html
│   ├── eu-ai-act.html
│   └── co-nesdilet.html
│
├── /agenti/
│   ├── prehled.html
│   └── [položky se budou přidávat]
│
├── /komunita/
│   └── novinky.html
│
└── /aplikace/
    ├── copilot-pruvodce.html
    ├── ai-toolkit.html
    └── copilot-kucharka.html
```

---

## Design systém

### Barevná paleta

```css
:root {
  --color-bg:           #f7f7f5;
  --color-surface:      #ffffff;
  --color-sidebar-bg:   #f0efec;
  --color-border:       rgba(0,0,0,0.09);
  --color-border-hover: rgba(0,0,0,0.18);

  --color-text-primary:   #1a1a18;
  --color-text-secondary: #6b6b65;
  --color-text-muted:     #a0a09a;

  --color-brand:       #1a3a2e;
  --color-brand-mid:   #1D9E75;
  --color-brand-light: #EAF3DE;

  --color-blue:   #378ADD;
  --color-teal:   #1D9E75;
  --color-amber:  #BA7517;
  --color-purple: #7F77DD;

  --color-success-bg:      #EAF3DE;
  --color-success-text:    #0F6E56;
  --color-success-dot:     #1D9E75;
  --color-danger-bg:       #FCEBEB;
  --color-danger-text:     #A32D2D;
  --color-danger-dot:      #E24B4A;
  --color-warning-bg:      #FAEEDA;
  --color-warning-text:    #854F0B;
  --color-warning-dark:    #633806;
  --color-warning-border:  #BA7517;
}
```

### Typografie

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap');

body { font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.65; }
h1   { font-family: 'DM Serif Display', serif; font-size: 28px; font-weight: 400; }
h2   { font-size: 18px; font-weight: 500; }
h3   { font-size: 15px; font-weight: 500; }
.label { font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
```

### Vizuální pravidla

- Flat design — bez gradientů, bez stínů
- `border-radius: 10px` pro karty, `8px` pro menší bloky
- Ohraničení: vždy `0.5px solid var(--color-border)`
- Hover: pouze `border-color` → `--color-border-hover`
- Barevný proužek `3px` vlevo = vizuální identita mini-aplikace

---

## Layout — hlavní šablona

```html
<body>
  <div class="shell">
    <aside id="sidebar"></aside>
    <main class="content">
      <header class="topbar">
        <nav class="breadcrumb">
          <a href="/index.html">FŽP AI Akademie</a> › <span>Sekce</span> › <b>Stránka</b>
        </nav>
      </header>
      <article class="page-body"><!-- obsah --></article>
    </main>
  </div>
</body>
```

```css
.shell { display: flex; min-height: 100vh; background: var(--color-bg); }
aside#sidebar { width: 224px; flex-shrink: 0; background: var(--color-sidebar-bg); border-right: 0.5px solid var(--color-border); position: sticky; top: 0; height: 100vh; overflow-y: auto; }
.content { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.topbar { padding: 12px 36px; border-bottom: 0.5px solid var(--color-border); background: var(--color-surface); position: sticky; top: 0; z-index: 10; }
.page-body { padding: 36px; max-width: 820px; }
```

---

## Sidebar

### Struktura

```
[●] FŽP AI Akademie

▼ Aplikace
   ● Copilot průvodce        (#1D9E75)
   ● Prompt banka & nástroje (#7F77DD)

▼ Prompty pro výuku
   ○ Příprava
   ○ Výuka
   ○ Hodnocení
   ○ Pravidla

▼ Jak pracovat s AI
   ○ Jak začít s AI
   ○ Jak psát prompty (RCPO)
   ○ Technické tipy a triky

▼ AI v praxi
   ○ Píšu vědecký článek
   ○ Dělám rešerši
   ○ Připravuji výuku
   ○ Řeším administrativu
   ○ Píšu grant nebo zprávu
   ○ Analyzuji data

▼ Bezpečnost & etika
   ○ Pravidla ČZU
   ○ EU AI Act — co vědět
   ○ Co nesdílet s AI

▼ Agenti a asistenti
   ○ Přehled agentů

▼ Komunita
   ○ Novinky a aktuality

v1.0 beta · FŽP ČZU
```

### Chování

- Sekce kolapsovatelné, stav ukládán do `localStorage`
- Aktuální stránka: tučný text + slabší background
- Aktuální sekce se při načtení automaticky otevře

### sidebar.js

```js
fetch('/_sidebar.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('sidebar').innerHTML = html;
    markActive();
    restoreSections();
  });
```

---

## index.html — dashboard

Dashboard **nemá sidebar**. Vlastní layout:

**1. Hero** — pozadí `#1a3a2e`
```
FŽP AI AKADEMIE   (label, verzálky, zelená)
Umělá inteligence ve vaší každodenní práci   (h1, DM Serif Display, bílá)
Průvodci, nástroje a prompty...   (perex, světle zelená)
[Vstoupit →]   (CTA, bílé ohraničení)
```

**2. Aplikace** — 2 karty, `grid-template-columns: 1fr 1fr`
Každá karta: barevný proužek 3px vlevo + label + h3 + popis + "Otevřít →"
- Copilot průvodce (#1D9E75)
- Prompt banka & nástroje (#7F77DD)

**3. Znalostní báze** — 4 karty, 2×2 grid
Ikonka + název + krátký popis → odkaz na podstránku

**4. Footer** — verze, datum

---

## Komponenty pro podstránky

### Standardní (všechny sekce)

```html
<div class="page-header">
  <div class="label">AI v praxi</div>
  <h1>Název stránky</h1>
  <p class="perex">Krátký popis.</p>
</div>

<div class="info-card">
  <span class="info-icon">💡</span>
  <p>Text tipu.</p>
</div>

<div class="card-grid">
  <a class="card" href="..."><h3>Název</h3><p>Popis</p></a>
</div>
```

---

### Speciální komponenty — sekce "AI v praxi"

Každá situační stránka v /v-praxi/ používá níže popsané komponenty.
Připrav hotové CSS pro všechny — obsah doplní Vlaďka.

#### 1. Situation card

```html
<div class="situation-card">
  <p><strong>Situace:</strong> Popis konkrétní situace.</p>
</div>
```

```css
.situation-card {
  background: var(--color-surface);
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 24px;
  border-left: 3px solid var(--color-blue);
  border: 0.5px solid var(--color-border);
}
```

#### 2. Two-column card — AI pomůže / AI nenahradí

```html
<div class="two-col">
  <div class="col-card col-yes">
    <h3>AI pomůže</h3>
    <ul><li>Položka</li></ul>
  </div>
  <div class="col-card col-no">
    <h3>AI nenahradí</h3>
    <ul><li>Položka</li></ul>
  </div>
</div>
```

```css
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
.col-card { border-radius: 10px; padding: 14px 16px; }
.col-card h3 { font-size: 12px; font-weight: 500; margin-bottom: 8px; }
.col-card ul { list-style: none; padding: 0; }
.col-card li { font-size: 12px; line-height: 1.5; padding: 3px 0 3px 16px; position: relative; }
.col-card li::before { content: ''; position: absolute; left: 0; top: 9px; width: 6px; height: 6px; border-radius: 50%; }

.col-yes { background: var(--color-success-bg); border: 0.5px solid rgba(29,158,117,0.15); }
.col-yes h3 { color: var(--color-success-text); }
.col-yes li::before { background: var(--color-success-dot); }

.col-no { background: var(--color-danger-bg); border: 0.5px solid rgba(226,75,74,0.15); }
.col-no h3 { color: var(--color-danger-text); }
.col-no li::before { background: var(--color-danger-dot); }
```

#### 3. Flow strip — vizuální workflow

```html
<div class="flow-strip">
  <span class="flow-chip" style="background:#378ADD">1 Rešerše</span>
  <span class="flow-arrow">→</span>
  <span class="flow-chip" style="background:#7F77DD">2 Osnova</span>
</div>
```

```css
.flow-strip { display: flex; gap: 6px; margin: 20px 0; flex-wrap: wrap; align-items: center; }
.flow-chip { font-size: 10px; font-weight: 500; padding: 4px 10px; border-radius: 14px; color: #fff; }
.flow-arrow { font-size: 10px; color: var(--color-text-muted); }
```

#### 4. Step accordion — kroky workflow

```html
<details class="step">
  <summary>
    <span class="step-num" style="background:#378ADD">1</span>
    Název kroku
    <span class="step-meta">Nástroj</span>
  </summary>
  <div class="step-body">
    <p>Obsah...</p>
  </div>
</details>
```

```css
.step { border: 0.5px solid var(--color-border); border-radius: 10px; margin-bottom: 8px; overflow: hidden; transition: border-color 0.15s; }
.step:hover { border-color: var(--color-border-hover); }
.step summary { display: flex; align-items: center; gap: 10px; padding: 12px 16px; cursor: pointer; list-style: none; font-size: 13px; font-weight: 500; }
.step summary::-webkit-details-marker { display: none; }
.step summary::before { content: '▶'; font-size: 8px; color: var(--color-text-muted); transition: transform 0.15s; }
.step[open] summary::before { transform: rotate(90deg); }
.step-num { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; color: #fff; flex-shrink: 0; }
.step-meta { font-size: 11px; color: var(--color-text-muted); font-weight: 400; margin-left: auto; }
.step-body { padding: 0 16px 14px 52px; font-size: 12px; color: var(--color-text-secondary); line-height: 1.65; }
```

#### 5. Prompt block — kopírovatelný prompt

```html
<div class="prompt-block">
Text promptu...
<button class="copy-btn" onclick="copyPrompt(this)">Kopírovat</button>
</div>
```

```css
.prompt-block { background: var(--color-bg); border-radius: 8px; padding: 12px 14px; margin: 8px 0; position: relative; font-family: monospace; font-size: 12px; line-height: 1.5; color: var(--color-text-secondary); white-space: pre-wrap; border: 0.5px solid var(--color-border); }
.copy-btn { position: absolute; top: 8px; right: 8px; font-size: 10px; padding: 3px 8px; border-radius: 6px; border: 0.5px solid var(--color-border-hover); background: var(--color-surface); color: var(--color-text-secondary); cursor: pointer; }
.copy-btn:hover { background: var(--color-bg); }
```

```js
function copyPrompt(btn) {
  const text = btn.parentElement.textContent.replace('Kopírovat', '').replace('Zkopírováno ✓', '').trim();
  navigator.clipboard.writeText(text);
  btn.textContent = 'Zkopírováno ✓';
  setTimeout(() => btn.textContent = 'Kopírovat', 2000);
}
```

#### 6. Warning card — varování

```html
<div class="warning-card">
  <div class="warn-title">Pozor</div>
  <p>Text varování.</p>
</div>
```

```css
.warning-card { background: var(--color-warning-bg); border-radius: 8px; padding: 12px 14px; margin: 8px 0; border-left: 3px solid var(--color-warning-border); }
.warn-title { font-size: 12px; font-weight: 500; color: var(--color-warning-text); margin-bottom: 4px; }
.warning-card p { font-size: 11px; color: var(--color-warning-dark); line-height: 1.5; }
```

#### 7. Tool card grid — nástroje

```html
<div class="tools-grid">
  <div class="tool-card">
    <div class="tool-phase">Rešerše</div>
    <h4>Elicit</h4>
    <p>Popis nástroje</p>
  </div>
</div>
```

```css
.tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0; }
.tool-card { background: var(--color-surface); border: 0.5px solid var(--color-border); border-radius: 8px; padding: 10px 12px; }
.tool-phase { font-size: 9px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 4px; }
.tool-card h4 { font-size: 12px; font-weight: 500; margin-bottom: 2px; }
.tool-card p { font-size: 11px; color: var(--color-text-secondary); line-height: 1.4; }
```

#### 8. Tool badge — inline označení nástroje

```html
<span class="tool-badge badge-blue">Elicit</span>
```

```css
.tool-badge { display: inline-block; font-size: 10px; font-weight: 500; padding: 2px 8px; border-radius: 10px; margin-right: 4px; margin-bottom: 4px; }
.badge-blue   { background: #E6F1FB; color: #185FA5; }
.badge-teal   { background: #E1F5EE; color: #0F6E56; }
.badge-purple { background: #EEEDFE; color: #534AB7; }
.badge-amber  { background: #FAEEDA; color: #854F0B; }
.badge-gray   { background: var(--color-bg); color: var(--color-text-secondary); }
```

---

## Migrace "Prompt banky" do portálu

Původní standalone aplikace "Proměna výuky s AI" se **NESTÁVÁ** samostatnou aplikací.
Integruje se jako sekce **"Prompty pro výuku"** se 4 podstránkami.

Každá podstránka používá `<details>` akordeony s copy tlačítky. Zachovat fialové akcenty
(`--color-purple`). Obsah (prompty) doplní Vlaďka — Cursor připraví pouze šablony.

---

## Priorita buildění

1. `style.css` — celý design systém + všechny komponenty výše
2. `_sidebar.html` + `sidebar.js` — sdílená navigace
3. `index.html` — dashboard
4. `_template.html` — prázdná šablona podstránky se sidebarem
5. `_template-v-praxi.html` — šablona pro situační stránky se všemi 8 komponenty
6. `_template-prompty.html` — šablona pro Prompty pro výuku s akordeony
7. Zbývající podstránky (obsah doplní Vlaďka)

---

## Poznámky pro Cursor

- Sidebar nenačítej přes `fetch('/_sidebar.html')` — tato metoda nefunguje při lokálním
  otevření přes `file://`. Místo toho vlož sidebar přímo jako HTML do každé stránky,
  nebo použij JavaScript bez fetch (inline vložení přes `document.write` nebo template
  literal v `sidebar.js` s detekci `window.location.protocol`).
- Funkci `copyPrompt(btn)` definuj globálně v `utils.js`.
- Všechny `<details>` akordeony: zavřené při prvním načtení (žádný `open` atribut).
- **"Proměna výuky s AI"** se NESTÁVÁ standalone aplikací — Cursor připraví šablonu,
  obsah doplní Vlaďka.

## URL externích aplikací

Všechny odkazy na mini-aplikace používej jako absolutní URL:

- **Copilot průvodce** → `https://jurasova.github.io/copilot-fzp`
- **Prompt banka & nástroje** → `https://jurasova.github.io/promptbanka-ai`

Poznámka: Prompt banka zatím obsahuje i přehled AI nástrojů v jedné aplikaci.
Karta "AI Toolkit" na dashboardu se proto nahrazuje kartou "Prompt banka & nástroje".

## Dashboard — počet a layout karet aplikací

Na `index.html` jsou **2 karty aplikací** (ne 3):
- Copilot průvodce (zeleno-teal proužek #1D9E75 — odpovídá barvám samotné aplikace)
- Prompt banka & nástroje (fialový proužek #7F77DD)

Layout: `grid-template-columns: 1fr 1fr` (ne repeat(3, 1fr)).
Karty jsou širší — využijí prostor lépe než tři užší karty.
