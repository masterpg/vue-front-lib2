#!/bin/sh -e

PROGNAME=$(basename $0)

usage() {
    echo "Usage: $PROGNAME [OPTIONS]"
    echo "  This script builds vue-front-lib."
    echo
    echo "Options:"
    echo "  -h, --help                           output usage information"
    echo "  --dest <path>                        specify output directory as relative path"
    echo "  --watch                              watch for changes"
    echo
    exit 1
}

SCRIPT_DIR=$(cd $(dirname $0); pwd)
CURRENT_DIR=`pwd`

ARG_WATCH=false

for OPT in "$@"
do
  case $OPT in
    -h | --help)
      usage
      exit 1
      ;;
    --dest)
      if [[ -z "$2" ]] || [[ "$2" =~ ^-+ ]]; then
        echo "$PROGNAME: option requires an argument $1" 1>&2
        exit 1
      fi
      ARG_DEST=$2
      shift 2
      ;;
    --watch)
      ARG_WATCH=true
      shift 1
      ;;
  esac
done

if [ -z "$ARG_DEST" ]; then
  echo "$PROGNAME: option requires an argument --dest" 1>&2
  exit 1
fi

ABSOLUTE_DEST="$CURRENT_DIR/$ARG_DEST"

cd "$SCRIPT_DIR"

BUILD_COMMAND="vue-cli-service build --target lib --name vue-front-lib2 ./src/main.ts --dest \"$ABSOLUTE_DEST\""

if $ARG_WATCH; then
  BUILD_COMMAND="$BUILD_COMMAND --watch"
fi

rm -rf "$ABSOLUTE_DEST"
eval ${BUILD_COMMAND}
