#!/bin/sh

helloWorldFile='./helloworld.sh'
if [ -e $helloWorldFile ]
then
  echo "$helloWorldFile 没有执行权限"
  echo '修改执行权限'
  bash chmod +x $helloWorldFile
  echo '修改完成'
 else
  echo "$helloWorldFile 拥有执行权限"
fi

bash $helloWorldFile
echo '执行结束'