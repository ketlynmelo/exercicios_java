    function exercicio1(){
     let soma = 0;
     let continuar = true;

     while(continuar){
        let numero = parseFloat(prompt("Digite um número (Ou zero para encerrar): "));

        //modelo antigo:soma = soma + numero;
        //modelo java:soma += numero;

        if(isNaN(numero)){
            alert("Por favor, digite um número válido!");

        }else{
            soma += numero;
        }

        continuar = confirm("Deseja adicionar mais um número?");

    }
    alert("A soma dos números é " + soma);

}

//exercicio1();

function exercicio2(){

    console.log("Contagem regressiva para o lançamento!")
    for(let i = 10; i >=0; i-- ) {
    console.log(i);

}
{

    console.log("Lançamento realizado!")

}
}

// exercicio2();

function exercicio3(){
    
    function calculo_mensal(){
    
    let ganho_total = 0;
    let perda_total = 0;
    let mes = 1;
    let saldo_total = 0;

    while(mes<=2){
        let bruto = parseFloat(prompt("Digite qual foi o ganho bruto do mês " + mes ));

        if(isNaN(bruto)){
            alert("Por favor, digite um número válido!");

        }else{
            ganho_total+=bruto;
        }
        
        let gasto = parseFloat(prompt("Digite qual foi o gasto do mês " + mes ));

        if(isNaN(gasto)){
            alert("Por favor, digite um número válido!");

        }else{
           perda_total+=gasto;
        }
        
        mes++;
    } 
        alert("Seu bruto anual foi de : " + ganho_total);
        alert("Seu gasto anual foi de: " + perda_total); 

        saldo_total= ganho_total-perda_total;

        alert("Seu saldo financeiro foi de: " + saldo_total);
         
        if(saldo_total>0){
            alert("Você lucrou esse ano!")

        } else{
            alert("Você teve prejuízo esse ano!")
        }
    }
 
      calculo_mensal();

}

// exercicio3();
