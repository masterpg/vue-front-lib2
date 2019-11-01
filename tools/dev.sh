#!/bin/sh -e

PROGNAME=$(basename $0)

usage() {
    echo "Usage: $PROGNAME [OPTIONS]"
    echo "  This script helps vue-front-lib development."
    echo
    echo "Options:"
    echo "  -h, --help                           output usage information"
    echo "  --nodedir <path>                     specify node_module directory of the project using vue-front-lib"
    echo "  --watch                              watch for changes"
    echo
    exit 1
}

SCRIPT_DIR=$(cd $(dirname $0); pwd)
PROJECT_DIR=$(cd "$SCRIPT_DIR/.."; pwd)
PROJECT_NAME=$(basename $PROJECT_DIR)
EXEC_DIR=`pwd`
NODE_DIR=""
IS_WATCH=false

for OPT in "$@"
do
  case $OPT in
    -h | --help)
      usage
      exit 1
      ;;
    --nodedir)
      NODE_DIR=$2
      shift 2
      ;;
    --watch)
      IS_WATCH=true
      shift 1
      ;;
  esac
done

# ｢--nodedir｣が指定されているかチェック
if [ -z "$NODE_DIR" ]; then
  echo "$PROGNAME: option requires an argument --nodedir" 1>&2
  exit 1
fi

# ｢--nodedir｣で指定されたディレクトリが存在するかチェック
if [ ! -e "$NODE_DIR" ]; then
  echo "$PROGNAME: No such directory \"$NODE_DIR\"" 1>&2
  exit 1
fi

# ｢--nodedir｣が相対パスの場合、絶対パスに変換
REGEX="^/.+"
if [[ ! $NODE_DIR =~ $REGEX ]]; then
  NODE_DIR="$EXEC_DIR/$NODE_DIR"
fi
NODE_DIR=$(cd "$NODE_DIR"; pwd)

WATCH_DIR="src/**/*"
FROM_FILE="{{changed}}"
TO_DIR="$NODE_DIR/$PROJECT_NAME"
TO_FILE="$TO_DIR/{{changed}}"

echo watchdir: "$PROJECT_DIR/$WATCH_DIR"
echo nodedir : "$NODE_DIR"

EDIT_COMMAND="onchange -f \"add change\" \"$WATCH_DIR\" -- cp -f \"$FROM_FILE\" \"$TO_FILE\""
DELETE_COMMAND="onchange -f \"unlink\" \"$WATCH_DIR\" -- rm -f \"$TO_FILE\""

# ライブラリのプロジェクトディレクトリへ移動
cd "$PROJECT_DIR"

if $IS_WATCH; then
  # ｢--watch｣が指定された場合、ライブラリのソースをウォッチ開始
  eval "${EDIT_COMMAND} & ${DELETE_COMMAND}"
else
  # ｢--watch｣が指定さなかった場合、node_moduleにあるライブラリのソースを最新化
  rm -rf "$TO_DIR/src"
  cp -rf "src" "$TO_DIR"
fi
