#/bin/bash

lsof -nP -i TCP:8080 | grep LISTEN | awk '{print $2;}' 