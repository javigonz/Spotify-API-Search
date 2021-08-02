# Overview

Code Challenge for Empathy (Spotify Search :musical_note:)

Project running with:

- Javascript / React
- Redux for manage global state
- CSS vanilla
- Static module bundler with Webpack
- Babel for transpiler code
- Atomic Design for methodology of design sytem
- Testing with Jest
- Formatter with prettier and esLint
- Spotify Web API for Authorization and Search functionality

# Setup

Clone the project

<code>git clone https://github.com/javigonz/Spotify-API-Search.git
</code>

Install dependencies (node v10.x is minimum requirement)

<code>npm install</code>

# Run locally

<code>npm run start</code>

Run in http://localhost:3000

# Test / Coverage

<code>npm run test</code>

<code>npm run test:coverage</code>

Report docs ready to have a look into /coverage/lcov-report folder

# Lint & Prettier

It checks code with esLint and prettier

<code>npm run lint</code>

<code>npm run prettier</code>

# Deploy

<code>npm run build</code>

Core code ready to use in /build folder

# Github Workflow

Added automatic Pipeline workflow in each push action (Steps => lint, test:coverage and build)

<code>https://github.com/empathyco/people-takehome-empathyx-vue-javier-gonzalez/actions</code>

# Web API Spotify Info

Authorization API: <code>https://developer.spotify.com/documentation/general/guides/authorization-guide/</code>

Search API: <code>https://developer.spotify.com/documentation/web-api/reference/#category-search</code>
