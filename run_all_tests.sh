#!/bin/bash

for file in $(ls *_test.js)
do
  echo $file
  node $file
  echo " "
done
