foodsText = open("foods_list_combed.txt", "r")
foodsLines = foodsText.readlines()
# outputLines = foodsLines.join(",")
# outputLines = ','.join(foodsLines)
outputLines = ','.join(str(x) for x in foodsLines)
print(outputLines)

singleLine = ""
for line in outputLines:
    singleLine += line.strip()

foodsText = open("food_list_single.txt", "w")
# outputText = "const foods = [\n"
foodsText.write(singleLine)
foodsText.close()