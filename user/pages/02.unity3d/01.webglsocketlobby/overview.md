---
title: 'WebGL Lobby System'
image: webgllobby.jpg
metadata:
    keywords: 'unity3d,tutorial,development,game,gamedev,network,lobby,webgl'
    description: 'How to use the NodeJS Socket.IO WebGL Lobby System for Unity3D'
taxonomy:
    category: overview
    tag: unity3d-tutorial
listitems: ['webgl-socket-lobby']
visible: true
readmore: READ NOW
---

A lobby system for WebGL builds

===

# Use the WebGL Socket Lobby System

## Requirements
* a running installation of node.js, at least the version 6.2 to have the ES6 standard working. (you can download it [here](https://nodejs.org/en/?target=_blank))
* the npm package `gulp-cli` installed (you can install it with `npm install -g gulp-cli`)
* GIT

## Installation
* Clone the **server** repository from [GitHub](https://github.com/daspete/unity3d-webgl-socket-lobby-server?target=_blank)
* Clone the **client** repository from [GitHub](https://github.com/daspete/unity3d-webgl-socket-lobby-client?target=_blank)

## The first project
We will create a simple game. The server gives us a globe sprite at a random position, and the players have to click it. The player, which has clicked first, has won the round. After 5 seconds, the next round will start.

Next, we are creating the [Unity3D game](./the-unity-part?classes=button) itself.
