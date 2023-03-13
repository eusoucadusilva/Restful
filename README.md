## API, REST e RESTFUL

## API

Acronimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabalecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação

- Reponsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias
- Intermediador para troca de informações

## REST
um acrônimo para REpresentational State Transfer (Transferência de Estado Representativo)

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo HTTP.

O Rest, delimita algumas obrigações nessas transferências de dados.

Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

- _Uniform Interface_: Todas as solicitações de API para o mesmo recurso devem ter a mesma aparência, independentemente da origem da solicitação.

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição(REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembra que o cliente foi autenticado na requisição anterior.

- _Cacheable_: As repostas para uma requisição, deverão ser explicitas ao dizer se aquela requisção, pode ou não ser cacheada pelo cliente.


- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente;


### fontes de pesquisa:
- Blog IBM: https://www.ibm.com/topics/rest-apis
- Rocketseat: https://www.youtube.com/watch?v=ghTrp1x_1As
