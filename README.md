# WebdriverIO + Allure report + Docker compose
This project include:
* [Page-object model](https://github.com/olkuzmenko/wdio-allure-docker/tree/main/pageobjects);
* Allure report integration;
* [Telnyx testcases](https://github.com/olkuzmenko/wdio-allure-docker/blob/main/Testcases.pdf);
* [config files](https://github.com/olkuzmenko/wdio-allure-docker/tree/main/configs) for tests in different browsers
* Docker image for running test locally

## 💻 Before start
1. Clone the repository 
   ```sh
   git clone https://github.com/olkuzmenko/wdio-allure-docker.git
   ```
2. Install NPM packages
    ```sh
   npm install
   ```
## 🚀 Run tests
Open the terminal and run:
```sh
   npm run chrome 
   ```
For running chrome headless:
```sh
   npm run chromeHeadless 
   ```
For running in firefox:
```sh
   npm run firefox 
   ```
For running firefox headless:
```sh
   npm run firefoxHeadless 
   ```
For running in edge:
```sh
   npm run edge
   ```
For running edge headless:
```sh
   npm run edgeHeadless 
   ```
## 🚀 Report 

Allure report is located at [github pages](https://olkuzmenko.github.io/wdio-allure-docker/)

## 🚀 Run test in Docker image locally

1. Open the terminal an run:
```sh
   docker-compose -f ./dockerCompose.yml up 
 ```

2. Run tests in docker image localhost:
```sh
   npm run docker 
 ```

