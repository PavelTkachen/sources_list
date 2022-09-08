## Установить зависимости

```bash
$ npm install
```

## Установить локальный postgresql-server(если отсутствует)
## Запустить сервис postgresql-server(при использовании WSL/Windows)
```bash
$ sudo service postgresql start
```
## Создать в нём базу данных
```psql
$ create database sources_list
```
## Накатывание миграций
```bash
$ npm run migration:run
```

## Запуск сервера

```bash
$ npm run start:dev
```