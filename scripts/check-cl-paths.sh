#!/bin/bash
# Checks Casa-Libre paths on one country's live site before they are used in content (read-only GETs).
# Usage: bash scripts/check-cl-paths.sh <bo|uy|ve|sv|py> /venta/casas/sucre /alquiler/casas/sucre ...
# Prints "200 /path" for a working page. Add the working ones to CL_PATHS / CL_CITY_PATHS in lib/countries.js.
# Polite on purpose: a normal browser user agent and one request per second (the sites have an anti-bot gate).
declare -A ORIGIN=( [py]=https://casa-libre.com.py [bo]=https://casa-libre.com.bo [uy]=https://uy.casa-libre.com [ve]=https://casa-libre.com.ve [sv]=https://sv.casa-libre.com )
cc="$1"; shift
origin="${ORIGIN[$cc]}"
if [ -z "$origin" ] || [ $# -eq 0 ]; then echo "usage: $0 <py|bo|uy|ve|sv> /path [/path ...]"; exit 1; fi
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
for p in "$@"; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -A "$UA" -H 'Accept-Language: es' -m 30 "$origin$p")
  echo "$code $p"
  sleep 1
done
