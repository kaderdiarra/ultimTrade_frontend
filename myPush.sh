#!/bin/bash

branch_name=$(git symbolic-ref --short -q HEAD)
green='\e[32m'
end_color='\e[0m'

if [ -z "$1" ] || [ -z "$2" ]
then 
    echo 'Inputs cannot be blank please try again!' 
    exit 0 
fi 

printf "%b" "push on branch: ${green}${branch_name}${end_color} ? (y/n):"
read -p "   " response

if [[ "$response" == "y" ]]; then
    git add .
    git commit -m "[$1] => $2"
    git push origin "$branch_name"
fi
