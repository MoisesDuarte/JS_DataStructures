class No {
    constructor(dado, prox = null) {
        this.dado = dado 
        this.prox = prox 
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null 
        this.tamanho = 0 
    }

    // Inserir primeiro nó
    inserirPrimeiro(dado) {
        this.cabeca = new No(dado, this.cabeca) 
        this.tamanho++ 
    }

    // Inserir último node
    inserirUltimo(dado) {
        let novo_no = new No(dado) 
        let atual 

        // Se vazio, fazer cabeça
        if (!this.cabeca) {
            this.cabeca = novo_no 
        } else {
            atual = this.cabeca 

            while(atual.prox) {
                atual = atual.prox              
            }

            atual.prox = novo_no 
        }

        this.tamanho++ 
    }

    // Inserir em índice
    inserirEm(dado, indice) {
        // Se indice está fora de intervalo válido 
        if (indice > 0 && indice > this.tamanho) {
            return 
        } 

        // Se primeiro indice
        if (indice === 0) {
            this.inserirPrimeiro(dado) 
            return 
        }
        
        const no = new No(dado) 
        let atual, anterior 

        // Definir atual como primeiro
        atual = this.cabeca 
        let contador = 0 

        while (contador < indice) {
            anterior = atual  // Nó antes de indice
            contador++ 
            atual = atual.prox  // Nó depois do indice
        }

        no.prox = atual 
        anterior.prox = no 
        
        this.tamanho++ 
    }

    // Buscar de índice
    buscarEm(indice) {
        let atual = this.cabeca 
        let contador = 0 

        while (atual) {
            if (contador == indice) {
                console.log(atual.dado) 
            }
            contador++ 
            atual = atual.prox 
        }      
        
        return null 
    }

    // Remover de índice
    removerEm(indice) {
        // Indice fora de intervalo válido
        if (indice > 0 && indice > this.tamanho) {
            return 
        }

        let atual = this.cabeca 
        let anterior 
        let contador = 0 

        // Remover primeiro
        if (indice === 0) {
            this.cabeca = atual.prox 
        } else {
            while (contador < indice) {
                contador++ 
                anterior = atual 
                atual = atual.prox 
            }

            anterior.prox = atual.prox 
        }

        this.tamanho-- 
    }

    // Limpar lista
    limparLista() {
        this.cabeca = null 
        this.tamanho = 0 
    }

    // Mostrar lista
    mostrarListaDados() {
        let atual = this.cabeca 

        while (atual) {
            console.log(atual.dado)
            atual = atual.prox 
        }
    }    
}

// Montando uma lista encadeada
const le = new ListaEncadeada() 

le.inserirPrimeiro(100) 
le.inserirPrimeiro(200) 
le.inserirPrimeiro(300) 
le.inserirUltimo(400) 

le.mostrarListaDados() 