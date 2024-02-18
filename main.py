# import requests
# from bs4 import BeautifulSoup
# import urllib.request

# def get_image_url(food_name):
#     search_query = '+'.join(food_name.split())

#     url = f"https://www.google.com/search?q={search_query}&tbm=isch"

#     headers = {'User-Agent': 'Mozilla/5.0'}

#     response = requests.get(url, headers=headers)
    
#     soup = BeautifulSoup(response.text, 'html.parser')

#     img_url = soup.find('img')['src']
#     print(img_url)

#     return img_url

# def download_image(image_url, file_name):
#     urllib.request.urlretrieve(image_url, file_name)

# def main():
#     food_name = input("Enter the name of the food: ")
#     image_url = get_image_url(food_name)
#     download_image(image_url, f"{food_name}.jpg")
#     print("Image downloaded successfully!")

# if __name__ == "__main__":
#     main()

from urllib.request import urlopen 
from bs4 import BeautifulSoup 
  
htmldata = urlopen('https://') 
soup = BeautifulSoup(htmldata, 'html.parser') 
images = soup.find_all('img') 
  
for item in images: 
    print(item['src']) 