#!/bin/bash
FILE=$@

for FILE in $FILE
  do
    if [ -f "$FILE" ]
      then
        echo "$FILE é um arquivo comum"
    elif [ -d "$FILE" ]
      then
        echo "$FILE é um diretório"
    else
      echo "$FILE é alguma outra coisa"
    fi 
    ls -l $FILE
done