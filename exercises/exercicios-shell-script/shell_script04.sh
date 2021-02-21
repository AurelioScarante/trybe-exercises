#!/bin/bash
FILE="/home/aurelio/Documentos/exerShell"

if [ -e "$FILE" ]
  then
    echo "O caminho está habilitado!"
fi 

if [ -w "$FILE" ]
  then
    echo "Você tem permissão para editar!"
  else
    echo "Você NÃO tem permissão para editar!"
fi
