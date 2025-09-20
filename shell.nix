
with import <nixpkgs> {};

mkShell {
  buildInputs = [
    nodejs_24
    typescript
    nodePackages.typescript-language-server
    nodePackages.vscode-langservers-extracted
    astro-language-server
  ];
}
