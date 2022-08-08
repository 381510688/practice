#!/bin/sh

alias timestamp='date +%s'

start=$(timestamp)
sleep 3s
end=$(timestamp)
echo "用时：$(expr $end - $start)"