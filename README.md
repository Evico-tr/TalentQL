# To Do
This web application is a simple application to manage a list of things to do.

## Infrastructure

This applications consists of two parts:
  1. Frontend: Single Page Application built with: React and Material.
  2. Backend: HTTP REST API built with Node.js, Express and MongoDB.

## How to run

To start the application use docker compose:

`docker-compose up --build`

once the app is running you can open:

http://localhost:3000

on your browser.


To start the test build run the below commands:
`docker-compose -f docker-compose.copy.yml build`
`docker-compose up`