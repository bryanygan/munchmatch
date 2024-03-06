imagesText = open("images.txt", "r")
imagesLines = imagesText.readlines()

outputLines = []

foodsText = open("foods_array.txt", "r")
foodsLines = foodsText.readlines()

# a * character denotes the link has to be found

# count = 0
# Strips the newline character


def search_list(strings, key):
    for s in strings:
        if key in s:
            return s
    return None


def extract_within_quotes(text):
    start_quote = text.find('"')
    end_quote = text.find('"', start_quote + 1)
    if start_quote != -1 and end_quote != -1:
        return text[start_quote + 1:end_quote]
    else:
        return None

for line in foodsLines:
    if line.__contains__("{"):
        if not line.__contains__("*"):
            outputLines.append(line)
        else:
            # ind1 = line.index("name: ") + 6
            # ind2 = line.index("description: ") + 12
            # print(ind1)
            # print(ind2)
            # print(f"line:{line}")
            # foodName = line[ind1 : (ind2 - ind1)]
            foodName = extract_within_quotes(line.split(",")[1])
            print(f"FOODNAME:{foodName}")
            selectedLine = search_list(imagesLines, foodName)
            print(f"selected line: {selectedLine}")
            imageLink = selectedLine[selectedLine.index("|")+1:]
            outputLines.append(line.replace("*", imageLink.strip().strip('\n')))

# for line in imagesLines:

#     # count += 1
#     print(line.strip())
#     # print("Line{}: {}".format(count, line.strip()))

foodsText = open("foods_array.txt", "w")
outputText = "const foods = [\n"
for line in outputLines:
    outputText += line
outputText += "];"
foodsText.writelines(outputText)
foodsText.close()
