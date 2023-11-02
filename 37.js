const numeroCursos = 3;
const alumnosPorCurso = 5;

const notasColegio = {};

for (let curso = 1; curso <= numeroCursos; curso++) {
  notasColegio[`Curso ${curso}`] = {};

  for (let alumno = 1; alumno <= alumnosPorCurso; alumno++) {
    const nota = Math.floor(Math.random() * 11);
    notasColegio[`Curso ${curso}`][`Alumno ${alumno}`] = nota;
  }
}

for (const curso in notasColegio) {
  console.log(`Notas del ${curso}:`);
  for (const alumno in notasColegio[curso]) {
    console.log(`${alumno}: ${notasColegio[curso][alumno]}`);
  }
}
