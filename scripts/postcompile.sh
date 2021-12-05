#!/bin/bash

projectDir=$(pwd);
echo projctDir: "${projectDir}"

for dir in ${projectDir}/dist/*;
do
  echo dir: "${dir}"
  cp package.json ${dir}
done

