// const nome = "Gustavo"; // declara a variável nome  

// try { // tenta realizar o bloco de código abaixo
//     nome = "Oliveira";
// } catch (err) { // captura o erro e manda para a variáverl (err)
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro:" + err); // manda esse texto para o console (mensagem de erro)
// } 

// console.log("teste");

// nome = "Gustavo"; //quando vc tenta executar um codigo ilegal do java script ele interrompe ali na hora ele n deixa continuar sua execução ali no script 

// console.log("teste2");    

function fazerLogin() { // declara a função fazerLogin e abre o bloco de código
    let usuario = document.getElementById("txtLogin"); // declara a variável temporária recebendo o elemento txtLogin
    let senha = document.getElementById("txtSenha"); // declara a variável temporária recebendo o elemento txtSenha
    try { // tenta realizar o bloco de código abaixo
        if (usuario.value !== "usuario123"){ // if ta verificando se é diferente da variavel senha. // quando tem uma exclamação no operador de comparação significa que é diferente e não igual
            usuario.focus(); //
            throw new Error("Erro: Usuário Inválido."); // cria um novo erro genérico
        } // encerra o bloco de código do if do usuário
        if (senha.value !== "senha123") { // if ta verificando se é diferente da variavel senha
            senha.focus(); // 
            throw new Error("Erro: Senha incorreta."); // cria um novo erro genérico
        
        } // encerra o bloco de código
        console.log("Login realizado com sucesso."); // mensagem enviada no console
    } catch (erro){ // encerramento do bloco de código do try e o inicio do bloco do catch
        console.error(erro.message); // mensagem enviada no console
      } // fim do bloco de código do catch
} // fim do bloco de código da função fazerLogin