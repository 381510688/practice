#!/bin/sh

if [ $2 -eq 0 ]
then
  echo "除数不能为0"
  exit 1
fi	
echo `expr $1 / $2`