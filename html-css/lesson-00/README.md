## Pre-requisites

As part of this module, we will be primarily looking into HTML and CSS code snippets. 
This does not require a great deal of setup on your local machine to write a snippet and run it in your web browser locally.

However, in order to aid our learning better, it makes sense to have a some things sorted out before we get started on the coding aspect.

I have not provided explicit instructions on how to install things like code editors and web browsers. Its expected 
that you can manage such things on your own with a simple google search. Always remember: Google is your best friend.

- A modern code editor which has good support for syntax highlighting and related plugins for web development.
    - While something as simple as Notepad will work as well, it makes life easier when we use a more specialized text editor.
    - I'd recommend Visual Studio Code for most folks. This is a free tool with practically unlimited plugins.
    - I prefer Jetbrains Webstorm - this is a paid tool. Pick whatever works for you best. There is no compulsion.
    - Install whichever code editor you want, but make sure to setup things like syntax highlighting for HTML/CSS via the plugins. 
- A modern web browser such Google Chrome or Mozilla Firefox. Pick whichever works for you, for the most part the developer tools are the same. However
there maybe certain aspects of the tools which maybe better in one browser over the other. From a learning standpoint, both browsers will work fine.
- Have git installed on your dev machine - this is optional. This is primarily so that you can clone/fork/download the code repo to your local and 
  work on it at your convenience. Alternatively, you can simply download the repo via the download option on the Github UI.
- Install python 2.7 or 3.x on your local machine - This is so that we can run a simple web server on our dev machines and serve the necessary html/css files
  - Fact of the matter is for the basic html/css code snippets which we would run from our local machines, we don't need a 
  file server. However, it serves as good practice for other complicated things which we will see down the line.
  - What we should understand is that files served over `file://` protocol has various restrictions in different browsers. This 
  protocol is quite different from `http://` protocol. So having a web server running locally, allows us to make sure all 
  our requests in the browser follow `http://` protocol circumventing any issues we may face.
  - Once python is installed, make sure to have python available on the command line by adding the necessary environment variable
  - For python 2.x, run `python -m SimpleHTTPServer` in whichever folder you want. This starts a web server over port 8000 by default, with the contents of the folder being served.  
  - For python 3.x, run `python -m http.server` in whichever folder you want. This starts a web server over port 8000 by default, with the contents of the folder being served.

### How to run the code snippets
- Open up the terminal or the command line app for your operating system.
- Navigate or change directory into the location where you have this project cloned or downloaded
- Each lesson folder is self-contained, so depending on which lesson you want to run, change directory into that folder on the command line
- Then run the python command mentioned in the previous section in the terminal
  - For python 2.x, run `python -m SimpleHTTPServer` in whichever folder you want. This starts a web server over port 8000 by default, with the contents of the folder being served.
  - For python 3.x, run `python -m http.server` in whichever folder you want. This starts a web server over port 8000 by default, with the contents of the folder being served.
- Now you can open your browser and enter http://localhost:8000 and the folder in which you started the web server will be served over HTTP. 
  You can also specify the exact file as well and open it directly.  
