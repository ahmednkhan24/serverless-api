#!/bin/bash

projectDir=$(pwd);
# echo projctDir: "${projectDir}"

for dir in ${projectDir}/dist/*;
do
  cp {package.json,yarn.lock} ${dir}
done

