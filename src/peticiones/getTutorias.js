export const getTutorias = async () =>{
    const url = 'http://localhost:8080/tutores/tutorias'
    const resp = await fetch(url)
    const data= await resp.json();

    const tutoriaList = data.map(tutoria =>({
        idTutoria: tutoria.idTutoria,
        nombreTutor: tutoria.nombreTutor,
        asignaturaTutor: tutoria.asignaturaTutor,
        fecha: tutoria.fecha
    }));
    console.log(tutoriaList)
    return tutoriaList; 
    
}