let
  nixpkgs = import <nixpkgs> {};
in
  with nixpkgs;
  stdenv.mkDerivation {
    name = "tlaplus_shell";
    buildInputs = [
      git yarn nodejs llvm automake autoconf libtool pkgconfig nasm
    ];
    shellHook = ''
    '';
  }
