# Dělám rešerši

> **Situace:** Potřebujete zmapovat literaturu k tématu — pro článek, grant, přednášku nebo diplomku. Máte před sebou stovky potenciálně relevantních článků a nevíte, kde začít ani jak z toho udělat použitelný přehled.

---

## Co AI zvládne a co ne

| AI pomůže | AI nenahradí |
|-----------|-------------|
| Prohledat 138M+ článků za minuty | Váš odborný úsudek o relevanci |
| Sestavit evidenční tabulku přes desítky studií | Interpretaci výsledků ve vašem kontextu |
| Vizualizovat propojení mezi klíčovými články | Rozhodnutí o inclusion/exclusion kritériích |
| Zodpovědět konkrétní výzkumné otázky s citacemi | Syntézu a originální závěry |
| Odhalit, zda byl citát zpochybněn dalším výzkumem | Odpovědnost za správnost tvrzení |

---

## Workflow: Od otázky po strukturovaný přehled

```
1. MAPA POLE   → ResearchRabbit          → vizuální síť klíčových článků
2. HLOUBKA     → Elicit                  → evidenční tabulka, extrakce dat
3. KONSENZUS   → Consensus               → vědecká shoda na vaší otázce
4. SYNTÉZA     → NotebookLM / Claude     → shrnutí přes vaše vlastní PDF
5. OVĚŘENÍ     → Scite                   → jak jsou klíčové citace hodnoceny
6. EXPORT      → Zotero                  → hotový seznam referencí
```

---

### Krok 1 — Zmapujte pole (ResearchRabbit)

**Kdy:** Na úplném začátku, ještě před tím, než víte, jaké klíčové články existují.

**Postup:**
1. Otevřete ResearchRabbit (researchrabbitapp.com) — je zdarma.
2. Zadejte název jednoho článku, který znáte a je relevantní pro vaše téma.
3. ResearchRabbit zobrazí vizuální mapu: které články ho citují, které cituje on, a které jsou
   tematicky příbuzné.
4. Přidávejte zajímavé články do kolekce — mapa se rozšiřuje.
5. Exportujte kolekci do Zotero pro správu referencí.

**Výstup:** 20–50 relevantních článků seřazených podle citační sítě, ne podle klíčových slov.

**Pozor:**
- ResearchRabbit nezná vaše téma, zná jen citační strukturu. Začněte od kvalitního seed článku —
  pokud začnete od okrajové studie, mapa bude zavádějící.

---

### Krok 2 — Proveďte strukturovanou rešerši (Elicit)

**Kdy:** Když víte, jakou výzkumnou otázku řešíte a potřebujete systematický přehled.

**Postup:**
1. Otevřete Elicit (elicit.com) a zadejte výzkumnou otázku přirozeným jazykem — celou větu,
   ne klíčová slova.
2. Elicit vrátí relevantní studie s automaticky extrahovanými informacemi (metoda, vzorek, výsledky).
3. Přizpůsobte sloupce tabulky — přidejte ty, které potřebujete: rok, design studie, velikost vzorku,
   hlavní proměnné, závěry.
4. Pro rozsáhlejší rešerši (20+ článků) použijte funkci Systematic Review — nastavte
   inclusion/exclusion kritéria a Elicit je aplikuje automaticky.

Příklad dobré výzkumné otázky pro Elicit:

```
What are the effects of microplastic contamination on soil microbial diversity
in agricultural soils in temperate climate zones?
```

Příklad špatné otázky pro Elicit (příliš obecná):

```
microplastics soil
```

**Výstup:** Strukturovaná tabulka 30–100 studií s klíčovými daty, připravená k exportu do CSV.

**Pozor:**
- Elicit pracuje primárně s anglickými zdroji a databází Semantic Scholar. Pokud vaše téma
  má důležitou českou nebo středoevropskou literaturu, doplňte manuálně přes Web of Science
  nebo Scopus.
- Elicit může chybět novější práce (posledních 6 měsíců). Pro aktuální literaturu doplňte
  Google Scholar s filtrem "od roku 2024".

---

### Krok 3 — Ověřte vědecký konsenzus (Consensus)

**Kdy:** Když potřebujete rychle zjistit, jestli věda na vaši otázku odpovídá jednoznačně,
nebo je téma sporné.

**Postup:**
1. Otevřete Consensus (consensus.app).
2. Zadejte výzkumnou otázku ve formátu, na který lze odpovědět ano/ne nebo tendencí.
3. Consensus ukáže "Consensus Meter" — vizuální indikátor míry shody studií.
4. Klikněte na jednotlivé studie pro detail — každá má přímou citaci z textu.

Příklady vhodných otázek pro Consensus:

```
Does forest fragmentation reduce bird species richness?
Is nitrogen fertilization associated with decreased soil microbial diversity?
Do green roofs reduce urban heat island effect?
```

**Výstup:** Rychlá odpověď s citacemi do 2 minut. Ideální jako první orientace nebo
ověření tvrzení před psaním.

**Pozor:**
- Consensus zjednodušuje — komplexní debaty redukuje na binární odpověď. Pro nuancovaná
  témata použijte Elicit místo nebo vedle Consensus.
- Consensus je nejsilnější v biomedicíně a přírodních vědách. Pro společenské vědy nebo
  humanitní obory může být pokrytí slabší.

---

### Krok 4 — Syntetizujte přes vlastní PDF (NotebookLM)

**Kdy:** Když máte stažená klíčová PDF a potřebujete z nich vytáhnout syntézu bez rizika
hallucinations.

**Postup:**
1. Otevřete NotebookLM (notebooklm.google.com) — je zdarma s Google účtem.
2. Nahrajte 10–50 klíčových PDF ze svého výzkumu.
3. NotebookLM odpovídá **výhradně z vašich dokumentů** — nevymýšlí nic navíc.
4. Ptejte se konkrétně:

```
Které z nahraných studií zkoumaly vliv pH půdy na mikrobiální diverzitu?
Jaké metody měření byly použity napříč nahranými studiemi?
Kde si jednotlivé studie protiřečí v závěrech?
```

**Výstup:** Syntéza s přesnými citacemi z vašich vlastních dokumentů — žádné vymyšlené reference.

**Proč NotebookLM místo Claude nebo ChatGPT pro tuto fázi:**
Claude a ChatGPT mají znalosti z tréninku, ale nemají přístup k vašim konkrétním PDF.
NotebookLM pracuje výhradně s tím, co nahrajete — výsledky jsou proto přesnější a
ověřitelné.

---

### Krok 5 — Zkontrolujte klíčové citace (Scite)

**Kdy:** Než citaci použijete v článku nebo grantu, zejména pokud jde o klíčové tvrzení.

**Postup:**
1. Otevřete Scite (scite.ai) a vyhledejte DOI nebo název článku.
2. Scite ukáže: kolikrát byl článek citován, a jak — podporujícími, zpochybňujícími,
   nebo neutrálními citacemi.
3. Červená vlajka = článek byl opakovaně zpochybněn. Citovat ho bez výhrady by byl problém.

**Proč to dělat:** Retracted nebo zpochybněné články vypadají v databázích normálně.
Scite odhalí, co Google Scholar skryje.

---

### Krok 6 — Exportujte do Zotero

**Kdy:** Průběžně, od prvního kroku.

- Z ResearchRabbit: přímý export kolekce do Zotero
- Z Elicit: export do CSV → import do Zotero přes identifikátory DOI
- Z Google Scholar: rozšíření Zotero Connector zachytí článek jedním klikem

Zotero pak automaticky formátuje citace v jakémkoli citačním stylu (APA, Vancouver, ISO 690...).

---

## Workflow na jedné stránce

```
1. MAPA      → ResearchRabbit            → citační síť kolem seed článku
2. REŠERŠE   → Elicit                    → evidenční tabulka 30–100 studií
3. KONSENZUS → Consensus                 → míra vědecké shody na vaší otázce
4. SYNTÉZA   → NotebookLM               → odpovědi z vašich vlastních PDF
5. OVĚŘENÍ   → Scite                     → jak jsou klíčové citace hodnoceny
6. EXPORT    → Zotero                    → citace v požadovaném stylu
```

---

## Časté chyby a jak se jim vyhnout

**„Zadal jsem téma do ChatGPT a dostal jsem seznam článků."**
Problém: ChatGPT (a Claude, Copilot) nemají přístup k vědeckým databázím — vymýšlejí citace,
které vypadají věrohodně, ale neexistují. Autoři, rok, časopis — vše může být fiktivní.
Řešení: Vědecké citace hledejte výhradně přes Elicit, Consensus, Scopus, Web of Science
nebo Google Scholar. Chatboty pro tuto fázi nepoužívejte.

**„Použil jsem klíčová slova v Elicit a dostal málo výsledků."**
Problém: Elicit používá sémantické vyhledávání — reaguje lépe na přirozený jazyk než
na klíčová slova.
Řešení: Napište celou výzkumnou otázku větou. "What is the relationship between riparian
buffer width and nitrogen removal efficiency in agricultural watersheds?" vrátí lepší
výsledky než "riparian buffer nitrogen".

**„Výsledky z Elicit jsou v angličtině, já potřebuji českou literaturu."**
Problém: Elicit pokrývá primárně anglicky psanou vědu.
Řešení: Pro českou literaturu použijte Scopus nebo Web of Science s jazykovým filtrem,
nebo přímo databázi VAVAI (vavai.cz) pro české výzkumné výstupy.

**„Použil jsem jeden nástroj na celou rešerši."**
Problém: Každý nástroj pokrývá jiný aspekt rešerše. Jeden nástroj nestačí.
Řešení: Kombinujte — ResearchRabbit pro objevování, Elicit pro systematiku, Consensus
pro orientaci, Scite pro ověření.

---

## Pokročilý workflow: Systematická rešerše pro metaanalýzu

Pro systematické review nebo metaanalýzu (kde je metodika rešerše součástí článku):

1. Definujte PICO/PECO framework před začátkem — co přesně hledáte
2. V Elicit nastavte Systematic Review s inclusion/exclusion kritérii
3. Exportujte do CSV → importujte do Rayyan (rayyan.ai) pro dvojité slepé screening
4. Extrahujte data z vybraných studií — Elicit zvládne extrakci do strukturované tabulky
   s přesností 99 % (ověřeno na 1 502 datových bodech)
5. Dokumentujte celý proces (PRISMA flow diagram) — recenzenti to budou požadovat

---

## Jaké nástroje použít — rychlý přehled

| Fáze | Nástroj | K čemu přesně |
|------|---------|---------------|
| Mapa oboru | ResearchRabbit | Vizualizace citačních sítí, discovery |
| Systematická rešerše | Elicit | Evidenční tabulky, extrakce dat, 138M+ článků |
| Vědecký konsenzus | Consensus | Rychlé odpovědi s citacemi, Consensus Meter |
| Syntéza PDF | NotebookLM | Odpovědi výhradně z vašich dokumentů |
| Ověření citací | Scite | Smart Citations — podporující vs. zpochybňující |
| Správa referencí | Zotero | Export, formátování citací, integrace s Wordem |
| Česká literatura | Web of Science / Scopus | Pokrytí mimo anglosaský mainstream |
| Aktuální novinky | Google Scholar + Semantic Scholar | Nejnovější publikace, alert na nové práce |

---

*Poslední aktualizace: duben 2026 · FŽP AI Akademie*
*Máte otázku nebo tip? Napište do Teams kanálu AI na FŽP.*

<!-- CURSOR: Tuto stránku vlož do HTML šablony _template-v-praxi.html.
Každý "### Krok N" → jeden <details class="step">.
Každý prompt blok → <div class="prompt-block"> s copy tlačítkem.
Každé "Pozor:" → <div class="warning-card">.
Sekce "Workflow na jedné stránce" → <div class="flow-strip"> nebo <pre> blok.
Tabulka nástrojů → <div class="tools-grid">. -->
