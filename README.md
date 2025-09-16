# comandos git 

- npm init = cria o package json para iniciar o projeto node
- npm install = instala todos os pacotes do package json 
- npm i nome_pacote = instala um pacote especifico
- npm run nome_do_script // executa um script do package json (apenas o start pode ignorar o comando run)

o que siginica npm? 
node package manager (encontarr e gerenciar pacotes)

// configurando usuário e email do git na máquina

- git config --global user.name ""
- git config --global user.email  "" 


- git init = inicia o git em uma pasta 
- git remote add origin _url_do_github //  vinvula um proojeto local em 'um' repositório do github


//
só existe um comando que pode omitir o npm run * nome do script *(npm start)

como roda script no package json (npm run e nome do script)
//


*/o que é node /*
é um ambiente ou runtime que executa nossos scripts no terminal ou máquina/localhost/servidor 

javascript: linguagem de programacao
o que é node: ambiente onde o javascript pode rodar (em qualquer sistema operacional/ambiente)
em que ambiente está sendo criado o projeto? node 



- get = obter dados da api
- post = inserir dados no sistema
- delete = deletar
- patch = alterar dados parciais 
- put = 

# tópicos importantes 

- O que é framework = conjunto de ferramentas para resolver problemas ou criaa solução

- javascript = linguagem de programação 

- node js = ambiente run time que roda javascript (terminal, servidor, etc... sendo crossplataforma, rodando em mais sistemas operacionais)

- o que é http = hypertext transfer protocol (protocolo que cuida/estabelece/determina das requisicoes e respostas da web)

- o que é express = framework para criação de API

- o que é API = conjunto de rotas (posts, gets, etc..)para dar uma resposta ao usuário 

- Quais são os metodos http utiliados na API = get (pegar dados da api), post(criar dados), put (editar dados), delete (deletar dados) e patch (editar parcialmente alguns dados)

- o que é npm = node package manager (pacote de manutenção node) 


# como muda o formato de importação/exportação de required para import
- adicionar no package.json a propriedade "type": "module"


# watch
- o watch nao resolve erro no servidor 
- watch (parametro para rodar um js em modo dev, que permitir rodar novamente  quando algum arquivo é alterado)

# sintaxe básica de uma rota da API 

app.post('/produto, (req, res) => {
    res.json({message: 'Criado com sucesso!'})
})

- método criar ou inserir: post
- rota ou endereço: /produto
- tipo de resposta: json 


# padrão de projeto 

- forma de organizar o projeto de forma conhecida pelos desenvolvedores (middleware, mvc)


- oque é npm
- oque é node.js
                      