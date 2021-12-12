from flask import Flask, request, jsonify
import requests
import json


def generadorUsers():
    ROOT_LINK = "https://random-data-api.com/api/users/random_user"
    res = requests.get(ROOT_LINK)
    foto = requests.get('https://fakeface.rest/face/json')

    user = {'_id': "user" + res.json()['first_name'] + res.json()['last_name'], 'nombre': res.json()['first_name'],
            'apellido': res.json()['last_name'], 'mascotas': "", 'foto': foto.json()['image_url']}

    name = "user" + res.json()['first_name'] + res.json()['last_name']
    json_user = json.dumps(user)
    r.set(name, json_user)
    return json.loads(json_user)
