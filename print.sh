#!/bin/bash
output_file="combined.txt"

# Clear or create the output file
> "$output_file"

# Loop through files
for file in **/*.ts; do 
    echo "=== Contents of $file ===" >> combined.txt
    cat "$file" >> combined.txt
    echo -e "\n" >> "$output_file"
done