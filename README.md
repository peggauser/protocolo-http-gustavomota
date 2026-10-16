# protocolo-http-gustavomota
Exerecício para explicar o funcionamento do protocolo HTTP: o ciclo requisição/resposta, os métodos, os códigos de status e os cabeçalhos.

1. Cliente e servidor.
Como ocorre uma comunicação Cliente x Servidor?

O cliente é quem solicita uma informação ao servidor, geralmente através de um navegador, o servidor analísa esa solicitação (requisição) e devolve uma resposta para essa soicitação (resposta).
Essa comunicação é feita por etapas e irei explicar cada uma delas abaixo.

1.1 Primeira etapa - DNS: Quando o usuário digita um domínio (nome do site) o navegador precisa procurar o endereço de IP que corresponde ao domínio digitado, essa busca ocorre nessa etapa.

1.2 Segunda etapa - Conexão: Nessa etapa ocorre justamente o que o nome dela indica, é quando o navegador (cliente) estabele uma conexão com o servidor.

1.3 Terceira etapa - Requisição: Nessa parte é quando o cliente (navegador) envia, após a conexão com o servidor estar estabelecida, uma requisição HTTP solicitando o que ele deseja, um exemplo é quando acessamos um site, o navegador irá enviar uma requisição ao servidor utilizando o método GET, esse é um dos métodos mais usados, ele é um método que serve para solicitar informações de um servidor.

1.4 Quarta etapa - Resposta: Novamente como o prórprio nome informa, essa é a etapa onde o servidor vai analisar a requisição que o cliente (navegador) encaminhou e irá retornar uma resposta ao navegador (cliente), uma resposta HTTP.

1.5 Quinta etapa - Exibição: Essa é a última etapa de um processo de comunicação entre cliente e servidor, é quando o navegador (cliente) vai interpretar a resposta do servidor para sua requisição e exibir essa resposta para o usuário, essa resposta será exibida como HTML e CSS.

2. Anatomia da requisição e da resposta linha inicial, cabeçalhos e corpo.

2.1 Toda requisição e resposta contém 3 linhas fundamentais para que funcione corretamente, são elas a linha inicial, cabeçalhos e o corpo. Irei deixar abaixos alguns exemplos de cada uma dessas linhas, exmplos retirados do servidor criado por mim para esse exercício.

3. Tipos de métodos utilizados na comunicação cliente x servidor.

3.1 Método GET: É utilizado para solicitar informações, consultar algo no servidor, sem alterar nada dentro do servidor, apenas para consulta.

3.2 Método POST: O nome já indica bem o seu significado, esse método é utilizado para enviar informações ao servidor, enviar informações que o usuário deseja que fiquem no servidor.

3.3 Método PUT: Já esse método é utilizado para substiruir informações que estejam no servidor, com ele você consegue trocar informações antigas, por novas.

3.4 Método PATCH: Ele é bem parecido com o método anterior, o PUT, o PATCH também é usado para substituir informações dentro do servidor, mas ele tem uma diferença.
O PUT substitui o recurso inteiro, todas as informações que estejam no mesmo pacote precisam ser substituídas. Já o PATCH permite que você substitua informações parcialmente, como por exemplo ao atualizar um produto: com o PUT você precisaria substituir todas as informações do produto, como nome, preço, descrição, foto, mas com o PATCH você tem a possibilidade de substituit apenas uma ou algumas delas, como somente a foto.

3.5 Método DELETE: Mais uma vez um termo cujo nome já explica bem sua função, esse método é utilizado para deleter permanentemente um recurso de dentro do servidor.

3.6 O que significa um método ser seguro e idempotente?
Como solicitado, irei explicar um pouco sobre esses dois termos utilizados para caracterizar um método.

3.7 Método Seguro: Basicamente significa que é um método que não vai solicitar nenhuma alteração no servidor, somente consultar e solicitar informações ao mesmo.

3.8 Método Idempotente: Esse método tem relação com quantidade, ele significa que não importa quantas vezes você use esse método indempotente, isso não irá afetar o resultado final, você pode usar ele 100x ou mais, ainda vai retornar o mesmo resultado final sem ocasionar em erros durante o processo. 

4. Códigos de Status HTTP. 
4.1 Irei listar e explicar alguns dos códigos utilizados para retornar status HTTPS abaixo.

Código 200: Significa que a requisição foi realizada com sucesso, página acessada com sucesso (OK).

Código 201: Um novo recurso foi criado com sucesso.

Código 301: Significa que o que você está buscando foi movido para outro endereço, simboliza uma alteração do recurso, uma alteração do link. Essa alteração foi permanente.

Código 302: É parecido com o 301, mas de forma temporário. Significa que o recurso que você busca foi movido temporariamente para outro endereço.

Código 304: Significa que o servidor (recurso) não foi atualizado ou alterado desde a última vez que você entrou.

Código 400: Esse código que dizer que o recurso não está conseguindo ser processado, mas por conta de um erro na requisição.

Código 401: Bem parecido com o 403, o código 401 simboliza que o cliente está tentando acessar ou solicitar algo, mas sem estar com uma autenticação válida (exemplo: não está logado).

Código 403: Serve como um "não autorizado", você preencheu uma autenticação válida para acessar o que deseja, mas o 403 mostra que o servidor está recusando o acesso, mesmo com o cliente autenticado, parecido com o 401.

Código 404: Possivelmente o código mais famoso existente, simboliza que a página que você está buscando não foi encontrada, mas não especifica o motivo, talvez erro de digitação.

Código 405: Significa que o recurso existente, foi encontrado, mas que você está usando o método errado na requisição.

Código 500: Esse código é um pouco mais curioso, ele representa um erro interno. Requisição correta, método correto, mas por algum motivo houve um erro interno no servidor que não conseguiu processar a requisição.

4.2 Agora que eu já expliquei sobres os códigos, da para perceber um padrão, vou deixar ele mais claro abaixo.
Como á para perceber, os códigos que começam com o mesmo número (são da mesma família) costumam significar coisas parecidas, ou do mesmo meio pelo menos.

1xx: Códigos informativos, servem para informar apenas, indicam que a requisição ainda está acontecendo.

2xx: Códigos de sucesso, simbolizam que a conexão já acabou e que foi finalizada com sucesso.

3xx: Códigos sobre redirecionamento, significam que o que você está buscando, não se encontra mais lá, seja algo permanente ou não.

4xx: Indica um erro, mas um erro por parte do cliente. Talvez um erro de digitação ou algo assim, mas um erro por parte do cliente, na requisição.

5xx: Também simboliza um erro, mas dessa vez um erro por parte do servidor.

5. Cabeçalhos HTTP.
São basicamente informação adicionais que são enviadas nas requisições do cliente e nas respostas do servidor. Servem para informar características, seja de como será feita a comunicação, dados do que será enviado e recebido entre outras características.

5.1 Abaixo irei falar um pouco sobre algumas características que são presentes em cabeçalhos.

5.2 Content-Type: Ele informa o tipo do conteúdo que será enviado, ele pode dizer que o conteúdo será em HTML, ou CSS ou até mesmo um outro tipo.

5.3 Content-Length: Serve para avisar qual será o tamanho do conteúdo, ele informa em bytes.

5.4 Location: O nome já entrega um pouco do seu significado, ele serve para infomar o endereço de um recurso, por exemplo, em um código 301, o servidor pode utilizar o que está no Location para ir até a página nova.

5.5 Allow: Esse aqui deixa claro quais métodos são permitidos nessa comunicação, quais métodos poderão ser usados para esse recurso.

5.6 Cache-Control: Tem relação com a memória cache, esse cabeçalho vai definir regras sobre o armazenamento de um conteúdo na memória cache (temporária), por exemplo quanto tempo esse conteúdo poderá ser armazenado nela.

5.7 User-Agent: O nome também já entrega um pouco, esse caso aqui informa qual programa está realizando a requisição, no caso qual navegador está sendo usado por exemplo.

5.8 Accept: Esse aqui é um pouco parecido com o Content-Type, mas o Content-Type é usado para informar qual conteúdo está sendo enviado, o Accept informa qual tipo de conteúdo o cliente aceita receber.

6. HTTP é Stateless, ele não se lembra de requisições anteriores.
O HTTP trata cada requisição de maneira individual e sem conexão com as anteriores ou as próximas, cada requisição é tratada de forma independente. Mas, existem algumas maneiras de "fazer ele se lembrar", como o uso de cookies por exemplo.

7. Qual a diferença entre HTTP e HTTPS?
Confesso que fiquei um tempo com essa dúvida, mas a resposta na verdade é bem simples. HTTPS é nada mais nada menos que o HTTP de forma mais segura.
O HTTP não possui segurança, não possui nenhuma criptografia, os dados enviados em requisições e em respostar ficam vuneráveis, mas no HTTPS isso não ocorre, nele os dados são criptografados antes de serem enviados ao cliente ou ao servidor.
