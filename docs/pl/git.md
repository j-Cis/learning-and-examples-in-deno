# Git

## Submoduły

dodawanie submodułu dookreślonej lokalizacji

```bash
git submodule add link-do-repozytorium opcjonalna-nazwa-folderu
git submodule init
```

**Na przykład**

```bash
git submodule add https://github.com/j-Cis/mod-deno-math.git mods/mod-deno-math
git submodule init
```

> ```bash
> git clone --recurse-submodules
> git submodule update --init --recursive
> ```
>
> 1. Pierwsze polecenie ściąga repozytorium ze wszystkimi submodułami.
> 2. Drugie - aktualizuje submoduły po przełączeniu się na inną rewizję (ang.
>    commit), gałąź lub po aktualizacji gałęzi.
