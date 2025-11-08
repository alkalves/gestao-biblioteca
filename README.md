📋 Lista de User Stories – Sistema de Gestão de Biblioteca

1️⃣ Funcionalidade: Registro de Bibliotecário

User Story:
Como bibliotecário,
eu quero me registrar no sistema,
para que eu possa acessar e gerenciar o acervo da biblioteca com segurança.

Regras de Negócio:
- Não pode haver duplicidade de e-mail entre bibliotecários.
- Todos os campos obrigatórios (nome, e-mail, senha) devem ser validados.


2️⃣ Funcionalidade: Login de Bibliotecário

User Story:
Como bibliotecário,
eu quero fazer login no sistema,
para que eu possa acessar as funcionalidades restritas da biblioteca.

Regras de Negócio:
- O login só é permitido com e-mail e senha válidos.
- O sistema deve gerar um token JWT após autenticação bem-sucedida.


3️⃣ Funcionalidade: Registro de Autor

User Story:
Como bibliotecário autenticado,
eu quero cadastrar autores,
para que eu possa associá-los aos livros do acervo.

Regras de Negócio:
- Somente usuários autenticados podem registrar autores.
- Não pode haver autores duplicados (mesmo nome e nacionalidade).
- Campos obrigatórios: nome e nacionalidade.


4️⃣ Funcionalidade: Registro de Livro

User Story:
Como bibliotecário autenticado,
eu quero registrar livros,
para que eu possa manter o acervo atualizado e organizado.

Regras de Negócio:
- Somente usuários autenticados podem cadastrar livros.
- Todo livro deve estar associado a um autor válido.
- O campo gênero é obrigatório.


5️⃣ Funcionalidade: Registro de Leitor

User Story:
Como bibliotecário autenticado,
eu quero cadastrar leitores,
para que eu possa controlar quem realiza empréstimos de livros.

Regras de Negócio:
- Somente usuários autenticados podem cadastrar leitores.
- Não pode haver duplicidade de e-mail entre leitores.
- Campos obrigatórios: nome, e-mail e telefone.


6️⃣ Funcionalidade: Registro de Empréstimo de Livro

User Story:
Como bibliotecário autenticado,
eu quero registrar empréstimos de livros para leitores,
para que eu possa controlar quais livros estão emprestados e suas respectivas devoluções.

Regras de Negócio:
- Um livro só pode ser emprestado se estiver disponível.
- O empréstimo deve registrar o leitor e o livro associados.
- Ao emprestar um livro, seu status disponível deve ser alterado para false.
- Ao registrar a devolução, o status do livro deve voltar a true e o empréstimo deve ser marcado como "devolvido".

Campos obrigatórios: livro_id, leitor_id, data_emprestimo, data_devolucao.