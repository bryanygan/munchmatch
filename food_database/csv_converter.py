import re
import json
import csv

# Read the JavaScript array from the file
with open('foods_array.txt', 'r') as file:
    js_array = file.read()

# Use regular expressions to extract the data
matches = re.findall(r'\{.*?\}', js_array)

# Define the headers for the CSV file
headers = ['image', 'name', 'description', 'country', 'price', 'sweet', 'sour', 'salty', 'bitter', 'umami', 'gluten', 'seafood', 'dairy', 'spice']

# Write data to CSV file
with open('foods.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()
    for match in matches:
        # Convert the matched string to a valid JSON format
        json_data = match.replace("'", "\"")
        # Load JSON string into a dictionary
        data = json.loads(json_data)
        writer.writerow(data)
