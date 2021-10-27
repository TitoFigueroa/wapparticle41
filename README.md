<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png" alt="Project logo"></a>
</p>

<h3 align="center">wapparticle41</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-green)]()
[![GitHub Issues](https://img.shields.io/github/issues/TitoFigueroa/wapparticle41)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/TitoFigueroa/wapparticle41)]()
[![License](https://img.shields.io/github/license/TitoFigueroa/wapparticle41)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Wapparticle41 its a simple application that receives web request from any client (www.wapparticle41.com/), it returns a json body that contains a message like:
{
  "timestamp": "<current date and time>",
  "ip": "<the IP address of the visitor>"
}

## 🏁 Getting Started <a name = "getting_started"></a>

Here we are going to explore how to use build and use this application relaying on docker.
```
Remember all the steps should be done located on the repository folder
```

### Prerequisites

- Docker Engine (Linux) or Docker Desktop(windows)
- Kubernetes (This is installed within the Docker Desktop)

In case you dont have any of this please review links below that could help to install this prerequisites on your local environment

```
https://docs.docker.com/desktop/ --> docker installation
https://k3s.io/ --> a light weight Linux kubernetes version to install on your locall 

```

### Build

In order to get the application working, we need to install 3 node packages. Please follow below commands to get the build

```
docker build -t wapparticle41 -f ./docker-image/Dockerfile .

```

## 🔧 Running a tests <a name = "tests"></a>

Lets start the app first, execute --> docker run --rm -it -p 8080:8080 wapparticle41 

A simple way to test it is opening on the browser next ip:port address -> http://127.0.0.1:8080

NOTE: if you have a local lan you can try hit the ipv4 address of the hosting computer, and it will show you the client ipAddress (yours ip)

## 🎈 Pushing docker image to docker hub <a name="usage"></a>

Add notes about how to use the system.

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework

## ✍️ Authors <a name = "authors"></a>

- [@TitoFigueroa](https://github.com/TitoFigueroa)