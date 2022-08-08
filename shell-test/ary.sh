#!/bin/bash

ary=('ligang' 32)
echo ${ary[*]}
ary[2]='山东省'
echo ${ary[*]}
ary=([2]='山东烟台' [3]='ligang.blog.csdn.net')
echo ${ary[*]}
echo ${ary[0]}
echo ${#ary[*]}

ary1=('ligang' 32)
ary2=('山东省')
newAry=(${ary1[*]} ${ary2[*]})
echo ${newAry[*]}




declare -A colors=(['red']='#ff0000' ['green']='#00ff00' ['blue']='#0000ff')

echo ${colors['red']}
echo ${colors[*]}
echo ${#colors[*]}