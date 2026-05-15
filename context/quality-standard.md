# Quality Standard — FŽP AI Akademie

Každý obsah publikovaný na portálu musí projít těmito deseti kritérii.

---

## 10 kritérií kvality

### 1. Praktický

Stránka odpovídá na otázku: "Co konkrétně mám udělat?" — ne "Co je AI?" nebo "Proč je AI důležitá."

**Kontrolní otázka:** Může uživatel po přečtení stránky okamžitě zkusit jeden krok v práci?

**Prochází:** "Zkopírujte tento prompt, doplňte parametry v závorkách a vložte do Copilotu."
**Neprochází:** "AI přináší revoluci do akademického světa a mění způsob, jak pracujeme."

---

### 2. Profesionální

Jazyk, struktura a prompty odpovídají úrovni akademického prostředí. Obsah nepůsobí jako blog, YouTubový popis ani marketingový text.

**Kontrolní otázka:** Bylo by mi trapné ukázat tuto stránku děkanovi nebo zahraničnímu partnerovi?

---

### 3. Srozumitelný pro netechnické uživatele

Žádný technický žargon bez vysvětlení. Každý zkratka nebo termín, který by administrativní pracovník neznal, musí být vysvětlen nebo nahrazen.

**Prochází:** "Vložte text do textového pole v Copilotu."
**Neprochází:** "Použijte prompt injection techniku pro chain-of-thought reasoning."

---

### 4. Použitelný hned

Obsah nevyžaduje žádné předcházející školení ani přístup k systémům mimo portál. Prompty jsou připraveny ke zkopírování.

**Kontrolní otázka:** Může uživatel bez jakékoliv přípravy zkopírovat prompt a vyzkoušet ho do 2 minut?

---

### 5. Bezpečný

Každá stránka obsahuje jasné mantinely: co do AI nevkládat, která data jsou citlivá, které nástroje jsou v institucionálním prostředí schválené.

**Kontrolní otázka:** Je na stránce alespoň jeden bezpečnostní prvek (warning-card, info-card nebo guardrail v promptu)?

---

### 6. Bez hype

Žádné sliby, které nelze ověřit. Žádné superlativy. Žádné "AI změní váš život."

**Prochází:** "AI pomůže zkrátit čas potřebný na přípravu zápisu z porady."
**Neprochází:** "AI za vás napíše perfektní zápis za vteřiny a změní způsob, jak váš tým komunikuje."

---

### 7. Bez neověřených dat

Žádná procenta, čísla ani statistiky bez konkrétního zdroje. Pokud uvádíme odhad úspory času, musí být označen jako odhad a musí být realistický.

**Prochází:** "Zpracování jednoho cestovního příkazu se s AI zkrátí z desítek minut na jednotky minut (odhad z praxe)."
**Neprochází:** "AI ušetří 73 % času každého zaměstnance."

---

### 8. Vhodný pro akademické prostředí

Příklady, terminologie a situace odpovídají práci na FŽP ČZU. Žádné příklady z korporátního prostředí bez adaptace.

**Prochází:** "Připravte shrnutí výzkumné zprávy pro vedení fakulty."
**Neprochází:** "Připravte quarterly business review pro C-level stakeholdery."

---

### 9. Strukturovaný pro aplikaci

Obsah odpovídá HTML komponentám portálu. Žádné bloky textu bez struktury. Každá situace má jasnou hierarchii: nadpis → perex → situace → kroky/prompt → varování.

**Kontrolní otázka:** Je každý blok obsahu namapován na konkrétní HTML komponentu z `README.md`?

---

### 10. Konzistentní napříč portálem

Stejný styl, stejná úroveň detailu, stejná struktura jako ostatní stránky stejného typu. Prompty mají stejný formát. Varování mají stejnou formulaci.

**Kontrolní otázka:** Pokud by uživatel přešel z `vedecky-clanek.html` na `administrativa.html`, pozná, že jsou ze stejného portálu?

**Pozor na `.step-num` badge:** vždy používat průběžná čísla (1, 2, 3... pokračující přes celou stránku), barvu `background:#007364` a nikdy inline `font-size`. Kódy jako `A1`, `D4` nebo jiné alfanumerické hodnoty jsou nepřijatelné.

---

## Jak používat tento standard

Před každým novým obsahem projděte tento checklist. U revizí použijte jako základ pro feedback.

Pokud stránka nesplňuje kritéria 1, 5, 7 nebo 9, vrátit k přepracování. Ostatní kritéria jsou důležitá, ale drobné odchylky lze opravit v rámci editace.
