# Idea File — Prompt Banka AI pro pedagogy

> Verze: 1.0 | Autor: Vladimíra Jurasová | FŽP ČZU 2026

---

## What is this

Prompt Banka je sbírka 20 hotových, okamžitě použitelných promptů pro pedagogy na vysoké škole. Každý prompt řeší konkrétní situaci z výuky — od přípravy kurzu přes diagnostiku studentů až po tvorbu rubrik a zpětnou vazbu. Cíl není naučit pedagogy pracovat s AI — cíl je odstranit nejnáročnější krok: vymyslet, co AI vlastně říct.

Banka existuje jako webová aplikace. Pedagog přijde, najde situaci podobnou té své, zkopíruje prompt a vloží ho do Copilotu nebo ChatGPT. Výsledek upraví na 20 %, ne 80 %.

---

## Problem it solves

Pedagogové vědí, že AI může pomoci. Ale stojí před prázdným oknem a nevědí, jak začít. Výsledek: buď AI nepoužijí vůbec, nebo napíší vágní dotaz a dostanou vágní odpověď.

Prompt Banka tento problém přeskočí. Místo „nevím, co napsat" pedagog vybere hotový prompt, doplní svůj kontext (sylabus, zadání, data od studentů) a AI odvede 80 % práce.

---

## For whom

Primárně pedagogové na VŠ — přednášející, cvičící, garanti předmětů — kteří:
- Mají přístup k Copilotu (Microsoft 365) nebo ChatGPT
- Nemají čas experimentovat s promptingem
- Chtějí konkrétní výstup, ne obecné rady

---

## What's new

Jiné zdroje promptů existují, ale jsou generické. Tato banka je:
- **Zakotvena v pedagogické praxi** — každý prompt řeší reálnou situaci z výuky, ne abstraktní úkol
- **Připravena na AI éru** — prompty počítají s tím, že studenti AI mají. Část z nich je navržena přímo pro testování odolnosti úkolů vůči AI nebo pro vytváření zadání, kde AI nestačí
- **Lokálně specifická** — vznikla na FŽP ČZU pro české prostředí, česky, s ohledem na reálie veřejné VŠ

---

## Structure — 4 areas, 20 prompts

### 📝 Příprava (6 promptů)
Pomáhá před výukou: audit kurzu, test odolnosti zadání vůči AI, redesign zadání, vstupní diagnostika, odhalení znalostí bez porozumění, bridge plán pro výuku mimo obor.

### 👩‍🏫 Výuka (6 promptů)
Pomáhá během semestru: sokratovský tutor pro studenty, diskusní oponent, variace zadání proti opisování, adaptivní procvičování, kolaborativní partner student+AI, inkluzivní úpravy materiálů.

### ✅ Hodnocení (6 promptů)
Pomáhá po odevzdání: evidence-of-learning balíček, diagnostika celé skupiny po testu, kalibrace hodnocení, tvorba rubrik, zpětná vazba, shluková analýza odpovědí.

### 📋 Pravidla (2 prompty + příklad)
Pomáhá nastavit mantinely: prompt pro tvorbu pravidel použití AI v kurzu + hotový příklad pravidel připravený k úpravě.

---

## How each prompt works

Každý prompt má jednotnou strukturu:
1. **Role AI** — čím má být (tutor, oponent, garant předmětu, hodnotitel...)
2. **Úkol** — co konkrétně vytvořit, v jakém formátu, s jakými parametry
3. **Ochrana kvality** — každý prompt obsahuje instrukci: „Vycházej primárně z vložených podkladů. Co v podkladech není, jasně označ jako předpoklad nebo obecné doporučení a nevymýšlej konkrétní fakta, citace ani zdroje."
4. **Placeholder** — místo, kam pedagog vloží svůj kontext: `[VLOŽTE SYLABUS]`, `[VLOŽTE ZADÁNÍ]`, `[VLOŽTE DATA]`

---

## How to use this

Jsi AI asistent. Uživatel ti dal tento dokument jako záměr projektu. Tvým úkolem je:

**Chat assistant** (Copilot, ChatGPT, Gemini):
Pomoz uživateli pochopit, jak Prompt Banku použít pro jeho konkrétní situaci. Zeptej se, jaký úkol právě řeší (příprava kurzu, hodnocení, výuka?) a doporuč, který typ promptu je pro něj nejvhodnější. Navrhni, co doplnit do placeholderů.

**Cowork tool** (Claude Cowork, Microsoft Cowork):
Rozbij projekt na konkrétní kroky: identifikuj, které sekce banky jsou pro uživatele nejrelevantnější, pomoz naplánovat, jak banku představit kolegům, a navrhni strukturu onboardingového materiálu nebo setkání.

**Code agent** (Cursor, Claude Code):
Postav webovou aplikaci podle tohoto záměru. Klíčové požadavky: přehledná navigace přes 4 sekce, každý prompt zobrazený s tlačítkem „Zkopírovat", mobilně přívětivý design, žádné přihlašování. Obsah promptů je v tomto dokumentu — implementuj je jako data, ne natvrdo v HTML.

---

## What this is NOT

- Není to kurz promptingu — pedagog nemusí rozumět tomu, jak prompty fungují
- Není to chatbot — banka odpovědi negeneruje, pouze je připravuje
- Není to náhrada za úsudek pedagoga — výstupy AI je vždy potřeba zkontrolovat a upravit

---

## First step for a new user

1. Otevři banku: [promptbanka.html](https://jurasova.github.io/promptbanka-ai/promptbanka.html)
2. Vyber sekci podle toho, kde teď v semestru jsi (příprava / výuka / hodnocení)
3. Najdi prompt, který se podobá tvé situaci
4. Zkopíruj ho do Copilotu nebo ChatGPT
5. Doplň placeholder (sylabus, zadání, odpovědi studentů...)
6. Výsledek uprav na 20 % — ne od nuly

---

*Vladimíra Jurasová | FŽP ČZU | mullerovav@fzp.czu.cz*
