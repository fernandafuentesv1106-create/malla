const subjects = [
  { id:"ingles1", name:"Inglés 1", requires:[] },
  { id:"ingles2", name:"Inglés 2", requires:["ingles1"] },
  { id:"ingles3", name:"Inglés 3", requires:["ingles2"] },
  { id:"ingles4", name:"Inglés 4", requires:["ingles3"] },

  { id:"metrologia", name:"Metrología", requires:[] },
  { id:"biologia", name:"Biología", requires:[] },
  { id:"morfologia", name:"Morfología", requires:[] },

  { id:"bioquimica", name:"Bioquímica", requires:["metrologia","biologia"] },
  { id:"fisiologia", name:"Fisiología", requires:["metrologia","morfologia"] },

  { id:"fundamentos", name:"Fundamentos del cuidado y gerontología",
    requires:["metrologia","biologia","morfologia","cuidado_comunitario"] },

  { id:"cuidado_comunitario", name:"Cuidado comunitario", requires:[] },

  { id:"microbiologia", name:"Microbiología", requires:["biologia","morfologia"] },
  { id:"semiologia", name:"Semiología", requires:["morfologia","fisiologia"] },

  { id:"adulto1", name:"Cuidado adulto I",
    requires:["bioquimica","fisiologia","fundamentos","microbiologia"] },

  { id:"farmaco1", name:"Farmacología I",
    requires:["bioquimica","fisiologia","microbiologia"] },

  { id:"adulto2", name:"Cuidado adulto II",
    requires:["adulto1","farmaco1","semiologia"] },

  { id:"salud_mental", name:"Salud mental y psiquiátrica",
    requires:["adulto1","farmaco1","semiologia"] },

  { id:"critico", name:"Situaciones críticas",
    requires:["adulto2","salud_mental","farmaco2","ingles4"] },

  { id:"farmaco2", name:"Farmacología II", requires:["farmaco1"] },
  { id:"farmaco3", name:"Farmacología III", requires:["farmaco2","ingles4"] },
  { id:"farmaco4", name:"Farmacología IV", requires:["farmaco3"] },
  { id:"farmaco5", name:"Farmacología V", requires:["farmaco4"] },

  { id:"mujer", name:"Cuidado mujer niño y familia",
    requires:["adulto1","critico","bioetica","salud_publica","invest_cuali"] },

  { id:"bioetica", name:"Bioética", requires:["administracion"] },
  { id:"administracion", name:"Administración del cuidado", requires:[] },

  { id:"invest_cuant", name:"Metodología cuantitativa", requires:[] },
  { id:"invest_cuali", name:"Metodología cualitativa", requires:["invest_cuant"] },
  { id:"invest_apl", name:"Investigación aplicada", requires:["invest_cuali"] },

  { id:"grado1", name:"Proyecto de grado I", requires:["invest_apl"] },
  { id:"grado2", name:"Proyecto de grado II", requires:["grado1"] },

  { id:"nino", name:"Niño y adolescente", requires:["mujer","farmaco4"] },
  { id:"gestion", name:"Gestión del cuidado",
    requires:["nino","farmaco5"] }
];

const approved = new Set();
const grid = document.getElementById("grid");

function canUnlock(subject) {
  return subject.requires.every(r => approved.has(r));
}

function render() {
  grid.innerHTML = "";
  subjects.forEach(s => {
    const div = document.createElement("div");
    div.classList.add("subject");

    if (approved.has(s.id)) {
      div.classList.add("approved");
    } else if (canUnlock(s)) {
      div.classList.add("unlocked");
      div.onclick = () => {
        approved.add(s.id);
        render();
      };
    } else {
      div.classList.add("locked");
    }

    div.textContent = s.name;
    grid.appendChild(div);
  });
}

render();
