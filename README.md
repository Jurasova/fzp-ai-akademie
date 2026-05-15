# FŽP AI Akademie — Redakční příručka

> Jak tvoříme stránky portálu: obsah, styl psaní, formát, co se nedělá.
> Používej tento soubor jako referenci při tvorbě každé nové stránky.

---

## Zdrojové materiály

Obsah stránek vychází z těchto zdrojů — v tomto pořadí priority:

1. **`MODULY/ai akademie fzp/fzp-portal-obsah-fail2026_claude.md`** — hlavní zdroj: obsah vytěžený z FAIL 2026, již přizpůsobený pro FŽP. Každá sekce `## NÁZEV` odpovídá jedné stránce portálu.
2. **`MODULY/MODUL X/M*.md`** — zdrojové markdown soubory z FAIL 2026 (myšlenky a koncepty, ne texty doslova).
3. **MCP server `user-fail-program`** — nástroje `get_module`, `get_transcript`, `search_content` pro hlubší zdroje.

**Pravidlo:** Bereme myšlenky a koncepty, texty kompletně přepisujeme vlastními slovy pro akademické prostředí.

---

## Struktura každé stránky

Každá stránka portálu sleduje tuto šablonu (ne všechny bloky musí být na každé stránce):

```
1. Záhlaví          — štítek sekce + h1 + perex (1 věta)
2. Situace          — .situation-card: pro koho je stránka určena
3. Co AI zvládne    — <details class="step"> (2–4 bloky)
4. Co AI nenahradí  — .two-col s .col-card (rozdělené dle role nebo tématu)
5. Doporučený krok  — .info-card s konkrétní akcí
6. Nástroje         — .tools-grid s .tool-card
7. Varování         — .warning-card (1–3 bloky)
8. Prompt           — .prompt-block s tlačítkem Kopírovat
```

**Patička:** zatím se nepřidává.

---

## Styl psaní

### Tón
- Objektivní, přístupný, praktický
- Jako kvalitní interní průvodce fakulty — ne manuál, ne reklamní text
- Přímé oslovení "vy" / "vám" / "váš" — ne "uživatel" nebo "člověk"

### Co platí vždy
- Krátké věty, žádné složité souvětí
- Konkrétní příklady z akademického prostředí (rešerše, sylaby, granty, e-maily studentům, zápisy z porad)
- Tam kde je obsah role-specifický, jasně oddělit: **Vědci a pedagogové** vs. **Administrativa**
- Příklady uvádět jako "Příklady:" bez "pro FŽP" (celý portál je pro FŽP)

### Co se nedělá
- Žádné citáty (blockquote `>`)
- Žádné dlouhé pomlčky `—` (em dash) — čeština je nepoužívá; nahradit pomlčkou `-` nebo přeformulovat
- Žádné neověřené statistiky a čísla bez zdroje (žádné "35 % úspěchu", "80 % lidí")
- Žádné zmínky o FAIL kurzu, Filipu Dřímalce, FAIL portálu nebo FAIL terminologii
- Žádné predikce o budoucnosti AI ("AI převezme vaši práci", "za X let...")
- Žádné superlativy bez podkladu ("nejlepší nástroj", "revolucionizuje práci")
- Žádné "pro FŽP" v nadpisech sekcí uvnitř stránky

---

## HTML komponenty portálu

Používej existující třídy z `style.css` — nové přidávat jen pokud chybí:

| Komponenta | HTML třída | Použití |
|-----------|-----------|---------|
| Záhlaví stránky | `.page-header` + `.label` + `.perex` | Vždy na začátku |
| Úvodní karta situace | `.situation-card` | Pro koho je stránka |
| Rozkliknutelný blok | `<details class="step">` + `.step-num` + `.step-meta` + `.step-body` | Kroky, co AI zvládne |
| Dvousloupcová karta | `.two-col` + `.col-card.col-yes` / `.col-card.col-no` | Srovnání, role |
| Info karta | `.info-card` + `.info-icon` | Tipy, doporučené kroky |
| Přehled nástrojů | `.tools-grid` + `.tool-card` + `.tool-phase` | Seznam nástrojů |
| Varování | `.warning-card` + `.warn-title` | Upozornění |
| Prompt k zkopírování | `.prompt-block` + `<button class="copy-btn" onclick="copyPrompt(this)">` | Hotové prompty |
| Krok s číslem | `.step-num` (barva inline `style`) | Číslované kroky |
| Flow strip | `.flow-strip` + `.flow-chip` + `.flow-arrow` | Workflow kroky |
| Přehled nástrojů tabulkový | `.tools-grid` | 2–4 sloupce karet |
| Úrovňové karty | `.level-ladder` + `.level-rung` + `.level-rung-body` + `.level-rung-title` + `.level-examples` | 3 úrovně adopce/progression |

### Barvy kroků (FŽP paleta)
```
--primary:      #007364   (teal — hlavní barva)
--primary-dark: #004b3f   (tmavý teal)
--accent:       #00aaa0   (světlý teal)
```
Pro `.step-num` a `.flow-chip` používej `style="background:#007364"` nebo varianty z palety portálu.

---

## Zdroje dostupné přes MCP (`user-fail-program`)

| Nástroj | Parametry | Kdy použít |
|---------|-----------|------------|
| `get_module` | `module_id`: m1–m7 | Kompletní obsah modulu |
| `get_transcript` | `module_id` | Přepis lekce |
| `get_documents` | `category`, `module` | Prompty a dokumenty |
| `search_content` | `query` | Fulltextové hledání napříč materiály |
| `list_tools_catalog` | `category` | Katalog 73+ AI nástrojů |

---

## Zásady pro prompty

Každý prompt musí mít tyto vlastnosti:
- **Guardrails:** explicitní instrukce `Nevymýšlej / Pokud informace chybí, napiš "k doplnění" / Neodhaduj`
- **Parametry v hranatých závorkách:** `[VLOŽTE TEXT]` — jasně označit co uživatel doplní
- **Akademický kontext:** kde relevantní, uvést standardizované překlady titulů a funkcí (děkan = Dean, proděkan = Vice-Dean, habilitační řízení = habilitation procedure)
- **Bezpečnostní instrukce:** u promptů pracujících s dokumenty vždy připomenout anonymizaci

---

## Mantinely pro obsah stránek bezpečnosti

Na stránkách s bezpečnostními pravidly rozlišovat **tři okruhy**:
1. Co AI nikdy nedělá sama (nepodepisuje, neodesílá, nerozhoduje)
2. Co do veřejné AI nedávat (pojmenovat konkrétní nástroje: ChatGPT.com / Gemini.com / Claude.ai vs. Copilot 365)
3. Kontrolní otázka / checklist před vložením

---

## Otevřené stránky k doplnění

### Jak pracovat s AI
- [x] `navody/ai-mindset.html` — hotovo (duben 2026)
- [x] `navody/jak-zacit.html` — hotovo (duben 2026)
- [x] `navody/technicke-tipy.html` — hotovo (duben 2026)
- [ ] `navody/rcpo-metoda.html`

### Aplikace
- [x] `aplikace/copilot-pruvodce.html` — hotovo
- [x] `aplikace/promjena-vyuky.html` — hotovo
- [x] `aplikace/galerie-nastroju.html` — hotovo, přepracováno na inline karty (květen 2026)
- [ ] `aplikace/ai-toolkit.html`

### AI v praxi
- [x] `v-praxi/vedecky-clanek.html` — hotovo, zrevidováno (duben 2026)
- [x] `v-praxi/reserse.html` — hotovo, zrevidováno (duben 2026)
- [x] `v-praxi/administrativa.html` — hotovo (duben 2026): pyramida adopce, 8 situací, 3 okruhy mantinelů; situace 8: odpovědi na opakující se dotazy studentů
- [x] `v-praxi/grant-zprava.html` — hotovo (duben 2026): 7-krokový workflow, 5 promptů, bezpečnostní sekce, checklist, tools-grid
- [x] `v-praxi/priprava-vyuky.html` — hotovo (květen 2026)
- [ ] `v-praxi/analyza-dat.html`

### Bezpečnost & etika
- [x] `bezpecnost/pravidla-czu.html` — hotovo (květen 2026)
- [x] `bezpecnost/eu-ai-act.html` — hotovo (květen 2026)
- [x] `bezpecnost/co-nesdilet.html` — hotovo (květen 2026)

### Agenti a asistenti
- [x] `agenti/prehled.html` — hotovo (květen 2026)

### Komunita
- [x] `komunita/novinky.html` — hotovo (květen 2026)

### Prompty pro výuku
- [ ] `prompty/priprava.html`
- [ ] `prompty/vyuka.html`
- [ ] `prompty/hodnoceni.html`
- [ ] `prompty/pravidla.html`

---

## Zdrojové dokumenty pro připravované stránky

| Stránka | Zdrojový soubor |
|---------|----------------|
| `v-praxi/analyza-dat.html` | `AI pro akademiky/Datum,Lokalita,pH,Teplota_C,NO3_mgL.csv` — ukázková data |
| `v-praxi/priprava-vyuky.html` | `AI pro akademiky/academic_editor_prompts10.md` — Prompt 8 (úkoly), Prompt 9 (zpětná vazba) |
| `prompty/hodnoceni.html` | `AI pro akademiky/academic_editor_prompts10.md` — Prompt 9 |
| `aplikace/galerie-nastroju.html` | Podcast z NotebookLM (GitHub hosting), `list_tools_catalog` přes MCP |
| `v-praxi/administrativa.html` | `ai akademie fzp/ai-administrativa-fakulty.docx` — použito, integrováno |
| `v-praxi/grant-zprava.html` | `ai akademie fzp/fzp_ai_akademie_resim_granty.md` — použito, integrováno |

---

*Poslední aktualizace: 15. května 2026*
