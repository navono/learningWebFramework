# Express-demo
A sample source demonstrate Express web framework

![](https://img.shields.io/badge/version-v0.0.1-519dd9.svg)
![](https://img.shields.io/badge/language-Javascript-orange.svg)
[![](https://img.shields.io/badge/license-MIT-000000.svg)](https://github.com/navono/learningWebFramework/blob/master/LICENSE)

![](logo.png)

**!!Attention!!**

In Mongoose(current version: 4.13.7), the callback in `get()` function can not be an [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments).
see issue [5646](https://github.com/Automattic/mongoose/issues/5646)


## Installation

```sh
yarn
```

## Usage example

1. Build docker image:
    > docker build -t express-demo:latest .

2. Run MongoDB
    > docker pull mongo<br>
      docker run -v -d /data/mongodb_data:/data/db -p 27017:27017 --name mongo mongo --smallfiles

    Use mongodb client(for example Robo 3T) to check whether mongdb is running.
3. Run express demo
    > docker run -dit -p 3000:3000 --name demo --link mongo:mongo express-demo

4. Check it
    > curl localhost:3000/catalog

<!-- _For more examples and usage, please refer to the [Wiki][wiki]._ -->

## Development setup

> yarn devstart

## Release History

* 0.0.1
    * Work in progress

## Meta
[![](https://img.shields.io/badge/twitter-@navono1-blue.svg)](https://twitter.com/navono1)
</br>[![](https://img.shields.io/badge/email-@navono007-blue.svg)](mailto:navono007@gmail.com)


## License
[![](https://img.shields.io/badge/license-MIT-000000.svg)](https://github.com/navono/learningWebFramework/blob/master/LICENSE)

## Contributing

1. Fork it (<https://github.com/navono/learningWebFramework/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
