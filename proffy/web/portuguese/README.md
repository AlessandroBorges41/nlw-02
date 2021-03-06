# Nome do produto
> Proffy é uma aplicação destinada a profissionais de educação, na qual é possivel realizar o agendamento de aulas.

Neste projeto é possível o profissional de educação criar um calendário com os horários possiveis para agendamento de aulas.
Além do agendamento é possivel ter uma descrição do conteúno que é ministrado pelo profissional como também o valor de sua hora aula.

![](../proffy.png)


Este projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app).

## Instalação e Configuração para Desenvolvimento

Para configurar o ambiente, teremos quatro etapas, sendo: Node + NPM, Yarn, Expo e Visual Studio Code.
Neste projeto foram utilizado as versões, seguintes:

- NPM versão 6.14.6;
- Node versão v12.18.3 LTS;
- Yarn versão 1.22.4;
- Expo global versão v1.22.4;
- Visual Studio Code: 
    Version: 1.47.3 (user setup)
    Commit: 91899dcef7b8110878ea59626991a18c8a6a1b3e
    Date: 2020-07-23T13:12:49.994Z
    Electron: 7.3.2
    Chrome: 78.0.3904.130
    Node.js: 12.8.1
    V8: 7.8.279.23-electron.0
    OS: Windows_NT x64 10.0.18363
- Chocolatey versão v0.10.15

### Node e NPM

#### Linux

    Para Linux será utilizado o [NodeSource](https://github.com/nodesource/distributions/blob/master/README.md), basta seguir os passos:

    1 - Verifique se possui o [curl](https://curl.haxx.se/), execute o comando abaixo:
    
    ```sh
    curl --version
    ```
    Caso retorne a versão após executar o comando acima pode seguir para o item 2 da sessão Linux. Caso não apresente será necessário executar o comando, abaixo:

    ```sh
    sudo apt install curl
    ```
    Com o curl instalado, execute o comando de instalação da versão LTS mais recente, veja comando abaixo:

    No caso do Ubuntu:
    ```sh
    curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    No caso do Debian(executar como root):
    ```sh
    curl -sL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get install -y nodejs
    ```

    Para que a instalações façam efeito e os arquivos seja carregados feche o terminal e abra novamente:
    Agora para testar se as instalações foram feitas corretamente, execute os comando abaixo para verificar as versões do node e npm.
    ```sh
    node -v
    npm -v
    ```
    Tendo exito no retorno das informações de versão do Node e npm, sua instalação foi um sucesso.    


#### OS

    Para macOS será utilizado o gerenciador de pacotes [Homebrew](https://brew.sh/index_pt-br), que é instalado usando Ruby, que já vem instalado por padrão, assim executar o seguinte comando no terminal:

    1 - Verifique se possui o [curl](https://curl.haxx.se/), execute o comando abaixo:
    
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ```
    
    Para verificar se a instalação teve sucesso, execute o comando abaixo:
    ```sh
    brew --version
    ```
    Com o Homebrew instalado, execute o comando de instalação da versão 12 (LTS) mais recente, veja comando abaixo:
    
    ```sh
    brew install node@12
    ```

    Para que a instalações façam efeito e os arquivos seja carregados feche o terminal e abra novamente:
    Agora para testar se as instalações foram feitas corretamente, execute os comando abaixo para verificar as versões do node e npm.
    ```sh
    node -v
    npm -v
    ```
    Tendo êxito no retorno das informações de versão do Node e npm, sua instalação foi um sucesso.    


#### Windows

 Para Windows será utilizado o [Chocolatey](https://chocolatey.org/), basta seguir os passos:

    1 - Inicie abrindo o Windows PowerShell em modo de administrador.
    O Powershell trabalha com um esquema de autorizações (conhecido como Execution Policy) para execução de scripts e, por isso, precisamos verificar se o mesmo está compativel no sistema com o que o Chocolatey precisa. Execute o comando abaixo:

    ```sh
    Get-ExecutionPolicy
    ```
    Caso retorne Restricted, execute o comando abaixo:
    
    ```sh
    Set-ExecutionPolicy RemoteSigned
    ```
    Observação: Escolha a opção [A] Sim para todos
    
    Caso o comando acima apresente erro, utilize o comando abaixo:
    ```sh
    Set-ExecutionPolicy RemoteSigned
    ```
    Para verificar se a alteração de permissão ocorreu com sucesso execute novamente o comando abaixo:
    ```sh
    Get-ExecutionPolicy
    ```
    Alterada a permissão, agora basta instalar o Chocolatey, usando o comando abaixo:
    ```sh
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```
    
    Assim que finalizar a instalação do Chocolatey, feche e abra o terminal como administrador e execute o comando abaixo:
    ```sh
    choco -v
    ```
    Após a execução do comando acima, deverar ser listado a versão do Chocolatey, neste caso a instalação ocorreu com sucesso, basta agora instalar a versão LTS mais recente do Node com o seguinte comando:
    ```sh
    cinst nodejs-lts
    ```
    Observação: Escola a opção [A]ll - yes to all
    Agora para testar se as instalações foram feitas corretamente, execute os comando abaixo para verificar as versões do node e npm.
    ```sh
    node -v
    npm -v
    ```
    Tendo êxito no retorno das informações de versão do Node e npm, sua instalação foi um sucesso.   

### Yarn

#### Linux

    Para configurar o Yarn versão 1 no Linux vamos começar configurando o repositório do YARN, executando o comando listado abaixo:
    ```sh
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    ```
    Depois de preparado o repositório, execute o comando:
    ```sh
    sudo apt update && sudo apt install --no-install-recommends yarn
    ```
    Adicione ao arquivo ~/.bashrc ou ~/zshrc esse último caso você utilize o shell Zsh a seguinte linha:
    ```sh
    export PATH="$PATH:`yarn global bin`"
    ```
    Após a instalação feche o terminal e depois abra novamente e execute o comando abaixo:
    ```sh
    yarn --version
    ```
    Tendo êxito no retorno das informação de versão do Yarn, sua instalação foi um sucesso. 

#### OS

    Para configurar o Yarn versão 1 no macOS execute o comando abaixo:
    ```sh
    brew install yarn 
    ```
    Adicione ao arquivo ~/.bashrc ou ~/zshrc esse último caso você utilize o shell Zsh a seguinte linha:
    ```sh
    export PATH="$PATH:`yarn global bin`"
    ```
    Após a instalação feche o terminal e abra novamente, após aberto execute o comando abaixo:
    ```sh
    yarn --version
    ```
    Tendo êxito no retorno das informação de versão do Yarn, sua instalação foi um sucesso. 

#### Windows

    Para configurar o Yarn versão 1 no Windows execute no terminal com permissão de administrador, o comando abaixo:
    ```sh
    cinst yarn 
    ```
    Observação: Escolha a opção [A]ll - yes to all

    Ao finalizar feche e abra o terminal, e execute o comando listado abaixo:
    ```sh
    yarn --version
    ```
    Tendo êxito no retorno das informação de versão do Yarn, sua instalação foi um sucesso. 

#### Dicas para Yarn

Ao realizar o clone do projeto, em seu diretório, você pode executar:

##### `yarn start`

Executa o aplicativo no modo de desenvolvimento.<br />
Abra seu navegador e execute [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.<br/>
Você também poderá usar o console, para verificar alguns erros, cando estiver implementando novas funcionalidades.

##### `yarn test`

Caso tenha o interesse em executar teste na aplicação de modo interativo.<br/> Consulte a seção sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

##### `yarn build`

Para criar versão compilada para publicação na pasta 'build'.<br/> utilize comando yarn build no terminal do Visual Code.
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é minificada e os nomes de arquivos incluem os hashes. <br/>

Consulte a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

##### Dúvidas

Você pode aprender mais, acessando [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para mais documentações sobre React, consulte a [React documentation](https://reactjs.org/).

### Expo

Instalando o Expo, para instalar os passos são iguais nos três sistemas operacionais.

- Com a instalação do Node e Yarn, abra o terminal (no caso do windows com permissão de administrador) e execute o comando abaixo:
```sh
yarn global add expo-cli
```

Obsevação: Caso prefira usar o npm, execute o comando abaixo:
```sh
npm install expo-cli --global
```

Após realizar a instalação e verificar se o pacote Expo foi instalado, execute o comando:
```sh
expo --version
```
Tendo êxito no retorno das informação de versão do Yarn, sua instalação foi um sucesso.

Observação: No caso do Windows ocorrendo um erro ao executar o comando e resultando a mensagem `expo : O arquivo C:\Users\xxxx\AppData\Roaming\npm\expo.ps1 não pode ser carregado`, verifique se o **ExecutionPolicy** está configurado como `RemoteSigned`.

No caso do Linux e macOS a instalação da expo-cli como global no Yarn apareça que ocorreu com sucesso mas ao tentar utilizar o expo diz que o comando não existe, verifique no Linux e no macOS se você adicionou a linha `export PATH="$PATH:`yarn global bin`"` ao arquivo de configuração do seu terminal.

### Visual Studio Code

Para a instalação do editor Visual Studio Code, nos três sistemas operacionais [acesse o site](https://code.visualstudio.com/) e baixe a versão para o seu sistema operacional.

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/yourname/yourproject/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
