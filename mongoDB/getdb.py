from pymongo import MongoClient

def getdatabase():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTIONSTRING = "mongodb+srv://jamie:jamie@cluster0.asabt.mongodb.net/"
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTIONSTRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['usershopping_list']

#This is added so that many files can reuse the function get_database()
if __name__ == "__main":
   #Get the database
   dbname = getdatabase()