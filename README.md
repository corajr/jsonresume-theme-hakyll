# jsonresume-theme-hakyll

Generates a simple resume tailored for a Hakyll site.

## Getting started

To get started with theme development, this is what you'll need:

- [yarn](https://yarnpkg.com/)

### Install the command line

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

Go ahead and install it:

```
npm install -g resume-cli
```

### Download theme

Let's go ahead and download a [copy of the repository](https://github.com/jsonresume/jsonresume-theme-boilerplate/archive/master.zip).

### Install npm packages

We need to install the dependencies. `cd` into the theme folder we just downloaded and run:

```bash
yarn
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Serve theme

While inside the theme folder, simply run:

```
resume serve
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it!

## License

Available under [the MIT license](http://mths.be/mit).
