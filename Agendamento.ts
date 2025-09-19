const prompt = require ("prompt-sync")();


interface agendamentos {
    id: string;
    paciente: string;
    data: string;

}
let agenda = []

const agendamentosComInterface: agendamentos[] = 

function agendarConsulta (agendamentos[]) {
agenda.push({ID: id, nome: paciente, Data: data})
console.log (`Consulta agendada para ${data} em nome de ${paciente}`)

}

function cancelarConsulta (agendamentos[]) {
let index = agendamentosComInterface.indexOf(agenda);    

}

function listarConsultas() {
    console.log (`Agendamentos`);
    console.log (`Paciente: ${nome} dia ${data}`);
}

function listarPorStatus()

console.log (`Agendamento médico`);
function menuPrincipal () {
    while (true){
    console.log (`Menu Principal`);
    console.log (`1.Agendar consulta`);
    console.log (`2.Listar consultas`);
    console.log (`3.Cancelar consulta`);
let opcao = prompt (`Escolha uma opçao`);

if (opcao === '1') {
    let opcaoAgendarConsulta = prompt (`Digite o ID do paciente`);
    const nome = parseFloat (prompt (`Ǹome: `));
    const data = parseFloat (prompt(`Data: `));
}
else if (opcao === '2') {
    listarConsultas ();

}
else if (opcao === '3') {
    cancelarConsulta();
}
}
}

menuPrincipal ();
