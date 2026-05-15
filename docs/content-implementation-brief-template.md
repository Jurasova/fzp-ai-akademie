# Content Implementation Brief — Šablona

Vyplňte tento soubor před implementací každé nové stránky portálu. Slouží jako zadání pro implementaci (krok 7 workflow).

---

## Identifikace stránky

**Název stránky:** [např. Příprava výuky]
**URL:** [např. v-praxi/priprava-vyuky.html]
**Sekce portálu:** [AI v praxi / Jak pracovat s AI / Aplikace / Bezpečnost / Prompty]
**Stav:** [ ] Rozpracováno / [ ] Připraveno k implementaci / [ ] Hotovo
**Datum:** [YYYY-MM-DD]

---

## Cílová skupina

Primárně: [název persony z context/audience.md]
Sekundárně: [název persony, nebo "—"]

**Klíčová potřeba:** [1 věta — co uživatel na stránce hledá]

---

## Obsah stránky

### Perex (1 věta, max 150 znaků)
[Napište perex]

### Situation card (2–4 věty)
[Popište situaci — pro koho, co řeší, jaké jsou hranice AI]

### Co AI zvládne (levý sloupec — 5–7 odrážek)
- ...
- ...

### Co AI nenahradí (pravý sloupec — 4–6 odrážek)
- ...
- ...

### Orientační rámec nebo tabulka úrovní (volitelné)
[Popište nebo nechte prázdné]

---

## Situace / kroky

Pro každou situaci vyplnit:

### Situace 1: [Název]
**Meta popis (pro step-meta):** [krátký podtitulek]
**Popis:** [2–3 věty — co AI dělá, proč je to užitečné]
**Na co dát pozor:** [1–2 věty]
**Prompt:** [viz část Prompty níže — číslo]
**Komponenta:** `<details class="step">`

### Situace 2: [Název]
[opakovat strukturu]

---

## Prompty

### Prompt 1: [Název situace]
```
[Plný text promptu — včetně parametrů v [hranatých závorkách] a guardrailů]
```

### Prompt 2: [Název situace]
```
[Plný text promptu]
```

---

## Bezpečnostní sekce

**Typ varování:** [ ] 1 warning-card / [ ] 2 warning-cards / [ ] info-card
**Obsah varování:**
[Popište co varování říká — nebo odkažte na template ze safety-rules.md]

---

## Nástroje (tools-grid)

| Nástroj | Použití na této stránce | Poznámka |
|---------|------------------------|---------|
| [název] | [popis] | [poznámka nebo "—"] |

---

## Závěrečný CTA (volitelné)

[Navrhněte text závěrečného bloku — co má uživatel zkusit jako první]

---

## HTML komponenty (mapa obsahu)

| Blok obsahu | Komponenta | Poznámka |
|-------------|-----------|---------|
| Záhlaví | `.page-header` + `.label` + `.perex` | |
| Situace | `.situation-card` | |
| Co AI / nenahradí | `.two-col` + `.col-card` | |
| Kroky | `<details class="step">` | počet: [N] |
| Prompty | `.prompt-block` | počet: [N] |
| Nástroje | `.tools-grid` | počet karet: [N] |
| Varování | `.warning-card` | počet: [N] |
| Závěr | `.situation-card` nebo `.info-card` | |

---

## Zdrojové materiály

| Soubor | Použitá sekce |
|--------|--------------|
| [cesta/soubor.md] | [sekce nebo "vše"] |

---

## Poznámky k implementaci

[Cokoliv, co implementátor potřebuje vědět — specifické požadavky, otevřené otázky, reference na podobné stránky]

---

## Review checklist (po implementaci)

- [ ] Prošel quality-reviewer (context/quality-standard.md — 10 kritérií)
- [ ] Prošel safety-reviewer (context/safety-rules.md)
- [ ] Lint bez chyb
- [ ] README.md aktualizován
- [ ] Stránka otestována v portálu
