# GULP

## Kit de ferramentas de automação de tarefas baseadas em JavaScript
- Otimizar o fluxo de trabalho.
- Organizar e orquestrar arquivos.
- Ajuda a evitar trabalhos lentos e repetitivos.
- Criar pipelines.
- Você cria as configurações necessárias.
- Tarefas escritas em JS ou plugins.
- Aplica as transformaçoes em arquivos ainda na memória (antes de gravar no disco).

## Porquê automatizar?
- Melhor organização.
- Evitar repetição de tarefas.
- Mais tempo para focar no mais importante: regras de negócio e experiência do usuário.

## Principais recursos
- Minificação de arquivos.
- Otimização de imagens.
- Mescla de arquivos de diferentes origens.

## Transpilação
- É o processo de transformação (conversão) de escrita em outras linguagens para o JavaScript. Você poderá escrever em TypeScript ou Babel que o código irá converter.
- Todo o processo é executado a partir node.js e gulp-cli (linha de comando).

## Global x Local
- A instalação do node.js é global.
- Já o gulp e seus plugins são instalados localmente (em cada projeto).
  
## Gerenciadores de pacotes
- NPM: Node Package Manager.
- Utiliza o node.js.
- Permite a configuração rápida e fácil de ambientes e plugins Node.

## Instalando o Gulp
- Rodar o Node.js
- Instalar o gulp-cli (Command Line Interface) globalmente: npm install gulp-cli -g
- Agora na pasta do projeto, adicionar o npm: npm init -y
- Criar o gulpfile.js

## Trabalhando com Gulp
- Baseado em funções: tasks
- Organização do projeto
- Otimização de arquivos
- Mesclagem e Minificação de CSS e JS
- Diminuição do tamanho (bytes) de imagens

## Rodar o projeto
- Executar o comando:
```
npm install
```