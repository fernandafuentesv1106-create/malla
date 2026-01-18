/* Datos de la malla: cada materia con sus prerrequisitos y desbloqueos.
   Regla: una materia solo está disponible si TODAS sus prerrequisitos están aprobadas.
*/

const curriculum = {
  "PRIMER SEMESTRE": [
    { id: "ingles1", name: "Inglés 1", prereq: [], unlocks: ["ingles2"] },
    { id: "metrologia", name: "Metrología", prereq: [], unlocks: ["bioquimica", "fisiologia", "fundamentos", "gerontologia"] },
    { id: "biologia", name: "Biología", prereq: [], unlocks: ["bioquimica", "fundamentos", "gerontologia", "microbiologia"] },
    { id: "catedra1", name: "Cátedra FUCS 1", prereq: [], unlocks: ["catedra2"] },
    { id: "cuidadoComunitario", name: "Cuidado a la persona y familia en el entorno comunitario", prereq: [], unlocks: ["fundamentos", "gerontologia"] },
    { id: "electiva1", name: "Electiva", prereq: [], unlocks: [] },
    { id: "historiaFundamentos", name: "Historia y fundamentos", prereq: [], unlocks: ["cuidadoMujerNinoFamilia"] },
    { id: "informatica", name: "Informática", prereq: [], unlocks: ["cuidadoMujerNinoFamilia"] },
    { id: "morfologia", name: "Morfología", prereq: [], unlocks: ["fisiologia", "fundamentos", "gerontologia", "microbiologia", "semiologia"] },
    // Nota: "Fundamentos del cuidado de enfermería y gerontología" aparece en 2do semestre como curso formal
  ],
  "SEGUNDO SEMESTRE": [
    { id: "ingles2", name: "Inglés 2", prereq: ["ingles1"], unlocks: ["ingles3"] },
    { id: "bioquimica", name: "Bioquímica", prereq: ["biologia", "metrologia"], unlocks: ["adulto1", "farmaco1"] },
    { id: "electiva2", name: "Electiva", prereq: [], unlocks: [] },
    { id: "fisiologia", name: "Fisiología", prereq: ["morfologia", "metrologia"], unlocks: ["adulto1", "farmaco1", "semiologia"] },
    { id: "fundamentos", name: "Fundamentos del cuidado de enfermería y gerontología", prereq: ["biologia", "morfologia", "cuidadoComunitario", "metrologia"], unlocks: ["adulto1"] },
    { id: "microbiologia", name: "Microbiología", prereq: ["biologia", "morfologia"], unlocks: ["adulto1", "farmaco1"] },
    { id: "psicologiaGeneral", name: "Psicología general", prereq: [], unlocks: ["psicologiaDesarrollo"] },
  ],
  "TERCER SEMESTRE": [
    { id: "antropologia", name: "Antropología y cultura", prereq: [], unlocks: ["cuidadoMujerNinoFamilia"] },
    { id: "catedra2", name: "Cátedra FUCS 2", prereq: ["catedra1"], unlocks: ["catedra3", "cuidadoMujerNinoFamilia"] },
    { id: "adulto1", name: "Cuidado de enfermería a la persona adulta 1", prereq: ["bioquimica", "fisiologia", "fundamentos", "microbiologia"], unlocks: ["adulto2", "saludMental"] },
    { id: "farmaco1", name: "Farmacología 1", prereq: ["bioquimica", "fisiologia", "microbiologia"], unlocks: ["adulto2", "saludMental", "farmaco2"] },
    { id: "ingles3", name: "Inglés 3", prereq: ["ingles2"], unlocks: ["ingles4"] },
    { id: "psicologiaDesarrollo", name: "Psicología del desarrollo", prereq: ["psicologiaGeneral"], unlocks: ["saludMental"] },
    { id: "semiologia", name: "Semiología", prereq: ["morfologia", "fisiologia"], unlocks: ["adulto2", "saludMental"] },
  ],
  "CUARTO SEMESTRE": [
    { id: "adulto2", name: "Cuidado de enfermería a la persona adulta 2", prereq: ["adulto1", "farmaco1", "semiologia"], unlocks: ["adultoCritico"] },
    { id: "saludMental", name: "Cuidado de enfermería a la persona en salud mental y psiquiátrica", prereq: ["adulto1", "farmaco1", "semiologia", "psicologiaDesarrollo"], unlocks: ["adultoCritico"] },
    { id: "electiva3", name: "Electiva", prereq: [], unlocks: [] },
    { id: "etica", name: "Ética", prereq: [], unlocks: ["cuidadoMujerNinoFamilia"] },
    { id: "farmaco2", name: "Farmacología 2", prereq: ["farmaco1"], unlocks: ["adultoCritico", "farmaco3"] },
    { id: "ingles4", name: "Inglés 4", prereq: ["ingles3"], unlocks: ["adultoCritico", "farmaco3"] },
    { id: "metodologiaCuant", name: "Metodología de la investigación cuantitativa", prereq: [], unlocks: ["metodologiaCualit"] },
  ],
  "QUINTO SEMESTRE": [
    { id: "adminCuidado", name: "Administración del cuidado de enfermería", prereq: [], unlocks: ["cuidadoMujerNinoFamilia", "gestionServicios"] },
    { id: "bioetica", name: "Bioética", prereq: [], unlocks: ["cuidadoMujerNinoFamilia"] },
    { id: "adultoCritico", name: "Cuidado de enfermería a la persona adulta en situaciones críticas", prereq: ["adulto2", "saludMental", "farmaco2", "ingles4"], unlocks: ["cuidadoMujerNinoFamilia"] },
    { id: "farmaco3", name: "Farmacología 3", prereq: ["farmaco2", "ingles4"], unlocks: ["cuidadoMujerNinoFamilia", "farmaco4"] },
    { id: "metodologiaCualit", name: "Metodología de la investigación cualitativa", prereq: ["metodologiaCuant"], unlocks: ["cuidadoMujerNinoFamilia", "investigacionAplicada"] },
    { id: "saludPublica", name: "Salud pública", prereq: [], unlocks: ["cuidadoMujerNinoFamilia"] },
  ],
  "SEXTO SEMESTRE": [
    { id: "catedra3", name: "Cátedra FUCS 3", prereq: ["catedra2"], unlocks: [] },
    { id: "cuidadoMujerNinoFamilia", name: "Cuidado de enfermería a la mujer, niño y familia", prereq: ["historiaFundamentos", "informatica", "antropologia", "catedra2", "etica", "adminCuidado", "bioetica", "adultoCritico", "farmaco3", "metodologiaCualit", "saludPublica"], unlocks: ["cuidadoNinoAdolescente"] },
    { id: "electivaProfEsp", name: "Electiva profundización específica", prereq: [], unlocks: [] },
    { id: "electivaProfGen", name: "Electiva profundización genéricas", prereq: [], unlocks: [] },
    { id: "farmaco4", name: "Farmacología 4", prereq: ["farmaco3"], unlocks: ["cuidadoNinoAdolescente", "farmaco5"] },
    { id: "investigacionAplicada", name: "Investigación aplicada", prereq: ["metodologiaCualit"], unlocks: ["proyecto1"] },
    { id: "proyecto1", name: "Proyecto de grado 1", prereq: ["investigacionAplicada"], unlocks: ["proyecto2"] },
  ],
  "SÉPTIMO SEMESTRE": [
    { id: "cuidadoNinoAdolescente", name: "Cuidado de enfermería al niño y adolescente", prereq: ["cuidadoMujerNinoFamilia", "farmaco4"], unlocks: ["gestionServicios"] },
    { id: "electiva4", name: "Electiva", prereq: [], unlocks: [] },
    { id: "farmaco5", name: "Farmacología 5", prereq: ["farmaco4"], unlocks: ["gestionServicios"] },
    { id: "programasEducacion", name: "Programas de educación en enfermería", prereq: [], unlocks: ["gestionServicios"] },
    { id: "proyecto2", name: "Proyecto de grado 2", prereq: ["proyecto1"], unlocks: [] },
  ],
  "OCTAVO SEMESTRE": [
    { id: "electiva5", name: "Electiva", prereq: [], unlocks: [] },
    { id: "gestionServicios", name: "Gestión del cuidado de enfermería y de los servicios de salud", prereq: ["adminCuidado", "cuidadoNinoAdolescente", "farmaco5", "programasEducacion"], unlocks: [] },
  ],
};

// Estado en memoria (aprobadas)
let approved = new Set();

// Construir mapa inverso de desbloqueos para mostrar dependencias
const unlockMap = new Map(); // id -> [ids que dependen de él]
function buildUnlockMap() {
  unlockMap.clear();
  for (const sem of Object.values(curriculum)) {
    for (const c of sem) {
      if (!unlockMap.has(c.id)) unlockMap.set(c.id, []);
      for (const u of c.unlocks || []) {
        if (!unlockMap.has(c.id)) unlockMap.set(c.id, []);
        unlockMap.get(c.id).push(u);
      }
    }
  }
}
buildUnlockMap();

// Utilidades de estado
function isAvailable(course) {
  // Disponible si todas sus prerrequisitos están aprobadas
  return (course.prereq || []).every(p => approved.has(p));
}
function getState(course) {
  if (approved.has(course.id)) return "ok";
  return isAvailable(course) ? "available" : "locked";
}

// Render
function renderGrid() {
  const root = document.getElementById("gridRoot");
  root.innerHTML = "";

  for (const [semesterName, courses] of Object.entries(curriculum)) {
    const semEl = document.createElement("section");
    semEl.className = "semester";
    semEl.innerHTML = `
      <h3>${semesterName}</h3>
      <div class="course-list"></div>
    `;
    const listEl = semEl.querySelector(".course-list");

    courses.forEach(course => {
      const state = getState(course);
      const prereqNames = (course.prereq || []).map(id => findCourseName(id));
      const unlockNames = (course.unlocks || []).map(id => findCourseName(id));

      const card = document.createElement("article");
      card.className = "course-card";
      card.dataset.id = course.id;

      const stateLabel = state === "ok" ? "Aprobada" : state === "available" ? "Disponible" : "Bloqueada";
      const stateClass = state === "ok" ? "state-ok" : state === "available" ? "state-available" : "state-locked";

      card.innerHTML = `
        <div class="course-header">
          <span class="course-title">${course.name}</span>
          <span class="course-state">
            <span class="state-pill ${stateClass}">${stateLabel}</span>
          </span>
        </div>
        <div class="course-meta">
          <div class="meta-row">
            <span class="meta-label">Prerrequisitos:</span>
            ${prereqNames.length ? prereqNames.map(n => `<span>${n}</span>`).join(", ") : "<span>Ninguno</span>"}
          </div>
          <div class="meta-row">
            <span class="meta-label">Desbloquea:</span>
            ${unlockNames.length ? unlockNames.map(n => `<span>${n}</span>`).join(", ") : "<span>Ninguna</span>"}
          </div>
        </div>
        <button class="approve-btn" ${state === "locked" ? "disabled" : ""}>
          ${approved.has(course.id) ? "Desaprobar" : "Aprobar"}
        </button>
      `;

      const btn = card.querySelector(".approve-btn");
      btn.addEventListener("click", () => toggleApprove(course.id));

      listEl.appendChild(card);
    });

    root.appendChild(semEl);
  }
}

function findCourseName(id) {
  for (const sem of Object.values(curriculum)) {
    for (const c of sem) {
      if (c.id === id) return c.name;
    }
  }
  return id;
}

// Lógica de aprobación con consistencia de dependencias
function toggleApprove(courseId) {
  // Si está aprobada, permitir desaprobar siempre
  if (approved.has(courseId)) {
    approved.delete(courseId);
    // Al desaprobar, cualquier materia que dependía de esta podría quedar bloqueada
    renderGrid();
    persist();
    return;
  }

  // Intento de aprobar: validar que esté disponible (todos sus prerrequisitos aprobados)
  const course = getCourseById(courseId);
  if (!course) return;

  if (!isAvailable(course)) {
    alert("Esta materia aún está bloqueada. Debes aprobar todas sus prerrequisitos.");
    return;
  }

  // Aprobación
  approved.add(courseId);
  renderGrid();
  persist();
}

function getCourseById(id) {
  for (const sem of Object.values(curriculum)) {
    for (const c of sem) {
      if (c.id === id) return c;
    }
  }
  return null;
}

// Persistencia simple en localStorage
function persist() {
  try {
    localStorage.setItem("malla.approved", JSON.stringify([...approved]));
  } catch {}
}
function restore() {
  try {
    const raw = localStorage.getItem("malla.approved");
    if (raw) {
      const arr = JSON.parse(raw);
      approved = new Set(arr);
    }
  } catch {}
}

// Exportar/Importar progreso
function exportProgress() {
  const data = {
    approved: [...approved],
    timestamp: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "progreso-malla.json";
  a.click();
  URL.revokeObjectURL(url);
}
function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (Array.isArray(data.approved)) {
        approved = new Set(data.approved);
        renderGrid();
        persist();
      } else {
        alert("Archivo inválido.");
      }
    } catch {
      alert("No se pudo leer el archivo.");
    }
  };
  reader.readAsText(file);
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  restore();
  renderGrid();

  const btnReset = document.getElementById("btnReset");
  btnReset.addEventListener("click", () => {
    if (confirm("¿Reiniciar todos los estados?")) {
      approved.clear();
      renderGrid();
      persist();
    }
  });

  const btnExport = document.getElementById("btnExport");
  btnExport.addEventListener("click", exportProgress);

  const btnImport = document.getElementById("btnImport");
  const importInput = document.getElementById("importInput");
  btnImport.addEventListener("click", () => importInput.click());
  importInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (file) importProgress(file);
    importInput.value = "";
  });
});
