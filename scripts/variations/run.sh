#!/bin/bash

PACKAGE_DIR=$1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# read variables
source $PACKAGE_DIR/.env

# build ROOTDIR
ROOTDIR=$(cd $SCRIPT_DIR/../../ && pwd)

# get project scope
PROJECTSCOPE=$(node -pe "require('$ROOTDIR/package.json').name")
PROJECTSCOPE=$(echo "$PROJECTSCOPE" | cut -d'/' -f1 | awk -F'@' '{print $2}')

# copy over template files if none existing folder
if [ ! -f $PACKAGE_DIR/views/variations/index.html ]; then 
  cp $SCRIPT_DIR/template/index.html $PACKAGE_DIR/views/variations
fi
if [ ! -f $PACKAGE_DIR/views/variations/style.css ]; then 
  cp $SCRIPT_DIR/template/style.css $PACKAGE_DIR/views/variations
fi
if [ ! -f $PACKAGE_DIR/views/variations/main.js ]; then 
  cp $SCRIPT_DIR/template/main.js $PACKAGE_DIR/views/variations
  echo "\nimport \"@$PROJECTSCOPE/$PACKAGENAME$NAME/wc\";" >> $PACKAGE_DIR/views/variations/main.js
fi

# run the build
node $SCRIPT_DIR/build.js $PACKAGE_DIR $CLASSNAME $PREFIXNAME