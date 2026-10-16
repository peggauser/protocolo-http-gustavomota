# protocolo-http-gustavomota
Exerecício para explicar o funcionamento do protocolo HTTP: o ciclo requisição/resposta, os métodos, os códigos de status e os cabeçalhos.

Cliente e servidor.
Como ocorre uma comunicação Cliente x Servidor?

O cliente é quem solicita uma informação ao servidor, geralmente através de um navegador, o servidor analísa esa solicitação (requisição) e devolve uma resposta para essa soicitação (resposta).
Essa comunicação é feita por etapas e irei explicar cada uma delas abaixo.

Primeira etapa - DNS: Quando o usuário digita um domínio (nome do site) o navegador precisa procurar o endereço de IP que corresponde ao domínio digitado, essa busca ocorre nessa etapa.

Segunda etapa - Conexão: Nessa etapa ocorre justamente o que o nome dela indica, é quando o navegador (cliente) estabele uma conexão com o servidor.

Terceira etapa - Requisição: Nessa parte é quando o cliente (navegador) envia, após a conexão com o servidor estar estabelecida, uma requisição HTTP solicitando o que ele deseja, um exemplo é quando acessamos um site, o navegador irá enviar uma requisição ao servidor utilizando o método GET, esse é um dos métodos mais usados, ele é um método que serve para solicitar informações de um servidor.

Quarta etapa - Resposta: Novamente como o prórprio nome informa, essa é a etapa onde o servidor vai analisar a requisição que o cliente (navegador) encaminhou e irá retornar uma resposta ao navegador (cliente), uma resposta HTTP.

Quinta etapa - Exibição: Essa é a última etapa de um processo de comunicação entre cliente e servidor, é quando o navegador (cliente) vai interpretar a resposta do servidor para sua requisição e exibir essa resposta para o usuário, essa resposta será exibida como HTML e CSS.

====================

Anatomia da requisição e da resposta
Toda requisição e resposta contém 3 linhas fundamentais para que funcione corretamente, são elas a linha inicial, cabeçalhos e o corpo. Irei deixar abaixos alguns exemplos de cada uma dessas linhas, exmplos retirados do servidor criado por mim para esse exercício.

====================

Tipos de métodos utilizados na comunicação cliente x servidor.
Método GET: É utilizado para solicitar informações, consultar algo no servidor, sem alterar nada dentro do servidor, apenas para consulta.

Método POST: O nome já indica bem o seu significado, esse método é utilizado para enviar informações ao servidor, enviar informações que o usuário deseja que fiquem no servidor.

Método PUT: Já esse método é utilizado para substiruir informações que estejam no servidor, com ele você consegue trocar informações antigas, por novas.

Método PATCH: Ele é bem parecido com o método anterior, o PUT, o PATCH também é usado para substituir informações dentro do servidor, mas ele tem uma diferença.
O PUT substitui o recurso inteiro, todas as informações que estejam no mesmo pacote precisam ser substituídas. Já o PATCH permite que você substitua informações parcialmente, como por exemplo ao atualizar um produto: com o PUT você precisaria substituir todas as informações do produto, como nome, preço, descrição, foto, mas com o PATCH você tem a possibilidade de substituit apenas uma ou algumas delas, como somente a foto.

Método DELETE: Mais uma vez um termo cujo nome já explica bem sua função, esse método é utilizado para deleter permanentemente um recurso de dentro do servidor.

O que significa um método ser seguro e idempotente?
Como solicitado, irei explicar um pouco sobre esses dois termos utilizados para caracterizar um método.

Método Seguro: Basicamente significa que é um método que não vai solicitar nenhuma alteração no servidor, somente consultar e solicitar informações ao mesmo.

Método Idempotente: Esse método tem relação com quantidade, ele significa que não importa quantas vezes você use esse método indempotente, isso não irá afetar o resultado final, você pode usar ele 100x ou mais, ainda vai retornar o mesmo resultado final sem ocasionar em erros durante o processo. 

====================

a
