import React, {useState, useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';
//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [redirect,setRedirect] = useState(false);

    async function loadTask(){
      await api.get(`/tarefa/filter/${filterActived}/${isConnected}`)
      .then(response =>{
        setTasks(response.data)
      })
    }

    function Notification(){
      setFilterActived('late');
    }

    useEffect(() =>{
      loadTask();

      if(!isConnected)
      setRedirect(true);

    },[filterActived])

  return(
    <S.Container>
    {redirect && <Redirect to="/qrcode"/>}
    <Header clickNotification={Notification}/>

    <S.FilterArea>
      <button type="button"      onClick={()=> setFilterActived("all")}>
        <FilterCard title="Todos" actived={filterActived == 'all'}/>
      </button>
      <button type="button"       onClick={()=> setFilterActived("Today")}>
        <FilterCard title="Hoje"  actived={filterActived == 'today'}/>
      </button>
      <button type="button"        onClick={()=> setFilterActived("week")}>
        <FilterCard title="Semana" actived={filterActived == 'week'}/>
      </button>
      <button type="button"       onClick={()=> setFilterActived("month")}>
        <FilterCard title="Mês"   actived={filterActived == 'month'}/>
      </button>
      <button type="button"      onClick={()=> setFilterActived("year")}>
        <FilterCard title="Ano"  actived={filterActived == 'year'}/>
      </button>
    </S.FilterArea>

        <S.Title>
          <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
        </S.Title>

    <S.Content>
       {
         tasks.map(t =>(
           <Link to={`/tarefa/${t._id,t.title}`}>
             <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/>
          </Link>
         ))
       }
    </S.Content>

    <Footer/>
    </S.Container>
  ); 
}

export default Home;
