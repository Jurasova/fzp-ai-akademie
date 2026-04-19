# Píšu vědecký článek

> **Situace:** Máte výzkumná data, potřebujete z nich udělat publikovatelný článek. Rešerše zabírá dny, psaní v angličtině je pomalé a revision od kolegů trvá týdny. AI vám pomůže zkrátit cestu od dat k hotovému rukopisu — ale musíte vědět, kde pomáhá a kde škodí.

---

## Co AI zvládne a co ne

| AI pomůže | AI nenahradí |
|-----------|-------------|
| Najít relevantní články a shrnout je | Váš originální výzkumný přínos |
| Navrhnout strukturu a osnovu | Interpretaci vašich konkrétních výsledků |
| Opravit a vylepšit angličtinu | Odpovědnost za správnost tvrzení |
| Extrahovat data z desítek PDF | Kritické myšlení a propojení zjištění |
| Naformátovat citace a reference | Etický úsudek a rozhodnutí o autorství |

**Zlaté pravidlo:** AI je výborný asistent pro rešerši a jazyk, ale interpretace a originální myšlení jsou vaše práce. Každý výstup AI musíte ověřit a přepracovat do vlastních slov.

---

## Workflow: Od rešerše po submission

### Krok 1 — Zmapujte literaturu (Elicit + Consensus)

**Kdy:** Na začátku práce, než začnete psát Introduction.

**Postup:**
1. Otevřete **Elicit** (elicit.com) a zadejte výzkumnou otázku přirozeným jazykem — ne klíčová slova, ale celou otázku. Například: *"What is the impact of microplastics on soil microbial communities in agricultural ecosystems?"*
2. Elicit prohledá 138+ milionů článků a vrátí relevantní výsledky s automaticky extrahovanými informacemi — metody, vzorek, hlavní zjištění.
3. Vyfiltrujte relevantní články a nechte Elicit vygenerovat **evidenční tabulku** — přehled, kdo co zkoumal, jakou metodou a s jakým výsledkem.
4. Pro ověření konsenzu v oboru použijte **Consensus** (consensus.app) — položte stejnou otázku a podívejte se, jestli většina studií ukazuje stejným směrem.

**Výstup:** Strukturovaný přehled 20–50 nejrelevantnějších článků s klíčovými daty, připravený pro psaní Introduction a Discussion.

**Na co dát pozor:**
- Elicit i Consensus pracují primárně s anglickými zdroji. České a slovenské publikace tam nenajdete — doplňte ručně přes Web of Science nebo Scopus.
- Vždy si otevřete alespoň 5–10 klíčových článků v plném znění. Shrnutí od AI nenahrazuje skutečné čtení.
- Zkontrolujte, zda AI nezaměnila dva články se stejným prvním autorem — občas se to stává.

---

### Krok 2 — Vytvořte osnovu článku

**Kdy:** Když máte přehled o literatuře a víte, co chcete sdělit.

Otevřete Claude, ChatGPT nebo Copilot a zadejte:

```
Jsem výzkumník v oblasti [vaše oblast]. Píšu článek do časopisu [název nebo typ časopisu].

Moje hlavní zjištění:
- [zjištění 1]
- [zjištění 2]
- [zjištění 3]

Navrhni strukturu článku ve formátu IMRaD. Pro každou sekci napiš:
- Hlavní bod, který má sekce sdělit
- 2–3 klíčové argumenty nebo podkapitoly
- Přibližný rozsah (počet slov)

Nepiš samotný text, jen strukturu.
```

**Proč jen osnovu:** Nechat AI napsat celý článek je kontraproduktivní — výsledek bude generický, bez vašeho hlasu a bez originálního přínosu. Osnova vám ale ušetří hodiny přemýšlení nad strukturou.

---

### Krok 3 — Napište první draft sami

Tohle je krok, kde AI **nepoužívejte** na generování textu. Napište první verzi vlastními slovy, i když bude kostrbatá. Vaše myšlenky, vaše interpretace, váš přínos.

Kde AI přesto pomůže i při psaní:
- **Zaseknete se na formulaci?** Napište myšlenku česky a nechte AI přeložit do akademické angličtiny.
- **Nevíte, jak uvést sekci?** Požádejte AI o 3 varianty úvodní věty — ale přepracujte do vlastního stylu.
- **Potřebujete ověřit termín?** Zeptejte se AI na správné použití odborného termínu v kontextu vaší disciplíny.

---

### Krok 4 — Vylepšete jazyk a styl

**Kdy:** Když máte hotový draft a potřebujete vylepšit angličtinu.

**Varianta A — Copilot ve Wordu (máte-li licenci M365 Copilot):**
Označte odstavec → klikněte na Copilot → "Rewrite for academic tone, improve clarity and conciseness."

**Varianta B — Claude nebo ChatGPT:**

```
Jsi editor akademického časopisu v oblasti environmental science.
Uprav tento text tak, aby:
- Angličtina byla gramaticky bezchybná
- Styl odpovídal standardům impaktovaného časopisu
- Věty byly stručné a přesné
- Zachoval se původní význam — nic nepřidávej, nevynechávej a nevymýšlej

Text k úpravě:
[vložte odstavec]
```

**Varianta C — Specializované nástroje:**
- **Writefull** (writefull.com) — navržený přímo pro akademické psaní, kontroluje i styl specifický pro váš obor
- **Paperpal** (paperpal.com) — jazyková korektura + kontrola citací

**Na co dát pozor:**
- AI má tendenci „vylepšovat" text tak, že přidá tvrzení, která jste neučinili. Vždy porovnejte výstup s originálem.
- Pokud AI přeformuluje větu s odkazem na zdroj, zkontrolujte, že odkaz stále odpovídá tomu, co zdroj říká.

---

### Krok 5 — Zkontrolujte citace a reference

Tohle je kritický krok, kde AI chybuje nejčastěji.

**Nikdy nežádejte AI o vyhledání citací** k podpoření tvrzení — vymyslí neexistující články (tzv. hallucinated references). Místo toho:

1. Citace hledejte výhradně přes **Elicit, Consensus, Web of Science, Scopus nebo Google Scholar** — ne přes chatboty.
2. Pokud máte hotový seznam referencí, můžete AI požádat o kontrolu formátování:

```
Zkontroluj tento seznam referencí podle stylu APA 7th edition.
Oprav formátování, ale neměň obsah — neupravuj názvy, autory ani roky.
Pokud něco vypadá neobvykle, upozorni mě místo opravy.

[vložte seznam referencí]
```

---

### Krok 6 — Před odesláním: Disclosure a etika

Většina vědeckých časopisů v roce 2026 vyžaduje **uvést, jak jste AI použili**. Neuvést to je považováno za porušení publikační etiky.

**Typická formulace pro Acknowledgments:**

```
The authors acknowledge the use of [název nástroje] (accessed [měsíc rok])
for [konkrétní účel: language editing / literature search / data visualization].
All AI-assisted outputs were reviewed, revised, and approved by the authors,
who take full responsibility for the accuracy and integrity of the work.
```

**Co musíte zkontrolovat před odesláním:**
- Jaká jsou pravidla konkrétního časopisu pro AI? Podívejte se do "Instructions for Authors" nebo "AI Policy." Každý vydavatel (Wiley, Elsevier, Springer Nature) má vlastní požadavky.
- AI nemůže být uvedena jako spoluautor — to je konsenzus všech velkých vydavatelů.
- Pokud jste AI použili pro analýzu dat nebo tvorbu kódu, uveďte to v sekci Methods a přiložte použité prompty jako supplementární materiál.

---

## Workflow na jedné stránce

```
1. REŠERŠE        → Elicit + Consensus         → 20–50 článků v evidenční tabulce
2. OSNOVA         → Claude / ChatGPT            → IMRaD struktura s argumenty
3. PSANÍ          → vy sami                     → první draft vlastními slovy
4. JAZYK          → Copilot / Writefull / Claude → vylepšená angličtina
5. CITACE         → Elicit + Scopus / WoS       → ověřené a naformátované reference
6. DISCLOSURE     → šablona výše                → transparentní uvedení AI v článku
```

---

## Časté chyby a jak se jim vyhnout

**„AI mi napsala celý Introduction."**
Problém: Recenzent to pozná — generický jazyk, povrchní propojení zdrojů, žádný originální pohled. Některé časopisy používají detekční nástroje a mohou článek odmítnout.
Řešení: Pište sami. AI použijte jen na jazyk a strukturu.

**„AI mi našla perfektní zdroje na podpoření mého tvrzení."**
Problém: Chatboty (ChatGPT, Claude, Copilot) vymýšlejí neexistující články. Vypadají věrohodně — mají autora, rok, název časopisu — ale neexistují.
Řešení: Zdroje hledejte výhradně přes Elicit, Consensus, Scopus nebo Google Scholar. Každý zdroj ověřte, že existuje.

**„Používám AI, ale neuvádím to."**
Problém: Většina vydavatelů to v roce 2026 považuje za porušení etiky. Při odhalení hrozí retrakce článku.
Řešení: Uveďte AI v Acknowledgments. Buďte konkrétní — jaký nástroj, k čemu, kdy.

---

## Pokročilý workflow: Systematická rešerše s Elicit

Pro vědce, kteří připravují review nebo metaanalýzu:

1. Zadejte výzkumnou otázku v Elicit → Systematic Review
2. Nastavte screening kritéria (inclusion/exclusion)
3. Elicit automaticky projde stovky článků a extrahuje data do strukturované tabulky
4. Exportujte výsledky do CSV → propojte se Zotero pro správu citací
5. Použijte Claude nebo NotebookLM pro syntézu — nahrajte klíčové PDF a ptejte se přes ně

Tento workflow nahrazuje týdny manuální práce, ale vyžaduje vaši odbornost při definici kritérií a interpretaci výsledků.

---

## Jaké nástroje použít — rychlý přehled

| Fáze | Nástroj | K čemu přesně |
|------|---------|---------------|
| Rešerše | Elicit | Hledání článků, evidenční tabulky, systematické review |
| Rešerše | Consensus | Ověření konsenzu, rychlé odpovědi s citacemi |
| Rešerše | Connected Papers | Vizualizace citačních sítí kolem klíčového článku |
| Psaní | Claude / ChatGPT | Osnova, překlad, formulace |
| Jazyk | Writefull / Paperpal | Akademická angličtina, kontrola stylu |
| Jazyk | Copilot ve Wordu | Přepisování odstavců přímo v dokumentu |
| Citace | Zotero + Elicit | Správa referencí, export, formátování |
| Kontrola | NotebookLM | Diskuse nad vlastními PDF bez hallucinations |

---

*Poslední aktualizace: duben 2026 · FŽP AI Akademie*
*Máte otázku nebo tip? Napište do Teams kanálu AI na FŽP.*
