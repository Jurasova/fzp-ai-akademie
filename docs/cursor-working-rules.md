# Cursor Working Rules — FŽP AI Akademie

Jak pracovat s Cursorem na tomto projektu. Platí pro každou relaci.

---

## Před začátkem každé relace

1. Přečíst `README.md` v kořeni portálu — aktuální stav stránek a pravidla.
2. Přečíst cílový HTML soubor, než ho upravíte — nikdy nepisovat naslepo.
3. Zkontrolovat `context/tone-of-voice.md` a `context/quality-standard.md` pokud se tvoří nový obsah.

---

## Struktura projektu

```
PORTÁL FŽP/
├── style.css              — sdílený CSS pro celý portál
├── README.md              — redakční příručka, stav stránek
├── context/               — definice vize, publika, kvality, tónu, bezpečnosti
├── docs/                  — workflow, pracovní pravidla, šablony briefů
├── agents/                — definice AI agentů pro tvorbu a review obsahu
├── content/               — šablony pro obsah, prompty, use cases
├── sources/               — zdrojové materiály (raw + processed)
│   ├── raw/               — surové neupravené zdroje
│   └── processed/         — vyčištěné markdown zdroje připravené k použití
├── v-praxi/               — HTML stránky sekce "AI v praxi"
├── navody/                — HTML stránky sekce "Jak pracovat s AI"
├── aplikace/              — HTML stránky sekce "Aplikace"
├── bezpecnost/            — HTML stránky sekce "Bezpečnost & etika"
├── prompty/               — HTML stránky sekce "Prompty"
├── agenti/                — HTML stránky sekce "Agenti"
└── komunita/              — HTML stránky sekce "Komunita"
```

**Worktree:** `.claude/worktrees/musing-wilbur-924fcf/` obsahuje kompletní portál včetně `index.html`, `utils.js`, `sidebar.js`. Při editaci HTML stránek pracujte v kořenových složkách (`v-praxi/`, `navody/`), ne ve worktree.

---

## Pravidla pro HTML stránky

### Vždy před editací
```
1. Přečíst celý soubor (Read tool)
2. Ověřit, jaké CSS třídy jsou dostupné (README.md → tabulka komponent)
3. Podívat se na referenční stránku stejného typu (např. administrativa.html pro v-praxi stránky)
```

### Struktura každé stránky
```html
<body data-nav="SEKCE-NAZEV">          <!-- sidebar highlight -->
<script>window.PORTAL_PATH_PREFIX = '../';</script>   <!-- nebo '../../' pro 2 úrovně -->
<aside id="sidebar"></aside>
<article class="page-body">
  <div class="page-header"> ... </div>  <!-- label + h1 + perex -->
  <div class="situation-card"> ... </div>
  <h2>Co AI zvládne a co ne</h2>
  <div class="two-col"> ... </div>
  <!-- kroky, prompty, nástroje, varování -->
</article>
<script src="../utils.js"></script>
<script src="../sidebar.js"></script>
```

### CSS — pravidla
- Nepoužívat inline styly kromě barev `.step-num` a `.flow-chip` (ty jsou záměrně per-stránka)
- Nové CSS třídy přidávat pouze pokud existující nestačí
- Nové třídy přidávat do `style.css` s komentářem sekce
- Po přidání nové třídy aktualizovat tabulku komponent v `README.md`

---

## Pravidla pro obsah

### Prompty
- Každý prompt musí mít alespoň jeden guardrail: "Nevymýšlej / Pokud informace chybí, napiš k doplnění"
- Parametry vždy v hranatých závorkách: `[VLOŽTE TEXT]`
- Guardrail na konci promptu, ne na začátku
- Tlačítko kopírovat: `<button class="copy-btn" onclick="copyPrompt(this)">Kopírovat</button>` uvnitř `.prompt-block`

### Varování
- Minimálně jedno `.warning-card` na každé stránce s citlivými daty
- Stránky s granty a administrativou: dvě `.warning-card` (mantinely + citlivá data)
- Pojmenovat konkrétní nástroje: "ChatGPT.com, Gemini.com, Claude.ai" — ne "bezplatné AI nástroje"

### Čeština
- Žádné em-dash (`—`), jen pomlčka (`-`) nebo přeformulování
- Žádné blokové citáty (`>`)
- Žádné "pro FŽP" v nadpisech uvnitř stránek

---

## Po každé editaci

1. Spustit `ReadLints` na upravené soubory
2. Opravit všechny lint chyby
3. Aktualizovat `README.md` — stav stránky (`[ ]` → `[x]` + poznámka)
4. Pokud byla přidána nová CSS třída: přidat do tabulky v `README.md`

---

## MCP server `user-fail-program`

Pro přístup ke zdrojovým materiálům FAIL 2026:

| Nástroj | Parametry | Kdy použít |
|---------|-----------|------------|
| `get_module` | `module_id`: m1–m7 | Kompletní obsah modulu |
| `get_transcript` | `module_id` | Přepis lekce |
| `get_documents` | `category`, `module` | Prompty a dokumenty |
| `search_content` | `query` | Fulltextové hledání |
| `list_tools_catalog` | `category` | Katalog AI nástrojů |

Schémata nástrojů jsou v `C:\Users\mullerovav\.cursor\projects\...\mcps\user-fail-program\tools\`.

---

## Cursor rule

Pravidla pro projekt jsou v:
`c:\Users\mullerovav\OneDrive - CZU v Praze\AI\VZDĚLÁVÁNÍ A KURZY\FAIL2026\.cursor\rules\fzp-ai-akademie.mdc`

Platí pro všechny soubory ve složce `**/PORTÁL FŽP/**/*.html`.
