
04:- 
node module :-  all the package that we are installed bcryptjs( no dev dependencies) , jsonwebtoken
package-lock:- dependency treee ( u cant modify here )  require :- other package need  
heavy folder :- node module ( we never transfer this file )  
npm i :- it will automatically go inside the package json look for all dependecy and install it apart 
from thios it wiill see what other compatable to version from package lock and installit 

.git ignore :-  create a file in application and write the folder which u dont want to push to git write here 


json web tokken :- supporting library will also installed 

force resolution  :- for npm i 

readme.md :- md stand for mark down 
it is detailed description of the project 

#details description 


extension :- 
vs :- vscode icon 
git history 
git lens   :- give git details 
spellcheck 
eslint :- standard of code 
tabnine :- ai suggestion 

chrome extension :-  json viewer   :- to see json data properly 


05:- 

dependency :- 
local :- what u install default 
they are local to folder in which u install the file or specific folder 

global :- install in the laptop
can be used for any app 
only used before the app start 
used to generate the app / run the app 
will not add  in package json 
need admin permission to   install it 


dev depencies :-  they are local to folder 
only depencies used at time of development 
not require in term of prductiont    


install :- npm i package name --save-dev


npm i chai --save-dev


 "dependencies": {
    "bcryptjs": "^3.0.3",
    "express": "^5.3.0",
    "jsonwebtoken": "^9.0.3"
  },
  "devDependencies": {
    "chai": "^6.3.0"
  }

  devDependencies :- deveops people will ignore this in production 

  