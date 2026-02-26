
#!/bin/bash
read -p "Enter the name of a D&D race: " race_name
curl -L "https://www.dnd5eapi.co/api/2014/races/$race_name" -H 'Accept: application/json'