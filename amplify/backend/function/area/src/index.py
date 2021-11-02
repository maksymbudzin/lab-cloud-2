import json
import awsgi
import boto3
import os
import ast
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4
os.environ['AWS_DEFAULT_REGION'] = 'us-west-2'
client = boto3.client("dynamodb")
TABLE = os.environ.get("STORAGE_AREA_NAME")
app = Flask(__name__)
CORS(app)
BASE_ROUTE = "/area"


@app.route(BASE_ROUTE, methods=['POST'])
def create_area():
    request_json = request.get_json()
     
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'location': {'S': request_json.get("location")},
        'humidity': {'S': request_json.get("humidity")},
        'lighting': {'S': request_json.get("lighting")},
         
    })
    return jsonify(message="area created")

@app.route(BASE_ROUTE, methods=['GET'])
def list_area():
    response = client.scan(TableName=TABLE)
    data = response['Items']
    while response.get('LastEvaluatedKey'):
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        data.extend(response['Items'])
    return jsonify(data)

@app.route(BASE_ROUTE + '/<area_id>', methods=['PUT'])
def update_area(area_id):
    client.update_item(
        TableName=TABLE,
        Key={'id': {'S': area_id}},
        UpdateExpression='SET #location = :location, #humidity = :humidity, #lighting = :lighting',
        ExpressionAttributeNames={
            '#location': 'location',
            '#humidity': 'humidity',
            '#lighting': 'lighting'
             
        },
        ExpressionAttributeValues={
            ':location': {'S': request.json['location']},
            ':humidity': {'S': request.json['humidity']},
            ':lighting': {'S': request.json['lighting']}
             
        }
    )
    return jsonify(message="...............area updated?")
@app.route(BASE_ROUTE + '/<area_id>', methods=['DELETE'])
def delete_area(area_id):
    client.delete_item(
        TableName=TABLE,
        Key={'id': {'S': area_id}}
    )
    return jsonify(message="...............area deleted?")

def handler(event, context):
    return awsgi.response(app, event, context)