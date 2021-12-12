import React, { useState, useEffect } from "react";
const API = process.env.REACT_APP_API;

export const Ducks = () => {
  const [nombre, setnombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [año, setAño] = useState("");
  const [foto, setFoto] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");
  const [ducks, setDucks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editing) {
      const res = await fetch(`${API}/ducks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre,
          dueño: dueño,
          año: año,
          foto: foto,
        }),
      });
      const data = await res.json();
      console.log(data);
    } else {
      await fetch(`${API}/ducks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre,
          dueño: dueño,
          año: año,
          foto: foto,
        }),
      });

      setEditing(false);
      setId("");
    }

    await getDucks();
    await getFoto();

    setDueño("");
    setnombre("");
    setFoto("");
    setAño("");
  };

  const getDucks = async () => {
    const res = await fetch(`${API}/ducks`);
    const data = await res.json();
    setDucks(data);
  };

  const getFoto = async () => {
    const res = await fetch(`${API}/duckImg`);
    const data = await res.json();
    setFoto(data);
  };

  useEffect(() => {
    getDucks();
    getFoto();
  }, []);

  const deleteDuck = async (id) => {
    const DuckResponse = window.confirm("¿Eliminar este dato?");
    if (DuckResponse) {
      await fetch(`${API}/ducks/${id}`, {
        method: "DELETE",
      });
      await getDucks();
      await getFoto();
    }
  };

  const editDuck = async (id) => {
    const res = await fetch(`${API}/duck/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(data._id);

    setnombre(data.nombre);
    setFoto(data.foto);
    setAño(data.año);
    setDueño(data.dueño);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <img width="200px" height="200px" alt="" src={foto} />
        <form onSubmit={handleSubmit} className="card card-body">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              onChange={(e) => setnombre(e.target.value)}
              value={nombre}
              className="form-control"
              placeholder="nombre"
              autoFocus
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              onChange={(e) => setDueño(e.target.value)}
              value={dueño}
              className="form-control"
              placeholder="Dueño"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              onChange={(e) => setAño(e.target.value)}
              value={año}
              className="form-control"
              placeholder="Año"
            />
          </div>
          <button className="btn btn-primary btn-block form-control">
            {editing ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className="col-md-16">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-center">Fotografia</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Dueño</th>
              <th className="text-center">Año</th>
              <th className="text-center">Funciones</th>
            </tr>
          </thead>
          <tbody>
            {ducks.map((duck) => (
              <tr key={duck._id}>
                <td className="text-center">
                  <img src={duck.foto} width="100px" height="100px" alt="" />
                </td>
                <td className="text-center">{duck.nombre}</td>
                <td className="text-center">{duck.dueño}</td>
                <td className="text-center">
                {duck.año}
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-secondary btn-m btn-block"
                    onClick={(e) => editDuck(duck._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-m btn-block"
                    onClick={(e) => deleteDuck(duck._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
