#!/bin/sh

filepath='./file-expr.sh'

if [ -x $filepath ]
then 
  echo "$filepath has execute permission"
fi 


filepath2='./file-expr2.sh'

if [ -e $filepath2 ]
then 
  echo "$filepath2 is exist"
else
  echo "$filepath2 is not exist"
fi 


