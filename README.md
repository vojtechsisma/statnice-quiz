Vibecoded with CLAUDE

# Státnice Bc. – Aplikovaná informatika (kvíz)

Učební kvíz pro státní závěrečnou zkoušku bakalářského studia oboru Aplikovaná informatika.

## Obsah

- **SOFT** – Softwarové inženýrství (23 okruhů)
- **TSP** – Technické a softwarové prostředky (19 okruhů)

Každý okruh obsahuje 5 výběrových otázek s vysvětlením.

## Spuštění lokálně

Žádná závislost – statická stránka. Stačí otevřít `index.html` v prohlížeči,
nebo spustit jednoduchý server:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Nasazení na GitHub Pages

1. Vytvoř GitHub repo a pushni:
   ```bash
   git remote add origin git@github.com:USER/REPO.git
   git push -u origin main
   ```
2. V repu: Settings → Pages → Source: GitHub Actions (workflow je již součástí).
3. Po push na `main` se stránka nasadí na `https://USER.github.io/REPO/`.
