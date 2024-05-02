# import csv

# def convert_to_csv(input_file, output_file):
#     with open(input_file, 'r') as f:
#         lines = f.readlines()

#     csv_data = []
#     for line in lines:
#         # Remove leading and trailing whitespace, then split by comma
#         fields = [field.strip() for field in line.split(',')]
#         csv_data.append(fields)

#     with open(output_file, 'w', newline='') as f:
#         writer = csv.writer(f, quotechar='"', quoting=csv.QUOTE_MINIMAL)
#         writer.writerows(csv_data)

# # Example usage:
# input_file = 'input.txt'
# output_file = 'output.csv'
# convert_to_csv(input_file, output_file)
# print(f"Conversion completed. CSV file saved as '{output_file}'")


import csv
import io

def convert_to_csv(input_file, output_file):
    with open(input_file, 'r') as f:
        csv_reader = csv.reader(f)
        csv_data = list(csv_reader)

    with open(output_file, 'w', newline='') as f:
        csv_writer = csv.writer(f)
        csv_writer.writerows(csv_data)

# Example usage:
input_file = 'input.txt'
output_file = 'output.csv'
convert_to_csv(input_file, output_file)
print(f"Conversion completed. CSV file saved as '{output_file}'")
