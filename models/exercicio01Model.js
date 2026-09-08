
class usuario{
    constructor(nome, cpf, matriculaUsuario){
        this.nome = nome;
        this.cpf = cpf;
        this.matriculaUsuario = matriculaUsuario;
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){

    }
    deletar(){
        
    }
}

class funcionario extends usuario{
    constructor(nome, cpf, matriculaFuncional, cargo){
        super(nome, cpf);
        this.matriculaFuncional = matriculaFuncional
        this.cargo = cargo
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){
        
    }
    deletar(){
        
    }
}

class livro{
    constructor(titulo, isbn, anoFabricacao){
        this.titulo = titulo;
        this.isbn = isbn;
        this.anoFabricacao = anoFabricacao;
    }
    //crud
    cadastrar(){

    }
    pesquisar(){

    }
    atualizar(){

    }
    deletar(){

    }
}

//Os objetos são muito genéricos, por favor não reparar nas características, mas veja se tem algum problema neles ou não
const amaLivros = new usuario('José Kennedy Romário da Silva', 12345678910, 1234);
const bibliotecaria = new funcionario('Clarice Lispector de Oliveira', 10987654321, 5678, 'Bibliotecaria');
const viniBook = new livro('EscolaTech, a história por trás dos códigos e da computação, 1ª edição', 9781234567885, 2026);