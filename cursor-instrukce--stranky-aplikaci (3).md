# Cursor instrukce: Sjednocení stránek aplikací

## Co se mění a proč

Všechny tři aplikace v sekci "Aplikace" musí fungovat stejně:
klik v sidebaru → mezistránka s kontextem → tlačítko otevře aplikaci v novém tabu.

Aktuální stav je nekonzistentní — Copilot průvodce má prázdnou mezistránku,
Proměna výuky s AI otevírá přímo. Obojí je špatně.

---

## Vytvoř tři soubory

### `/aplikace/copilot-pruvodce.html`

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Copilot průvodce · FŽP AI Akademie</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <div class="shell">
    <aside id="sidebar"></aside>
    <main class="content">
      <header class="topbar">
        <nav class="breadcrumb">
          <a href="../index.html">FŽP AI Akademie</a> › <span>Aplikace</span> › <b>Copilot průvodce</b>
        </nav>
      </header>
      <article class="page-body">

        <div class="app-label">Aplikace · M365 Copilot</div>
        <h1>Copilot průvodce</h1>
        <p class="perex">Interaktivní úvod do Microsoft 365 Copilot v kontextu FŽP — návody, prompty a hotové postupy pro vědce, pedagogy a administrativu.</p>

        <div class="jak-pracovat">
          <div class="jak-pracovat__header">
            <div class="jak-pracovat__icon"></div>
            <span class="jak-pracovat__title">Jak s tím pracovat</span>
          </div>
          <p class="jak-pracovat__text">
            Průvodce ukazuje, co Copilot umí konkrétně na FŽP — podle vaší role.
            Vyberte roli, zkopírujte prompt, vložte do Copilotu.
            Nebo stáhněte idea file a vložte ho přímo do Copilot Chatu —
            AI vás provede sama.
          </p>
          <div class="jak-pracovat__priklad">
            <span class="jak-pracovat__priklad-label">Příklad</span>
            50 nepřečtených e-mailů po dovolené → sekce Administrativa
            → prompt „Inbox po dovolené" → Copilot shrne za 3 minuty.
          </div>
        </div>

        <div class="app-actions">
          <a class="btn-primary" href="https://jurasova.github.io/copilot-fzp" target="_blank">
            Otevřít průvodce →
          </a>
          <a class="btn-secondary" href="https://jurasova.github.io/copilot-fzp/IDEA-FILE.md" download>
            Stáhnout idea file
          </a>
        </div>

        <div class="app-meta">
          <div class="app-meta__item"><strong>Určeno pro:</strong> vědce, pedagogy, administrativu</div>
          <div class="app-meta__item"><strong>Nástroj:</strong> Microsoft 365 Copilot</div>
          <div class="app-meta__item"><strong>Aktualizováno:</strong> duben 2026</div>
        </div>

      </article>
    </main>
  </div>
  <script src="../sidebar.js"></script>
</body>
</html>
```

---

### `/aplikace/promjena-vyuky.html`

Stejná struktura jako výše, pouze jiný obsah:

- `app-label`: Aplikace · Pedagogika & hodnocení
- `h1`: Proměna výuky s AI
- `perex`: Prompt banka pro VŠ: praktické prompty pro přípravu, výuku a hodnocení v době AI. Pomáhá s revizí sylabu a zadání, diagnostikou studentů i kurzu a s nastavením férového, konzistentního hodnocení včetně rubrik a zpětné vazby. Prompty jsou navržené tak, aby šly rovnou kopírovat a doplnit jen pár údajů.
- `jak-pracovat__text`: Vyberte situaci (příprava / výuka / hodnocení / pravidla), zkopírujte prompt a nahraďte oranžové části vlastními údaji — téma, sylabus, zadání, rubrika. Doporučení: vložte i podklady — výstupy pak budou přesnější a méně obecné.
- `jak-pracovat__priklad`: Potřebujete testové otázky na zítra → sekce Hodnocení → zkopírujte prompt → vložte do Copilotu → za 2 minuty máte návrh 10 otázek.
- `btn-primary href`: `https://jurasova.github.io/promptbanka-ai`
- `btn-primary text`: Otevřít aplikaci →
- Tlačítko "Stáhnout idea file": zatím vynech (idea file pro Prompt banku není připraven)
- `app-meta`: Určeno pro: pedagogy, vědce, administrativu · Nástroj: Copilot, ChatGPT, Claude · Aktualizováno: duben 2026

---

### `/aplikace/galerie-nastroju.html`

Stejná struktura jako ostatní mezistránky, obsah níže:

- `app-label`: Aplikace · Přehled nástrojů
- `h1`: Galerie AI nástrojů
- `perex`: Přehled doporučených AI nástrojů pro práci, výuku a výzkum na FŽP ČZU. Nástroje jsou rozděleny do kategorií — najdete chatboty, vědecké nástroje, nástroje pro dokumenty, vizualizace i automatizaci.
- `jak-pracovat__text`: Vyberte kategorii podle toho, co potřebujete udělat — ne podle toho, co jste slyšeli. Každý nástroj má popis, k čemu je nejlepší, a přímý odkaz. Tip: začněte 1–2 nástroji a postupně experimentujte s dalšími.
- `jak-pracovat__priklad`: Potřebujete shrnout 30 vědeckých článků → kategorie Výzkum → Elicit nebo Consensus → výsledky za minuty místo hodin.
- `btn-primary href`: `https://jurasova.github.io/promptbanka-ai/galerie_ai_nastroje.html`
- `btn-primary text`: Otevřít galerii nástrojů →
- Tlačítko "Stáhnout idea file": nevkládej
- `app-meta`: Určeno pro: vědce, pedagogy, administrativu · Kategorie: chatboti, dokumenty, výzkum, audio, automatizace · Aktualizováno: duben 2026

**Sidebar — aktualizuj:**
Galerie nástrojů je nyní aktivní. Odstraň `sb-item--disabled` a badge "Připravujeme".
Barva tečky: `#888780`
Odkaz: `aplikace/galerie-nastroju.html`

---

## CSS — přidej do style.css

```css
.app-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brand-mid);
  margin-bottom: 6px;
}

.jak-pracovat {
  background: var(--color-brand-light);
  border-left: 3px solid var(--color-brand-mid);
  padding: 16px 20px;
  margin: 20px 0;
}

.jak-pracovat__header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.jak-pracovat__icon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-brand-mid);
  flex-shrink: 0;
}

.jak-pracovat__title {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-brand-mid);
}

.jak-pracovat__text {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin-bottom: 10px;
}

.jak-pracovat__priklad {
  background: var(--color-surface);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.jak-pracovat__priklad-label {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-brand-mid);
  margin-right: 6px;
}

.app-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px 0;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-brand-mid);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 9px 18px;
  border-radius: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s;
}

.btn-primary:hover { opacity: 0.9; }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-surface);
  color: var(--color-text-secondary);
  font-size: 12px;
  padding: 9px 14px;
  border-radius: 8px;
  text-decoration: none;
  border: 0.5px solid var(--color-border-hover);
  cursor: pointer;
  transition: background 0.15s;
}

.btn-secondary:hover { background: var(--color-bg); }

.app-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 16px;
  border-top: 0.5px solid var(--color-border);
  margin-top: 4px;
}

.app-meta__item {
  font-size: 11px;
  color: var(--color-text-muted);
}

.app-meta__item strong {
  color: var(--color-text-secondary);
  font-weight: 500;
}
```

---

## Sidebar — aktualizuj odkazy

V `_sidebar.html` změň odkazy v sekci Aplikace:

```html
<!-- Aplikace -->
<div class="sb-item" onclick="navigate('aplikace/copilot-pruvodce.html')">
  <span class="dot" style="background:#1D9E75"></span> Copilot průvodce
</div>
<div class="sb-item" onclick="navigate('aplikace/promjena-vyuky.html')">
  <span class="dot" style="background:#7F77DD"></span> Proměna výuky s AI
</div>
<div class="sb-item sb-item--disabled">
  <span class="dot" style="background:var(--color-text-muted)"></span>
  Galerie nástrojů <span class="sb-badge">Připravujeme</span>
</div>
```

Pořadí v sidebaru:
1. Copilot průvodce (#1D9E75)
2. Proměna výuky s AI (#7F77DD)
3. Galerie nástrojů — neklikatelné, badge "Připravujeme", oddělené od předchozích dvou

Přidej CSS pro disabled položku a badge:

```css
.sb-item--disabled {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}

.sb-badge {
  font-size: 9px;
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--color-bg);
  border-radius: 4px;
  padding: 1px 5px;
  margin-left: 4px;
  border: 0.5px solid var(--color-border);
}
```

---

## Výsledek

Po těchto změnách bude portál fungovat konzistentně:
- Klik na "Copilot průvodce" v sidebaru → mezistránka s kontextem + tlačítko
- Klik na "Proměna výuky s AI" v sidebaru → mezistránka s kontextem + tlačítko
- Klik na "Galerie nástrojů" → není klikatelné, označeno "Připravujeme"
- Obě mezistránky mají stejnou strukturu, stejný CSS, stejné chování
