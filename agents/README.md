# Agents — Přehled a workflow

Tato složka obsahuje 8 pracovních agentů pro tvorbu obsahu portálu FŽP AI Akademie. Agenti tvoří jeden workflow — výstup každého agenta je vstupem pro dalšího.

---

## Workflow řetězec

```
[NOVÝ ZDROJ]
      ↓
1. research-synthesizer      Vyčistí a strukturuje zdrojový materiál
      ↓
2. use-case-architect         Vybere a prioritizuje praktické scénáře
      ↓
3. content-editor             Napíše obsah stránky (bez HTML)
      ↓
4. prompt-architect           Vytvoří hotové prompty s guardrails
      ↓
5. quality-reviewer           Zkontroluje 10 kritérií kvality
      ↓
6. safety-reviewer            Zkontroluje bezpečnostní mantinely
      ↓
7. ux-reviewer                Zkontroluje použitelnost
      ↓
[IMPLEMENTACE V CURSORU]
      ↓
8. compound-improvement-agent Aktualizuje systém pro příští stránku
      ↓
[PŘÍŠTÍ STRÁNKA — rychleji]
```

---

## Přehled agentů

| # | Agent | Vstup | Výstup | Povinný? |
|---|-------|-------|--------|---------|
| 1 | `research-synthesizer` | Surový zdroj | Zpracovaný markdown | Jen pro nové zdroje |
| 2 | `use-case-architect` | Zpracovaný markdown | Prioritizované use cases | Jen pro nové stránky |
| 3 | `content-editor` | Use cases + brief | Obsah stránky (text) | Vždy |
| 4 | `prompt-architect` | Draft obsahu | Prompty s guardrails | Vždy |
| 5 | `quality-reviewer` | Draft + prompty | Quality report | Vždy |
| 6 | `safety-reviewer` | Draft + prompty | Safety report | Vždy |
| 7 | `ux-reviewer` | Draft po review | UX report | Doporučený |
| 8 | `compound-improvement-agent` | Hotová stránka + reporty | Aktualizovaný systém | Vždy |

---

## Jak agenty používat v Cursoru

1. Otevřete soubor agenta (`agents/[nazev].md`).
2. Zkopírujte ukázkový prompt ze sekce 8 "Ukázkový prompt."
3. Doplňte vstupy do závorek.
4. Vložte do chatu Cursoru nebo do Claude/ChatGPT.

Agenti jsou navrženi tak, aby fungovali jako Cursor instrukce — lze je přímo vložit do nové relace s kontextem projektu.

---

## Zkrácený workflow (pro aktualizace existujících stránek)

Pokud existující stránka potřebuje revizi (ne novou stránku):

```
3. content-editor (revize obsahu)
→ 4. prompt-architect (upgrade promptů)
→ 5. quality-reviewer
→ 6. safety-reviewer
→ implementace
→ 8. compound-improvement-agent
```

---

## Referenční soubory pro agenty

Každý agent odkazuje na tyto soubory — mějte je přečteny před spuštěním agenta:

- `context/quality-standard.md` — 10 kritérií kvality
- `context/tone-of-voice.md` — pravidla jazyka a stylu
- `context/safety-rules.md` — bezpečnostní mantinely
- `context/audience.md` — 5 person s potřebami
- `content/_prompt-template.md` — šablona promptů s guardrails
- `README.md` (kořen) — stav stránek a HTML komponenty
