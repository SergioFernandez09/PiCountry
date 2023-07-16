import React, { useState } from 'react'

const Form = () => {
    const [state , setState] = useState({
        name:"",
        difficulty:"",
        duration:"",
        temporada:"",
    })

    const [errors , setErrors] = useState({
        name:"Campo Obligatorio",
        difficulty:"Campo Obligatorio",
        duration:"Campo Obligatorio",
        temporada:"Campo Obligatorio",
    })

    const validate = (state, name) => {

        if (name==="name"){
            if (state.name!=="") setErrors({...errors, name: ""})
            else setErrors({...errors, name:"Campo Obligatorio."})
                return;
        }

        if (name === "difficulty") {
            if (state.difficulty !== "") setErrors({ ...errors, difficulty: "" });
            else setErrors({ ...errors, difficulty: "Campo Obligatorio" });
            return;
          }
      
          if (name === "duration") {
            if (state.duration !== "") setErrors({ ...errors, duration: "" });
            else setErrors({ ...errors, duration: "Campo Obligatorio" });
            return;
          }
      
          if (name === "temporada") {
            if (state.temporada !== "") setErrors({ ...errors, temporada: "" });
            else setErrors({ ...errors, temporada: "Campo Obligatorio" });
            return;
          }
    }

const disable = () => {
    let disabled = true;
    for(let error in errors) {
        if (errors[error]==="") disabled = false;
        else{
            disabled = true;
            break;
        }
    }
    return disabled;
}
const handleChange = (event) => {
    setState({
        ...state,
        [event.target.name] : event.target.value
    })
    validate({
        ...state,
        [event.target.name] : event.target.value
    }, event.target.name)
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)
}
  return (
    console.log(errors),
    <div>
      <h2>Crear Actividad Turística</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input name="name" onChange={handleChange} type="text" />
        </div>
        <div>
          <label>Dificultad:</label>
          <input name="difficulty" onChange={handleChange} type="number" min="1" max="5" />
        </div>
        <div>
          <label>Duración:</label>
          <input name="duration" onChange={handleChange} type="number" min="1" />
        </div>
        <div>
          <label>Temporada:</label>
          <select name="temporada" onChange={handleChange}>
            <option value="">Seleccione una opción</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </div>
        <button type="submit" disabled={disable()} >Crear Actividad Turística</button>
      </form>
    </div>
  )
}

export default Form