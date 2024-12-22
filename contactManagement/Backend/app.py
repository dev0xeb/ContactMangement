# from urllib import request

from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)


client = MongoClient('localhost', 27017)
db = client['contact_management']
contacts_collection = db['contacts']


@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = list(contacts_collection.find({}, {'_id': 0}))
    return jsonify(contacts)

@app.route('/contacts', methods=['POST'])
def add_contact():
    contact = request.json
    contacts_collection.insert_one(contact)
    return jsonify(contact), 201

@app.route('/contacts/<contact-id>', methods=['PUT'])
def update_contact(contact_id):
    update_data = request.json
    result = contacts_collection.find_one_and_update({'_id': contact_id}, {'$set': update_data}, return_document= True)
    if result is None:
        return jsonify({'error': 'Contact not found'}), 404
    return jsonify(result)

if __name__ == '__main__':
    app.run()
