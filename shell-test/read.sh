#!/bin/sh
echo $-
echo "what's your name?"
read name
echo "my name is $name"

echo "what's your telephone?"
read tel
if [[ $tel =~ ^1[0-9]{10}$ ]] 
then
  echo 'it is telephone number'
else 
  echo 'it not is telephone number'
fi