import pymongo

client = pymongo.MongoClient("mongodb+srv://pizzaboy:j1a2c3k4@pizzabot-zhid3.mongodb.net")
db = client.hotel

collection = db.collection_names(include_system_collections=False)

col = db["hotels"]

for items in col.find():
    print(items['name'])    

for items in col.find():
    print(items['age'])    