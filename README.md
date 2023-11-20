<br/>
<p align="center">
  <a href="https://github.com/jtmozley/fastify-ts-cloudrun-template">
    <img src="https://readme.shaankhan.dev/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Build efficient APIs on Google Cloud Run with Fastify and TypeScript.</h3>

  <p align="center">
    Effortless API Scaling: Unleash the Power of Fastify and TypeScript on Google Cloud Run with our Template!
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/jtmozley/fastify-ts-cloudrun-template?color=dark-green) ![Forks](https://img.shields.io/github/forks/jtmozley/fastify-ts-cloudrun-template?style=social) ![Stargazers](https://img.shields.io/github/stars/jtmozley/fastify-ts-cloudrun-template?style=social)

## Table Of Contents

-   [About the Project](#about-the-project)
-   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [Authors](#authors)
-   [Acknowledgements](#acknowledgements)

## About The Project

Streamline your API development with the Fastify TypeScript Cloud Run Template. This comprehensive starter kit not only harnesses the power of Fastify and TypeScript but also comes pre-configured with a Dockerfile and GitHub Action for automatic deployment on Google Cloud Run. Simplify your workflow, accelerate development, and ensure seamless scalability in the cloud. Focus on crafting robust APIs while we handle the deployment intricacies, making your journey from code to production faster and more efficient.

## Built With

Node 20 Fastify project in TypeScript to deploy directly to GCP Cloud Run with Docker containerization. Builds and pushes container image to GCP Container Registry then deploys image to Cloud Run via Github Action. Prettier, Eslint, and formatting on save setup as well.

Route autoloading plugin as well as Swagger documentation auto-generation plugin installed and configured.

-   [@fastify/swagger](https://github.com/fastify/fastify-swagger)
-   [@fastify/swagger-ui](https://github.com/fastify/fastify-swagger-ui)
-   [@fastify/autoload](https://github.com/fastify/fastify-autoload)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

-   npm
-   nvm or Node@v20
-   GCP Account
-   Intermediate knowledge of Fastify, TS, Cloud Run, Docker, Github Actions

## Usage

1. Meet or exceed prerequisites
1. Create new repo from template
1. Clone newly created repo
1. At root run `npm install`
1. Start development server on 3001 with `npm run develop`
1. Test `http://localhost:3001/status` and verify `{ status: 'online' }` response
1. Happy Hacking!

## Deployment

1. Enable Cloud Run and Container Registry in GCP
1. In new repo create deploy secrets in `Actions secrets and variables` UI
1. `GCP_CLOUD_RUN_SERVICE_KEY` secret needs to be a base-64 string of the .json GCP service key
1. Refer to `build-deploy.yml` file for complete Github Action sequence

## Roadmap

Roadmap will consist of basic development improvements as well as package improvements

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

-   If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/jtmozley/fastify-ts-cloudrun-template/issues/new) to discuss it, or directly create a pull request after you edit the _README.md_ file with necessary changes.
-   Please make sure you check your spelling and grammar.
-   Create individual PR for each suggestion.
-   Please also read through the [Code Of Conduct](https://github.com/jtmozley/fastify-ts-cloudrun-template/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

-   **Justin Mozley** - _Developer_ - [Justin Mozley](https://github.com/jtmozley) - _Author_
