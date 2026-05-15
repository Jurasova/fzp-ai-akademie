# Content Template — Šablona obsahu stránky

Použijte tuto šablonu pro psaní obsahu nové stránky. Po vyplnění předejte implementátorovi spolu s vyplněným `docs/content-implementation-brief-template.md`.

---

## Identifikace

**Stránka:** [název]
**URL:** [cesta/soubor.html]
**Zdroj:** [odkaz na zpracovaný zdroj v sources/processed/]

---

## Záhlaví

**Label (sekce):** [AI v praxi / Jak pracovat s AI / Aplikace / Bezpečnost]
**H1:** [Název stránky jako akce — "Píšu grant nebo zprávu"]
**Perex:** [1 věta, max 150 znaků]

---

## Situation card

[2–4 věty. Kdo stránku potřebuje, v jaké situaci, co AI zvládne a kde jsou hranice. Žádné obecné úvodní věty o AI.]

---

## Co AI zvládne a co ne

### AI pomůže
- [konkrétní akce, ne obecná schopnost]
- [konkrétní akce]
- [konkrétní akce]
- [4–7 položek celkem]

### AI nenahradí
- [konkrétní limit nebo odpovědnost]
- [konkrétní limit]
- [4–6 položek celkem]

---

## [Volitelné] Orientační rámec nebo workflow

[Pokud stránka má více fází nebo úrovní — popište flow nebo tabulku úrovní. Například pro stránky s procesním workflow (grant) nebo úrovňovým rozlišením (administrativa).]

---

## Situace / kroky

### Situace 1: [Název jako akce]

**Meta:** [krátký podtitulek — výsledek akce]

[2–3 věty: co AI dělá, proč je to užitečné, co uživatel potřebuje zadat]

**Na co dát pozor:**
[1–2 věty o limitu nebo riziku — povinné pokud existuje]

**Prompt:** viz Prompt 1

---

### Situace 2: [Název]

**Meta:** [...]

[popis]

**Na co dát pozor:** [...]

**Prompt:** viz Prompt 2

---

[opakovat pro 3–7 situací]

---

## Prompty

### Prompt 1: [Název situace]

```
[Role AI (volitelné)]

[Kontext a instrukce]

[PARAMETR 1: vložte ...]
[PARAMETR 2: ...]

[Instrukce výstupu — co a jak vrátit]

[Guardrails — vždy na konci]
Nevymýšlej žádná data ani podmínky.
Pokud informace chybí, označ jako "k doplnění".
```

### Prompt 2: [Název]

```
[...]
```

---

## Kontrolní checklist před odesláním (volitelné)

[Pokud stránka pokrývá proces s checklistem (grant, ZoR, faktura) — vypište body. Implementováno jako `.info-card`.]

---

## Nástroje

| Nástroj | Použití | Poznámka |
|---------|---------|---------|
| [název] | [popis] | [bezpečnostní nebo jiná poznámka] |

---

## Bezpečnostní sekce

### Varování 1: [Název]

[Text varování — konkrétní, pojmenovat nástroje, pojmenovat datové kategorie]

### Varování 2: [Název, pokud je potřeba druhé]

[Text varování]

---

## Závěrečný CTA (volitelné)

[Co má uživatel zkusit jako první — 2–4 věty. Implementováno jako `.situation-card` nebo `.info-card`.]
