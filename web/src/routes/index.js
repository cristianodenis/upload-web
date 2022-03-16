import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from '../Views/Home';
import Task from '../Views/Task';
import QrCode from '../Views/Qrcode';

export default function Rotas(){
  return(
    // O switch não pode ser utilizado por conta da atualização
    // do react-router-dom, asim usei o Routes. 
     <BrowserRouter>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/tarefa" exact component={Task}/>
             <Route path="/tarefa/:id" exact component={Task}/>
             <Route path="/qrcode" exact component={QrCode}/>
         </Switch>
     </BrowserRouter>
  )

}