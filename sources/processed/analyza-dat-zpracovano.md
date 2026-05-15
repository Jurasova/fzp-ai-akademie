# Analyzuji data — Zpracovaný zdroj

**Zdroj:** `AI pro akademiky/academic_editor_prompts10.md`, `AI pro akademiky/Datum,Lokalita,pH,...csv`, znalost AI nástrojů pro datovou analýzu (2025–2026)
**Zpracováno:** 2026-05-11
**Určeno pro stránku:** `v-praxi/analyza-dat.html`
**Cílová skupina:** Pedagog a výzkumník (primární), Pokročilý uživatel (sekundární)

---

## Klíčová zjištění

- LLM (Claude, Copilot) dokáže popsat strukturu datasetu, identifikovat potenciální problémy a vygenerovat kód pro čištění — výzkumník k tomu nepotřebuje znalost R ani Pythonu.
- Julius.ai umožňuje nahrát CSV nebo Excel a ptát se přirozeným jazykem: výsledkem jsou grafy, statistiky a interpretace bez jediného řádku kódu.
- Microsoft 365 Copilot v Excelu je přístupný akademickým pracovníkům ČZU s licencí a umožňuje tvorbu kontingenčních tabulek, komplexních vzorců a grafů s AI asistencí — data zůstávají v prostředí ČZU.
- Claude nebo ChatGPT generují přesný statistický kód (R, Python) pro konkrétní test na základě popisu dat a hypotézy — výzkumník kód spustí v RStudiu nebo Google Colab.
- SciSpace (scispace.com) funkce "Explain Math and Table" vysvětlí jakýkoliv statistický vzorec nebo tabulku kliknutím přímo v PDF článku — praktické pro porozumění metodám, které chcete replikovat nebo citovat.

---

## Praktické situace

### "Čistím dataset před analýzou"
- Co AI zvládne: popsat strukturu, identifikovat chybějící hodnoty, duplicity, odlehlé hodnoty a nekonzistentní formáty; vygenerovat kód pro automatické čištění
- Co AI nenahradí: rozhodnutí, jak s problematickými hodnotami naložit (vymazat, imputovat, označit)
- Potenciální prompt: "Mám dataset s těmito sloupci. Identifikuj problémy a navrhni postup čištění."
- Na co dát pozor: nepublikovaná výzkumná data nevkládat do Claude.ai nebo jiných veřejných nástrojů

### "Prozkoumávám data poprvé" (EDA)
- Co AI zvládne: rychlý přehled distribucí, korelací, odlehlých hodnot; grafy bez kódu
- Co AI nenahradí: výběr proměnných relevantních pro výzkumnou otázku; posouzení reprezentativnosti dat
- Potenciální prompt: přirozený jazyk v Julius.ai po nahrání souboru
- Na co dát pozor: Julius.ai je placená služba; ověřit podmínky ochrany dat před nahráním

### "Analyzuji data v Excelu s Copilotem"
- Co AI zvládne: kontingenční tabulky, vzorce AVERAGEIFS/COUNTIFS, grafy, vysvětlení výsledků
- Co AI nenahradí: interpretaci výsledků v kontextu výzkumu; výběr vhodné vizualizace pro publikaci
- Potenciální prompt: "Mám tabulku se sloupci X, Y, Z. Vytvoř kontingenční tabulku zobrazující..."
- Na co dát pozor: vyžaduje licenci Microsoft 365 Copilot přes účet ČZU

### "Potřebuji kód pro statistický test"
- Co AI zvládne: kód pro t-test, ANOVA, lineární regresi, Mann-Whitney a další; kód pro ověření předpokladů testu; základní vizualizace výsledků
- Co AI nenahradí: výběr správného testu; ověření, zda data splňují předpoklady; interpretaci v kontextu oboru
- Potenciální prompt: "Mám dataset. Chci testovat hypotézu X. Typ proměnných: numerické/kategorické. Jazyk: R."
- Na co dát pozor: vygenerovaný kód vždy otestovat na vzorku před použitím na celém datasetu

### "Ověřuji si metody a vzorce z citovaných článků"
- Co AI zvládne: vysvětlit vzorec nebo tabulku kliknutím (SciSpace); nebo vysvětlit opisem v Claudovi
- Co AI nenahradí: posouzení vhodnosti metody pro váš výzkumný kontext
- Potenciální prompt: "Vysvětli mi tento statistický vzorec z článku: [vzorec]. Kontext: [článek]."
- Na co dát pozor: SciSpace pracuje s veřejně publikovanými PDF; nepublikované rukopisy nenahrávat

---

## Ověřená fakta a čísla

- Julius.ai: nabízí zkušební verzi zdarma, poté placené plány (odhad z praxe, ceny se mění)
- Microsoft 365 Copilot v Excelu: dostupnost závisí na licenci ČZU — ověřit přes IT oddělení nebo přes účet @czu.cz
- SciSpace: základní funkce "Explain" zdarma pro veřejná PDF; pokročilé funkce v placené verzi
- Claude.ai: bezplatný přístup s denním limitem; Claude Pro (placený) pro intenzivní použití

---

## Co NEPOUŽÍVAT na portálu

- Konkrétní hodnoty z CSV vzorku (pH, NO3, lokality) — příliš specifické pro hydrologii, ne přenositelné
- ChatGPT Advanced Data Analysis (ADA) — uživatel explicitně vyloučil
- JASP — uživatel explicitně vyloučil
- Datawrapper — uživatel explicitně vyloučil
- Slova "revolucionizuje", "zásadně mění" v kontextu AI a vědecké práce
- Jakékoliv statistiky bez zdroje (podíl úspory času, počet vědců apod.)
