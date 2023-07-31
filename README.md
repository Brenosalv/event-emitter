# Coding Challenge: EventEmitter

## O problema

Crie uma lib `EventEmitter` usando javascript.

Com ela é possível escutar e emitir eventos.

## API esperada:
- `listen`: Deve adicionar um listner para o eventName;
- `emit`: Deve emitir eventos, trigando seus listeners;
- `removeEvent`: Deve remover os listners desse eventName;
- Eventos podem ser emitidos com dados, que serão repassados para os listeners;
- `listenOnce`: Semelhante ao `listen`, entretanto o callback será trigado apenas uma vez;
- `removeAllEvents`: Deve remover todos os eventos e listeners

## Exemplo:

```js
EventEmmiter.listen('my-awesome-event', doSomething)
EventEmmiter.listen('my-awesome-event', doSomethingElse)

EventEmmiter.emit('my-awesome-event')
EventEmmiter.emit('my-awesome-event', { foo: "bar" })

EventEmmiter.removeEvent('my-awesome-event')
```

## Expectativa de solução

- Construir a lib eventemitter, para passar nos testes automatizados.
- Os primeiros testes são os mais importantes.
- Existem bibliotecas e artigos na internet que solucionam o problema, mas elas não devem ser usadas.
- Conte com a ajuda dos entrevistadores para qualquer dúvida.
- Tudo bem nunca ter visto esse problema antes, pergunte a vontade.
- O live coding é mais sobre como resolver o problema, e menos sobre conhecimento prévio.
- Não há resposta correta.
- Problemas podem ser resolvidos de diferentes formas.
- Fique a vontade para trazer sua solução. =)

## Arquivo de tests
Junto ao desafio, há um arquivo de testes para verificar o funcionamento do código.

## Rodando os testes

```js
// yarn
yarn
yarn test

// npm
npm i
npm test
```
