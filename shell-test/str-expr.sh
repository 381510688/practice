a='x '
if [ -z $a ]
then echo "length of $a is 0"
else echo "length of $a is "  
fi

str='   '
if [ -z $str ]
then
	echo "-z $str : string length is zero"
fi