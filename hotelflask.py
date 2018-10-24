from flask import Flask, render_template, jsonify, request

import jinja2

#establishing conn
import pymongo

#ssh to mongo server
client = pymongo.MongoClient("mongodb+srv://pizzaboy:j1a2c3k4@pizzabot-zhid3.mongodb.net")
db = client.hotel

app = Flask(__name__)

# user Defined functions
def load():
    #collection without system defaults
    collection = db.collection_names(include_system_collections=False)   
    listy = []
    for hotels in collection:        
        listy.append(hotels)
    return listy


# Rout meathods
@app.route('/')
def fun():             
    dataLoaded = load()
    return render_template('index.html',listy=dataLoaded)


@app.route('/reg', methods=['POST'])
def register():	
    name = request.form['name']	
    print(name)            
    db.create_collection(name)    
    dataLoaded = load()
    return render_template('index.html',listy=dataLoaded)

@app.route('/del', methods=['POST'])
def delete():	
    delhname = request.form['delhname']	
    print(delhname)        
    col = db[delhname]
    col.drop()
    dataLoaded = load()
    return render_template('index.html',listy=dataLoaded)

@app.route('/addupdate',methods=['POST'])
def updateAdd():
    updateName = request.form['updatename'] 
    menuItem = request.form['menuItem']
    menuPrice = request.form['menuPrice']
    print(updateName,menuItem,menuPrice)   
    
    col = db[updateName]
    col.insert({"item":menuItem, "price":menuPrice})

    dataLoaded = load()
    return render_template('index.html',listy=dataLoaded)

@app.route('/updateupdate',methods=['POST'])
def updateupdate():
    updateName = request.form['updatename'] 
    menuItem = request.form['menuItem']
    menuPrice = request.form['menuPrice']
    print(updateName,menuItem,menuPrice)   
    
    col = db[updateName]
    col.update({"item":menuItem},{"item":menuItem, "price":menuPrice})

    dataLoaded = load()
    return render_template('index.html',listy=dataLoaded)

@app.route('/deleteupdate',methods=['POST'])
def deleteupdate():
    updateName = request.form['updatename'] 
    menuItem = request.form['menuItem']
    menuPrice = request.form['menuPrice']
    print(updateName,menuItem,menuPrice)   

    col = db[updateName]
    col.remove({"item":menuItem})

    dataLoaded = load()
    return render_template('index.html',listy=dataLoaded)

@app.route('/showHotel',methods=['POST'])
def showHotel():
    hotelName = request.form['hotelName']    
    actualValue = hotelName.split()
    print(actualValue[0])
    
    col = db[actualValue[0]]

    hotelMitem=[]
    for items in col.find():        
        itemData =  dict(hname=items['item'],iprice=items['price'])
        hotelMitem.append(itemData)    
                
    
    for items in hotelMitem:
        print(items['hname'],items['iprice'])        
#lines to edit
    dataLoaded = load()
    #return jsonify({"test":hotelMitem})
    return render_template('index.html',listy=dataLoaded,hotelMitem=hotelMitem)
# / lines to edit

if __name__ == '__main__':    
    app.run(debug=True)
