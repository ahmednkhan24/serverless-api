#!/bin/bash

projectDir=$(pwd);
# echo projctDir: "${projectDir}"
# echo

for dir in ${projectDir}/dist/*;
do
  # echo Copying to "${dir}";
  cp package.json ${dir} && cp yarn.lock ${dir}
done

