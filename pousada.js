document.addEventListener('DOMContentLoaded', (event) => {
    // Captura o formulário de reservas
    const reservaForm = document.getElementById("reservaForm");

    // Adiciona um evento de submit ao formulário
    reservaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os dados das entradas
        const dataEntrada = document.getElementById("dataEntrada").value;
        const dataSaida = document.getElementById("dataSaida").value;

        // Validação simples para verificar se as datas foram preenchidas
        if (dataEntrada && dataSaida) {
            // Aqui você pode adicionar validações adicionais de data se necessário
            
            // Exibe um alerta com as datas de reserva
            alert(`Reserva feita de ${dataEntrada} até ${dataSaida}`);
        } else {
            alert("Por favor, preencha ambas as datas antes de enviar.");
        }
    });
});