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

## Rodar o projeto: passo-a-passo
- Instalar o node (caso não tenha). Sempre fazer download de versão LTS, pois é a última versão estável
- Para verificar se está tudo certo com o node:
1. Abrir prompt de comando (CMD)
2. Digitar: `node -v`
3. Se tudo der certo, deverá aparecer a versão do node instalado:
```
C:\Users\User>node -v
v18.16.0
```
- Feito isso vá até a pasta do seu projeto
- Agora para iniciar o gerenciamento de pacotes. Iremos iniciar com o comando: `npm init -y` que irá criar um arquivo "package.json"
- Também, instalar o gulp-cli globalmente: `npm install gulp-cli -g`
- Instalar o jquery através do "npm": `npm install jquery`. Assim o jquery já é adicionado como dependencia do projeto. E criou uma pasta de "node_modules", que são os módulos que estão sendo instalados para o projeto.
- O mesmo caso você precise do bootstrap: `npm install bootstrap`
- Caso você precise baixar o projeto em outra maquina, basta rodar o comando: `npm install`, que ele lerá o arquivo "package.json" e irá baixar todas as dependencias daquele projeto
- Para usar o gulp bastar criar o arquivo "gulpfile.js"
- Se você estiver trabalhando com o gulp pela primeira vez você deverá instalar ou adicionar diretamente no "package.json" o gulp como um "devDependencies". Para instalar basta adicionar o comando:`npm install gulp --save-dev`. Se for adicionar no arquivo basta inserir (o VSCode já da a dica de qual versão deve ser utilizada, no meu caso foi o 4.0.2, lembre-se de colocar um acento agudo antes da versão, que siginifica que irá pegar a versão recomendada ou superior a ela):
  ```
  "devDependencies": {
    "gulp": "^4.0.2"
  }
  ```
- Rode novamente o `npm install` para reprocessar o package-lock.json e o node_modules
- Rodar `npm cache clean --force` para limpar o cache
- Rodar `git rm -r --cached dist` retirar do cache
- Rodar http-server ./dist