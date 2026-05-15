# Safety Rules — FŽP AI Akademie

Bezpečnostní pravidla jsou součástí každé stránky portálu. Nejsou extra záložka — jsou integrována do každé situace, kde existuje riziko.

---

## Tři okruhy mantinelů

### Okruh 1: Co AI nikdy nedělá sama

Tato pravidla platí pro jakýkoliv AI nástroj, bez ohledu na to, zda je veřejný nebo podnikový.

- Neodesílá e-maily, nepodepisuje dokumenty, neprovádí finanční transakce.
- Nerozhoduje o studijních záležitostech (uznávání předmětů, výjimky, hodnocení).
- Nehodnotí výkon jednotlivých zaměstnanců ani studentů.
- Neuzavírá smlouvy ani závazky jménem fakulty.
- Cokoliv, co opouští fakultu (e-mail, zpráva, smlouva), prochází lidskou kontrolou.

---

### Okruh 2: Co do veřejné AI nedávat

**Veřejná AI** = ChatGPT.com, Gemini.com, Claude.ai, Copilot.microsoft.com bez podnikového přihlášení, a jakákoliv jiná AI služba bez smlouvy s ČZU.

**Podniková AI** = Microsoft 365 Copilot přes účet ČZU (@fzp.czu.cz nebo @czu.cz). V podnikové AI jsou data chráněna podmínkami smlouvy.

Do **veřejné** AI nevkládat:
- Rodná čísla, čísla bankovních účtů, hesla.
- Mzdové údaje, osobní spisy, hodnocení zaměstnanců.
- Neveřejné grantové žádosti před podáním.
- Nepublikovaná výzkumná data a předběžné výsledky.
- Smlouvy, dodatky, právní dokumenty před podpisem.
- Studijní agendu s osobními údaji studentů.
- Interní finanční podklady, rozpočty a sazby.
- Cokoliv označeného jako "důvěrné" nebo "interní".

Do **podnikové AI** (Copilot 365) lze vkládat pracovní dokumenty ČZU — ale platí obecná zásada: nevkládat nic, co by nebylo možné sdílet e-mailem s kolegou.

---

### Okruh 3: Tři kontrolní otázky před vložením textu do AI

Před každým vložením dokumentu nebo textu do AI nástroje:

1. Vadilo by mi, kdyby tento text četl kolega z jiné instituce?
2. Obsahuje text osobní, finanční, neveřejné nebo strategické údaje?
3. Mám právo tento obsah vložit do vybraného AI nástroje?

Pokud je odpověď na kteroukoli otázku nejistá: nevkládat, nebo text nejprve anonymizovat.

---

## Kategorie citlivých dat (rychlý přehled)

| Kategorie | Příklady | Kde vložit |
|-----------|---------|-----------|
| Veřejná data | Veřejná výzva, publikovaný článek, veřejný předpis | Jakákoliv AI |
| Pracovní dokumenty ČZU | Interní e-mail, zápis z porady, anonymizovaná zpráva | Copilot 365 |
| Osobní údaje | Rodné číslo, mzda, hodnocení | Nikde bez GDPR záruky |
| Neveřejné projekty | Grant před podáním, nepublikovaná data | Nikde nebo jen anonymizovaně v Copilotu 365 |
| Právní dokumenty | Smlouva, dodatek, rozhodnutí | Jen Copilot 365, po konzultaci s IT/právníkem |

---

## Jak integrovat bezpečnost do obsahu stránek

Každá stránka portálu musí mít:

1. Alespoň jeden **guardrail v promptu**: "Nevymýšlej / Pokud informace chybí, napiš k doplnění / Neodhaduj."
2. Alespoň jeden **bezpečnostní prvek**: `.warning-card` nebo `.info-card` s upozorněním na citlivá data.
3. **Konkrétní pojmenování nástrojů**: Ne "bezplatné AI nástroje" — ale "ChatGPT.com, Gemini.com, Claude.ai."

Stránky s vysokým rizikem (grant, administrativa, bezpečnost): dvě oddělené `.warning-card` — jedna pro "co AI nedělá sama", jedna pro "co do veřejné AI nedávat."

---

## Odkaz na podrobnosti

Sekce `bezpecnost/co-nesdilet.html` obsahuje kompletní přehled. Každá stránka s bezpečnostními pravidly na ni může odkazovat:

```html
<a href="../bezpecnost/co-nesdilet.html">Co nesdílet s AI</a>
```

---

## Zdroj pravidel

Pravidla vycházejí z:
- Pokynu děkana č. 2/2025 o využívání AI na FŽP (soubor `pokyn-dekana-2-2025-pokyny-a-doporuceni-pro-vyuzivani-ai.pdf`)
- Obecných principů GDPR pro zpracování osobních údajů
- Podmínek služby Microsoft 365 (podniková smlouva ČZU)
