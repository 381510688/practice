#!/bin/bash

a=2
b=2

echo "a + b = $(expr $a + $b)"
echo "a + b = $((a + b))"

if ((a == b))
then
  echo "相等"
else 
  echo "不相等"
fi

if test $a -eq $b 
then
  echo '相等'
else 
  echo '不相等'
fi