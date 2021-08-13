## Intro to JavaScript

JavaScript (or JS in short) is 
- primarily a client side scripting language, although you have a deviation in its usage on the server side
through means of Nodejs
- Is typically interpreted but can be JIT (Just-In-Time compiled as well)
- Supports both programming styles
    - imperative style - where you tell exactly how a certain operation is to be done
    - functional style - where you tell what has to be done, and the operation is done for you
- Has nothing to do with the Java programming language (even if there is the word Java in JavaScript)
- Started life as primarily UI glue, for performing actions that HTML/CSS could not but is now widely used
in web application development. If anything a lot of websites wont work with JS! (Whether that is good or bad is something to be discussed!)
- Loosely typed - meaning you dont have know or set the types of variables when you declare them
- Dynamically typed - 

## What is ECMA & ECMAScript
- ECMA stands for European Computer Manufacturers Association
- ECMAScript is basically the specification for the programming language and JS was an implementation of that specification
- The initial specification for JS and release of the first version came out in 1995
- Following that Netscape & Sun Microsystems (the companies which helped found the language) setup a ECMA committee to help
oversee the language growth and specification change
- There a few releases after that but for the most part in 15 years nothing changed and there was not much progress made 
- Finally, in 2015, ECMAScript 2015 or the ES6 (6th edition of ECMAScript) came out and this had drastic and necessary changes into the
language specification
- Ever since then, there is typically 1 edition release every year with naming conventions like ES7 or ECMAScript 2016, ES8 or ECMAScript 2017


## JavaScript Engines
- JS Engines are typically what run/execute your JS code either in a web browser or on a application server (in the case of NodeJS)
- There are numerous JS engines
  - Chakra - Engine used in Microsoft Edge (but not anymore, they have also moved to a fork of V8)
  - V8 - Chromes V8 engine, most popular and widely used
  - WebKit - Used in Apple's Safari browser, quite an old JS engine
  - SpiderMonkey - Used in Firefox, another old JS engine and widely used due to Firefox's userbase
  
## Interpreted or Just-In-Time Compiled
In general it is said that JS is an interpreted language. What that means is JS code is converted to machine code on the fly
as the browser tries to execute the code
- Its a lot simpler for developers as their just runs with no extra steps to be done
- However, its not necessarily the most performant
In recent years, browsers have gone ahead with JIT compilation of JS. What this means is the code is compiled just as it is 
run into byte code. That byte code is then run/executed by the browser. 
- Code can be better optimized this way, as the byte code can have performance improvements for a particular platform
- Due to compilation, the browser is in a better position to understand what pieces of code keeps running more and optimizing that
- However, there maybe a higher initial latency for running the code due to the compilation step

The key point to take away from all this is - JS is not necessarily an interpreted language. Nowadays with the advent of JIT, 
the lines are blurred between what is technically a compiled language vs an interpreted language :-)



