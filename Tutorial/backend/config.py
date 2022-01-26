# /config.py
db = {
    'user': 'root',
    'password': '1111',
    'host': 'localhost',
    'database': 'advertisements'
}

db_url = f"mysql+mysqlconnector://{db['user']}:{'db[password']}@" \
         f"{db['host']}:{db['port']}/{db['database']"