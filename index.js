const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
      respostas: [
        "function = minhaFuncao()",
        "function: minhaFuncao()",
        "function minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Remove um caractere de uma string",
        "Retorna o caractere especificado de uma string",
        "Concatena duas strings",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'forEach()' faz em um array em JavaScript?",
      respostas: [
        "Adiciona um elemento ao final do array",
        "Executa uma função para cada elemento do array",
        "Remove o último elemento do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
      respostas: [
        "10",
        "7",
        "'35'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para converter um objeto JavaScript em uma string JSON?",
      respostas: [
        "JSON.parse()",
        "stringify()",
        "toJSON()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de OU lógico",
        "Operador de E lógico",
        "Operador de negação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      respostas: [
        "ceil()",
        "round()",
        "floor()",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true or false
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }