# Prompt Template — Šablona pro tvorbu promptů

Každý prompt na portálu musí splňovat tento formát. Slouží jako šablona i jako checklist.

---

## Anatomie promptu

```
[1. Role AI — volitelné]
Jsi [role] v/pro [kontext].

[2. Kontext situace]
[1–2 věty vysvětlující, co uživatel dělá a co od AI chce]

[3. Vstup — parametry v hranatých závorkách]
[NÁZEV PARAMETRU: popis co vložit]
[NÁZEV PARAMETRU 2: výběr / z možností]

[4. Instrukce výstupu]
Výstup [má obsahovat / vrať / připrav]:
1. [konkrétní část]
2. [konkrétní část]
[délka: max N slov / N odrážek / N vět]

[5. Guardrails — VŽDY na konci]
[vybrat relevantní — viz níže]
```

---

## Guardrails — knihovna

Vyberte relevantní guardraily pro daný prompt. Minimálně jeden musí být v každém promptu.

### Pro práci s dokumenty a daty
```
Nevymýšlej žádná fakta, čísla ani podmínky.
Pokud informace chybí, označ ji jako "k doplnění".
Pokud informace v textu není, napiš "nenalezeno" — neodhaduj.
```

### Pro práci s výzvami, předpisy a pravidly
```
Použij pouze informace z přiloženého textu.
Nepřidávej vlastní domněnky ani znalosti z tréninku.
Pokud pravidlo nebo podmínka není v textu uvedena, napiš "není uvedeno".
```

### Pro přepis a editaci textu
```
Zachovej všechna fakta, čísla a věcný obsah původního textu.
Nevymýšlej nové výsledky, partnery ani data.
```

### Pro reporting a shrnutí
```
Nevymýšlej žádné výsledky, indikátory ani termíny.
Pokud podklad chybí, označ jako "k doplnění" — nedoplňuj odhadem.
Piš věcně, bez marketingových frází.
```

### Pro extrakci dat z dokladů a faktur
```
Pokud je údaj nečitelný, napiš "nečitelný" — nedoplňuj.
Nikdy nedoplňuj chybějící hodnoty odhadem.
U každého řádku uveď, ze kterého souboru nebo strany pochází.
```

---

## Pravidla pro parametry

- Vždy v hranatých závorkách: `[VLOŽTE TEXT]`
- Popis co parametr obsahuje: `[VLOŽTE ANONYMIZOVANOU ČÁST VÝZVY]`
- Výběrové možnosti: `[GAČR / TA ČR / Horizon Europe / OP JAK / jiný]`
- Vždy VERZÁLKY pro název parametru: `[VLOŽTE TEXT]`, ne `[vložte text]`

---

## Příklad — dobře napsaný prompt

```
Jsi konzultant pro přípravu grantových žádostí v akademickém prostředí.

Přepiš následující část žádosti tak, aby byla jasná, přesvědčivá a čitelná pro hodnotitele.

Text:
[VLOŽTE TEXT]

Program:
[GAČR / TA ČR / Horizon Europe / OP JAK / jiný]

Zachovej:
- odbornou přesnost,
- všechna důležitá fakta,
- uvedená čísla.

Zlepši:
- jasnost problému,
- logiku argumentace,
- čitelnost.

Nevymýšlej nové výsledky, partnery, data ani rozpočet.
Na konec přidej sekci "Co ještě doplnit", pokud v textu něco chybí.
```

---

## Příklad — špatně napsaný prompt (a proč)

```
Pomoz mi napsat lepší grant. Tady je text: [text]
```

Proč je špatný:
- Chybí role AI (konzultant? editor? hodnotitel?)
- Chybí instrukce výstupu (co přesně vrátit?)
- Chybí guardrails (AI může domýšlet data)
- Parametr je bez popisu

---

## Checklist před použitím promptu

- [ ] Prompt má alespoň jeden guardrail
- [ ] Parametry jsou v `[ZÁVOZKÁCH]` s popisem
- [ ] Instrukce výstupu je konkrétní (ne "napiš shrnutí")
- [ ] Prompt byl testován na reálném vstupu
- [ ] Guardrail na citlivá data je přítomen (pokud prompt pracuje s dokumenty)
