# EventLoop

JS is synchronous and single threaded bydefault

## There can be asynchronous behaviour

- with browser API - setTimeout, setInterval, setImmediate, nextTick
- with promises
- with event handlers
  Promise - A function not executed immediately but it must be executed , after a while it has some status durning the execution , at final it may resolve ()=> success refect => unsuccess
  Call back funtion => that pass as argument or a parameter to another function

Modern JS divide into two types-

1. CommonJS (.cjs) -> support OOPS -> require
   priority -> (nextTick > promise > setImmediate/setTimeout)
2. ModuleJS (.mjs) -> follow modular approach -> import
   priority -> (promise > nextTick > setImmediate/setTimeout)
