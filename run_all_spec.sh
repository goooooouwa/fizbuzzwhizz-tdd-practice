#!/bin/bash

for file in $(ls *_spec.js)
do
  echo $file
  node $file
done
