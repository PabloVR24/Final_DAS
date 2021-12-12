"""[linea : Contenido]
    20 : Imports
    26 : servicio
    33 : POST (Usuario)
    44 : GET (Usuarios)
    53 : GET (Usuario Especifico)
    59: DELETE (Usuario Espeficifo)
    65 : PUT (Usuario Especifico)
    
    78 : POST (Pato)
    88 : GET (Patos)
    97 : GET (Pato Especifico)
    103 : DELETE (Pato Espeficifo)
    109 : PUT (Pato Especifico)
    
    118 : GET (FotoCara)
    126 : GET (FotoPato)
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import redis
import requests
from generator import generadorUsers

r = redis.StrictRedis(host="redis", port=6379,
                      charset="utf-8", decode_responses=True)
app = Flask(__name__)

CORS(app)


@app.route('/users', methods=["POST"])
def createUser():
    user = {'_id': "user" + request.json['nombre'] + request.json['apellido'], 'nombre': request.json['nombre'], 'apellido': request.json['apellido'],
            'mascotas': request.json['mascotas'], 'foto': request.json['foto']}

    name = "user" + request.json['nombre'] + request.json['apellido']
    json_user = json.dumps(user)
    r.set(name, json_user)
    return json.loads(json_user)


@app.route('/users', methods=["GET"])
def getUsers():
    users = []
    for key in r.keys():
        if r.get(key).startswith("{\"_id\": \"user"):
            users.append(json.loads(r.get(key)))
    return jsonify(users)


@app.route('/user/<id>', methods=["GET"])
def getUser(id):
    user = json.loads(r.get(id))
    return user


@app.route('/users/<id>', methods=["DELETE"])
def deleteUser(id):
    r.delete(id)
    return 'ELIMINADO'


@app.route('/users/<id>', methods=["PUT"])
def updateUser(id):
    user = {'_id': id, 'nombre': request.json['nombre'], 'apellido': request.json['apellido'],
            'mascotas': request.json['mascotas'], 'foto': request.json['foto']}
    json_user = json.dumps(user)
    r.set(id, json_user)
    return "Actualizado"

# ---------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------


@app.route('/ducks', methods=["POST"])
def createDuck():
    duck = {'_id': "duck" + request.json['nombre'] + request.json['dueño'], 'nombre': request.json['nombre'], 'dueño': request.json['dueño'],
            'año': request.json['año'], 'foto': request.json['foto']}
    name = "duck" + request.json['nombre'] + request.json['dueño']
    json_duck = json.dumps(duck)
    r.set(name, json_duck)
    return json.loads(json_duck)


@app.route('/ducks', methods=["GET"])
def getDucks():
    ducks = []
    for key in r.keys():
        if r.get(key).startswith("{\"_id\": \"duck"):
            ducks.append(json.loads(r.get(key)))
    return jsonify(ducks)


@app.route('/duck/<id>', methods=["GET"])
def getDuck(id):
    duck = json.loads(r.get(id))
    return duck


@app.route('/ducks/<id>', methods=["DELETE"])
def deleteDuck(id):
    r.delete(id)
    return 'ELIMINADO'


@app.route('/ducks/<id>', methods=["PUT"])
def updateDuck(id):
    duck = {'_id': id, 'nombre': request.json['nombre'], 'dueño': request.json['dueño'],
            'año': request.json['año'], 'foto': request.json['foto']}
    json_duck = json.dumps(duck)
    r.set(id, json_duck)
    return "Actualizado"


@app.route('/duckImg', methods=["GET"])
def getDuckImg():
    ROOT_LINK = 'https://random-d.uk/api/v2/random'
    res = requests.get(ROOT_LINK)
    duck = res.json()['url']
    return jsonify(duck)


@app.route('/face', methods=["GET"])
def getFace():
    LINK = 'https://fakeface.rest/face/json'
    res = requests.get(LINK)
    face = res.json()['image_url']
    return jsonify(face)


@app.route('/generateUser', methods=["POST"])
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

if __name__ == 'main__':
    app.run(debug=True, host='0.0.0.0')