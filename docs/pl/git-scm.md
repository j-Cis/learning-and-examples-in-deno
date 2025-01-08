# Git

## Submoduły

- ["7.11 Narzędzia Gita - Moduły zależne"](https://git-scm.com/book/pl/v2/Narz%C4%99dzia-Gita-Modu%C5%82y-zale%C5%BCne)
- ["7.11 Git Tools - Submodules"](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- ["git-submodule - Initialize, update or inspect submodules"](https://git-scm.com/docs/git-submodule)
  
---

- ["Git - submoduły i aliasy"](https://writeonly.pl/cli/git-submoduly-i-aliasy)

**Streszczenie**

```bash
git submodule [--quiet] [--cached]
git submodule [--quiet] add [<options>] [--] <repository> [<path>]
git submodule [--quiet] status [--cached] [--recursive] [--] [<path>…​]
git submodule [--quiet] init [--] [<path>…​]
git submodule [--quiet] deinit [-f|--force] (--all|[--] <path>…​)
git submodule [--quiet] update [<options>] [--] [<path>…​]
git submodule [--quiet] set-branch [<options>] [--] <path>
git submodule [--quiet] set-url [--] <path> <newurl>
git submodule [--quiet] summary [<options>] [--] [<path>…​]
git submodule [--quiet] foreach [--recursive] <command>
git submodule [--quiet] sync [--recursive] [--] [<path>…​]
git submodule [--quiet] absorbgitdirs [--] [<path>…​]
```

### Dodawanie submodułu do określonej lokalizacji

```bash
# git submodule add link-do-repozytorium opcjonalna-nazwa-folderu
git submodule add https://github.com/j-Cis/mod-deno-math.git mods/mod-deno-math
git status
git submodule init
```

### Ściąganie repozytorium ze wszystkimi modułami

```bash
git clone --recurse-submodules
```

### Aktyualizuje submoduły np po przełączeniu się na inną rewizję (ang.commit), gałąź lub po aktualizacji gałęzi

```bash
git submodule update --init --recursive
```
