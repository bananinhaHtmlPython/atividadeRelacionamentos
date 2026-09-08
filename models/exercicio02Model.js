class mesa{
    constructor(numero, capacidade, localizacao){
        this.numero = numero;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
    }
}
class cliente{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}
class funcionário{
    constructor(nome, cpf, matricula){
        this.nome = nome; 
        this.cpf= cpf;
        this.matricula= matricula;
    }
}
class pedido{
    constructor(numero, data, valorTotal){
        
    }
}

class itemPedido{
    constructor(quantidade, preco){
        this.quantidade = quantidade;
        this.preco = preco;
    }
}