#!/bin/bash
NOCOLOR="\033[0m"
YELLOW="\033[1;33m"
LIGHTBLUE="\033[1;34m"
RED="\033[0;31m"
LIGHTGREEN="\033[1;32m"

if [[ $(python --version 2>&1) =~ 2 ]];
  then
    cd "./dist"
    echo -e "${LIGHTBLUE}Run Python 2 script to run a simple http server."
    echo -e "${RED}Press ctrl + c to exit the server.${NOCOLOR}"
    python -m SimpleHTTPServer 8080
  else
    echo "No Python 2 founded."
fi
