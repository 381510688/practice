#!/bin/sh

for var in "$*"
do
  echo $var
done

for vari in "$@"
do
  echo "${vari}"
done  

function division () {
	if [ $2 -eq 0 ]
	then
		echo "除数不能为0"
		exit 0
	fi	
	return `expr $1 / $2`
}
division 2 1
echo $?