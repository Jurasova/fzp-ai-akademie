# Content Workflow — FŽP AI Akademie

Opakovatelný 9-krokový proces od sběru zdrojů po aktualizaci pravidel.

---

## Přehled workflow

```
Research → Clean → Use cases → Content → Prompts → Expert review → Implementation → QA → Compound update
```

---

## Krok 1: Research

**Cíl:** Shromáždit relevantní zdroje pro danou téma nebo stránku.

**Aktivity:**
- Deep Research v ChatGPT nebo Perplexity pro kontext a aktuální informace
- Vyhledání relevantních zdrojů v FAIL 2026 materiálech přes MCP server `user-fail-program`
- Identifikace vlastních zkušeností a příkladů z FŽP prostředí
- Kontrola, co již na portálu existuje (aby se nepřekrýval obsah)

**Artefakty:** Složka `sources/raw/` — surové markdowny a poznámky

**Nástroje:** ChatGPT Deep Research, Perplexity, NotebookLM, MCP `search_content`

---

## Krok 2: Clean

**Cíl:** Vyčistit a strukturovat zdroje do použitelného markdownu.

**Aktivity:**
- Odstranit duplicity a irelevantní části
- Ověřit všechna fakta a čísla (nebo je označit jako neověřená)
- Přizpůsobit terminologii akademickému prostředí FŽP
- Strukturovat do sekcí odpovídajících budoucím HTML blokům

**Artefakty:** Složka `sources/processed/` — vyčištěné markdowny

**Pravidlo:** Pokud není možné ověřit číslo nebo statistiku, vypustit ji nebo označit jako "odhad z praxe."

---

## Krok 3: Use cases

**Cíl:** Navrhnout konkrétní praktické scénáře pro cílové skupiny.

**Aktivity:**
- Identifikovat 3–7 nejpraktičtějších situací pro danou stránku
- Prioritizovat podle frekvence výskytu a možné úspory času
- Ověřit relevanci pro cílovou skupinu (viz `context/audience.md`)
- Pojmenovat situace jako akce: "Připravuji ZoR z podkladů", ne "Projektový reporting"

**Artefakt:** Šablona v `content/_use-case-template.md`

---

## Krok 4: Content

**Cíl:** Vytvořit text a strukturu pro HTML stránku.

**Aktivity:**
- Vyplnit `content/_content-template.md` pro danou stránku
- Napsat perex, situation card, two-col, krokové bloky
- Dodržet pravidla z `context/tone-of-voice.md` a `context/quality-standard.md`
- Nepoužívat text ze zdrojů doslova — vždy přepsat vlastními slovy

**Artefakt:** Vyplněný `_content-template.md` pro danou stránku

---

## Krok 5: Prompts

**Cíl:** Vytvořit hotové prompty k okamžitému použití.

**Aktivity:**
- Pro každou situaci napsat jeden použitelný prompt
- Dodržet strukturu z `content/_prompt-template.md`
- Každý prompt musí mít guardrails (nevymýšlej, k doplnění, neodhaduj)
- Parametry označit hranatými závorkami: `[VLOŽTE TEXT]`
- Otestovat prompt na reálném vstupu

**Artefakt:** Prompty integrované do HTML stránky jako `.prompt-block`

---

## Krok 6: Expert review

**Cíl:** Zkontrolovat kvalitu přes různé perspektivy.

**Aktivity:** Spustit agenty ze složky `agents/`:
1. `quality-reviewer.md` — 10 kritérií kvality
2. `safety-reviewer.md` — bezpečnostní pravidla a guardrails
3. `content-editor.md` — styl, tón, konzistence
4. (volitelně) `ux-reviewer.md` — použitelnost a struktura

**Artefakt:** Seznam komentářů a doporučených úprav

---

## Krok 7: Implementation

**Cíl:** Převést schválený obsah do HTML stránky v portálu.

**Aktivity:**
- Přečíst aktuální stav cílového HTML souboru
- Namapovat obsah na HTML komponenty (viz `README.md`)
- Implementovat stránku přesně podle `content/_content-template.md`
- Zkontrolovat lint

**Soubory:** příslušný `.html` v `v-praxi/`, `navody/`, `aplikace/`, atd.

---

## Krok 8: QA

**Cíl:** Ověřit, že stránka vypadá správně a obsah je použitelný.

**Checklist:**
- [ ] Stránka se zobrazuje v portálu bez chyb
- [ ] Sidebar obsahuje správné označení aktivní stránky (`data-nav`)
- [ ] Breadcrumb odpovídá sekci stránky
- [ ] Všechna tlačítka "Kopírovat" fungují
- [ ] Žádný lorem ipsum nebo placeholder text
- [ ] `README.md` aktualizován (stav stránky → hotovo)

---

## Krok 9: Compound update

**Cíl:** Poučit se z každého výstupu a zlepšit systém.

**Aktivity po každé stránce:**
- Aktualizovat `README.md` (stav stránek)
- Aktualizovat `context/` soubory pokud se ukázalo, že pravidlo chybí nebo nefunguje
- Přidat nové použitelné HTML komponenty do tabulky komponent v `README.md`
- Přidat nové zdroje do `sources/processed/README.md`
- Aktualizovat šablony v `content/` pokud byl nalezen lepší formát

**Princip:** Každá nová stránka by měla být o kousek lehčí na přípravu než předchozí.

---

## Rychlý přehled artefaktů

| Krok | Artefakt | Umístění |
|------|---------|---------|
| Research | Surové poznámky | `sources/raw/` |
| Clean | Vyčištěný markdown | `sources/processed/` |
| Use cases | Use case brief | `content/_use-case-template.md` (vyplněný) |
| Content | Content brief | `content/_content-template.md` (vyplněný) |
| Prompts | Prompt šablony | `content/_prompt-template.md` (vyplněný) |
| Implementation | HTML stránka | `v-praxi/`, `navody/`, atd. |
| Compound | Aktualizace systému | `context/`, `docs/`, `README.md` |
