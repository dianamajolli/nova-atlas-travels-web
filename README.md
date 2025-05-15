# Landing Page - Nova Atlas Travels

Este projeto é uma landing page desenvolvida em React para a agência de viagens "Nova Atlas Travels".

## Funcionalidades

- Design responsivo (desktop e mobile)
- Estilo minimalista, chique e sofisticado
- Paleta de cores customizável via variáveis CSS
- Internacionalização (Inglês e Português) usando i18next
- Componentes modulares e bem documentados

## Estrutura do Projeto

```
nova-atlas-travels-web/
├── public/
│   └── ... (arquivos públicos, incluindo index.html)
├── src/
│   ├── assets/
│   │   └── images/ (local para imagens, como hero-background.jpg)
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── Services/
│   │   │   ├── Services.js
│   │   │   └── Services.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.js
│   │   │   └── Testimonials.css
│   │   ├── CTA/
│   │   │   ├── CTA.js
│   │   │   └── CTA.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── en/
│   │   │   │   └── translation.json (traduções em Inglês)
│   │   │   └── pt/
│   │   │       └── translation.json (traduções em Português)
│   │   └── i18n.js (configuração do i18next)
│   ├── App.css (estilos globais e variáveis de cor/fonte)
│   ├── App.js (componente principal da aplicação)
│   ├── index.css (estilos de base)
│   └── index.js (ponto de entrada da aplicação React)
├── .gitignore
├── package.json
├── README.md (este arquivo)
└── ... (outros arquivos de configuração)
```

## Cores Utilizadas (CSS Variables em `src/App.css`)

- `--nova-midnight-blue: #191970;`
- `--nova-deep-ocean: #003366;`
- `--nova-tropical-blue: #00CED1;`
- `--nova-golden-tan: #D2B48C;`
- `--nova-white-sand: #F5F5DC;`

## Fontes Utilizadas (CSS Variables em `src/App.css`)

- `--nova-font-primary: 'Montserrat', sans-serif;`
- `--nova-font-secondary: 'Lora', serif;`

(Você pode precisar instalar essas fontes ou garantir que elas estejam disponíveis via Google Fonts ou similar no seu `public/index.html`)

## Como Rodar o Projeto Localmente

1.  **Pré-requisitos:**
    *   Node.js e npm (ou Yarn) instalados na sua máquina.

2.  **Instalação:**
    *   Clone ou baixe e extraia o projeto para um diretório local.
    *   Abra o terminal no diretório raiz do projeto (`nova-atlas-travels-web`).
    *   Rode o comando para instalar as dependências:
        ```bash
        npm install
        ```
        ou, se você usa Yarn:
        ```bash
        yarn install
        ```

3.  **Executando o Servidor de Desenvolvimento:**
    *   Após a instalação das dependências, rode o comando:
        ```bash
        npm start
        ```
        ou, se você usa Yarn:
        ```bash
        yarn start
        ```
    *   Isso iniciará o servidor de desenvolvimento (geralmente em `http://localhost:3000`) e abrirá a página no seu navegador padrão.
    *   A página será recarregada automaticamente se você fizer alterações nos arquivos.

4.  **Build para Produção (Opcional):**
    *   Para criar uma build otimizada para produção, rode:
        ```bash
        npm run build
        ```
        ou, se você usa Yarn:
        ```bash
        yarn build
        ```
    *   Os arquivos da build estarão na pasta `build/`.

## Customização

-   **Cores e Fontes:** Modifique as variáveis CSS no arquivo `src/App.css`.
-   **Textos e Traduções:** Edite os arquivos JSON em `src/i18n/locales/en/translation.json` (Inglês) e `src/i18n/locales/pt/translation.json` (Português).
-   **Imagens:** Substitua as imagens de placeholder na pasta `src/assets/images/`. A imagem de fundo do Hero (`hero-background.jpg`) é um exemplo.
-   **Conteúdo dos Componentes:** Cada componente (Navbar, Hero, Services, etc.) está em sua respectiva pasta dentro de `src/components/`. Você pode editar o conteúdo e a estrutura diretamente nos arquivos `.js` e os estilos nos arquivos `.css` correspondentes.

## Observações

-   O projeto foi criado usando `create-react-app`.
-   As dependências de internacionalização (`i18next`, `react-i18next`, `i18next-browser-languagedetector`) foram instaladas usando `--legacy-peer-deps` devido a possíveis conflitos com a versão do TypeScript usada pelo `create-react-app`.
-   Certifique-se de ter uma imagem chamada `hero-background.jpg` na pasta `src/assets/images/` ou atualize o caminho no arquivo `src/components/Hero/Hero.css`.

