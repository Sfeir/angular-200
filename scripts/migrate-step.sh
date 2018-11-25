#!/bin/bash

clone="../clone-angular-200"

ng g app $1 --minimal || exit 1
step=steps/$1

if [ -d "$step" ] && [ -d $clone/src/app ]; then

  rm -r $step/src/app && cp -r $clone/src/app $step/src/app

  rm -r $step/src/environments && cp -r $clone/src/environments $step/src/
  rm -r $step/src/assets && cp -r $clone/src/assets $step/src/assets
  rm -r $step/src/styles.css && cp -r $clone/src/styles.css $step/src/styles.css
  rm -r $step/src/index.html && cp -r $clone/src/index.html $step/src/index.html

  ng serve $1 -o
fi
