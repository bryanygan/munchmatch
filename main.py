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


###

# from urllib.request import urlopen
# from bs4 import BeautifulSoup

# htmldata = urlopen('https://')
# soup = BeautifulSoup(htmldata, 'html.parser')
# images = soup.find_all('img')

# for item in images:
#     print(item['src'])


###

# # importing google_images_download module
# from google_images_download import google_images_download

# # creating object
# response = google_images_download.googleimagesdownload()

# # search_queries = ['hamburger', 'pasta alfredo', 'salad', 'chicken nuggets', 'lobster', 'spicy wings']

# search_queries = ['The smartphone also features an in display fingerprint sensor.',
# 'The pop up selfie camera is placed aligning with the rear cameras.',
# 'The smartphone could be fuelled by a 3 700mAh battery.',]

# def downloadimages(query):
# 	# keywords is the search query
# 	# format is the image file format
# 	# limit is the number of images to be downloaded
# 	# print urls is to print the image file url
# 	# size is the image size which can
# 	# be specified manually ("large, medium, icon")
# 	# aspect ratio denotes the height width ratio
# 	# of images to download. ("tall, square, wide, panoramic")
# 	arguments = {"keywords": query,
# 				"format": "jpg",
# 				"limit":4,
# 				"print_urls":True,
# 				"size": "medium",
# 				"aspect_ratio":"panoramic"}
# 	try:
# 		response.download(arguments)

# 	# Handling File NotFound Error
# 	except FileNotFoundError:
# 		arguments = {"keywords": query,
# 					"format": "jpg",
# 					"limit":4,
# 					"print_urls":True,
# 					"size": "medium"}

# 		# Providing arguments for the searched query
# 		try:
# 			# Downloading the photos based
# 			# on the given arguments
# 			response.download(arguments)
# 		except:
# 			pass

# # Driver Code
# for query in search_queries:
# 	downloadimages(query)
# 	print()


###


# from simple_image_download import Downloader as simp

# response = simp.simple_image_download()
# response.download('bear supermario', limit=1)

###

# from simple_image_download import simple_image_download as simp

# response = simp.simple_image_download
# lst = ['hamburger','pasta alfredo']
# for rep in lst:
#     response().download(rep)

from simple_image_download import simple_image_download
keywords = ['hamburger','pasta alfredo', 'salad']
response = simple_image_download.Downloader

for kw in keywords:
    response().download(kw, 1)