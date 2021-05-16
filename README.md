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

Clone project

<code>git clone https://github.com/empathyco/people-takehome-empathyx-vue-javier-gonzalez.git
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

# Introduction

At Empathy.co, we strive to deliver the best search experiences to our customers. As a Frontend Engineer, you are expected to lead the way by combining creativity and technical skills. The goal of this exercise is to get an understanding of how you apply those skills to one of our most common challenges: crafting a search interface.

Once finished, the code turned in will be the starting point of a conversation with our team. We would like to both understand how you approached the exercise as well as get a glimpse of how collaborating with you in a real problem would feel like.

# Description

For the exercise, We'd like you to build a web application that allows a user to search for artists, albums and tracks on the Spotify catalog. There are no other requirements in terms of features as well as no requirements in terms of aesthetics, but you are encouraged to be creative.

In order to evaluate your component-oriented development skills, we’d like you to use Vue to build the UI. Besides Vue, we'd like you to pick technologies that help us get clear signal on your frontend fundamentals. For that reason, we recommend that you stick with ES6 and vanilla CSS. CSS frameworks and libraries such as Bootstrap are NOT allowed (CSS preprocessors like SASS, LESS and etc are not only allowed but encouraged).

\* You can use the Spotify Web API to fetch all the necessary data.

# Evaluation

This exercise will be evaluated based on 4 criteria:

#### Design

We take pride in creating beautiful experiences and you should strive to do the same. Equally important, we really care about the user experience and inclusion (Accessibility).

#### Performance

Performance is critical for a good user experience. Although we don't expect (or encourage) you to write cryptic code in order to shave 1ms, we do expect that your code takes this into account.

#### Code quality

There are many views on what good code is. Ours is that good code is code that is easy to change. That means loosely coupled, good abstractions, thoughtful naming and well tested.

#### Process

Solving the problem is just half of the way, the other half is how to solve it. Again, there are many views on how to best solve a problem, but we truly believe that small incremental steps are the way to go. If possible, we would like to see just that through your commit history.
