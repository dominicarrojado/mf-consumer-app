# Micro-Frontend Consumer App

A micro-frontend consumer app built using [Rsbuild](https://rsbuild.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/).

The [provider app](https://github.com/dominicarrojado/mf-provider-app) is another micro-frontend app that exposes a component. The consumer app consumes the component from the provider app and renders it. This achieves a micro-frontend architecture where multiple apps can work together seamlessly.

## Setup

Install the dependencies:

```bash
yarn install
```

## Get Started

Start the dev server:

```bash
yarn dev
```

Build the app for production:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```
