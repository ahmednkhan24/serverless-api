#!/bin/bash

projectDir=$(pwd);

for dir in ${projectDir}/dist/*;
do
  cp package.json ${dir}
done

