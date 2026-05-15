# Sources — Přehled zdrojových materiálů

Tento adresář obsahuje zdrojové materiály pro tvorbu obsahu portálu FŽP AI Akademie.

```
sources/
├── README.md          — tento soubor (master index)
├── raw/               — surové, neupravené zdroje
│   └── README.md      — instrukce pro přidávání zdrojů
└── processed/         — vyčištěné markdown zdroje připravené k použití
    └── README.md      — přehled zpracovaných zdrojů a jejich stavu
```

---

## Jak pracovat se zdroji

1. Nový surový zdroj → uložit do `sources/raw/` a zapsat do `raw/README.md`
2. Po zpracování (viz `agents/research-synthesizer.md`) → uložit do `sources/processed/`
3. Po integraci do stránky → označit v `processed/README.md` jako integrovaný

---

## Master index zdrojů

### Zdrojové materiály FAIL 2026 (přes MCP)

| Zdroj | Přístup | Stav |
|-------|---------|------|
| Modul 1–7 (obsah) | MCP `get_module` | Dostupné |
| Přepisy lekcí | MCP `get_transcript` | Dostupné |
| Prompty a dokumenty | MCP `get_documents` | Dostupné |
| Katalog AI nástrojů (73+) | MCP `list_tools_catalog` | Dostupné |

### Lokální zpracované soubory

| Soubor | Určen pro | Stav |
|--------|-----------|------|
| `MODULY/ai akademie fzp/fzp-portal-obsah-fail2026_claude.md` | Více stránek | Částečně integrováno |
| `MODULY/ai akademie fzp/fzp_ai_akademie_resim_granty.md` | `v-praxi/grant-zprava.html` | Integrováno |
| `MODULY/ai akademie fzp/ai-administrativa-fakulty.docx` | `v-praxi/administrativa.html` | Integrováno |
| `MODULY/ai akademie fzp/univerzalni_ai_tipy_z_fail_pro_fzp_ai_akademii.md` | `navody/technicke-tipy.html` | Integrováno |
| `MODULY/ai akademie fzp/Architektura VŽP AI Akademie_...md` | `navody/ai-mindset.html` | Integrováno |
| `AI pro akademiky/academic_editor_prompts10.md` | Prompty, grant, výuka | Částečně integrováno |
| `AI pro akademiky/Datum,Lokalita,pH,Teplota_C,NO3_mgL.csv` | `v-praxi/analyza-dat.html` | Připraveno k integraci |

### Interní dokumenty ČZU

| Soubor | Určen pro | Stav |
|--------|-----------|------|
| `pokyn-dekana-2-2025-pokyny-a-doporuceni-pro-vyuzivani-ai.pdf` | `bezpecnost/pravidla-czu.html` | Neprozkoumáno |

---

## Co sem NEPATŘÍ

- Hotové HTML stránky portálu (ty patří do `v-praxi/`, `navody/` atd.)
- Šablony a briefs pro obsah (ty patří do `content/`)
- Osobní poznámky nesouvisející s portálem
