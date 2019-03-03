# follow-up-app

## Boostrap support:

Dans le cas où le serveur ne se lance plus après l'installation de bootstrap avec l'erreur suivante:

``` Error: ENOSPC: System limit for number of file watchers reached ```

Plateforme Linux:

``` echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p ```

Plateforme Windows:

```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
