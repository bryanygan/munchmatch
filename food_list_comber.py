foodsText = open("foods_list.txt", "r")
foodsLines = foodsText.readlines()
outputLines = []
allFoods = []

for line in foodsLines:
    for food in line.split(","):
        allFoods.append(food)
allFoods = list(set(allFoods))

counter = 0
for food in allFoods:
    outputLines.append(food.strip().strip('\n'))
    counter+=1
    if(counter%20==0):
        outputLines.append("\n")
    else:
        outputLines.append(",")

combedText = open("foods_list_combed.txt", "w")
outputText = ""
for line in outputLines:
    outputText += line
combedText.writelines(outputText)
combedText.close()