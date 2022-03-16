import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';

import typeIcons from '../../utils/typeIcons';

function TaskCard({type,title,when,done}) {
  const date = useMemo(()=> format(new Date(when),'dd/MM/yyyy'));
  const hour = useMemo(()=> format(new Date(when),'HH:mm'));
  const hora = parseFloat(hour);

  return (
    <S.Container done={done}>
       <S.TopCard>
         <img src={typeIcons[type]} alt="Icone da tarefa"/>
         <h3>{title}</h3>
       </S.TopCard>
       <S.BottomCard>
          <strong>{date}</strong>
          <span>{hora +3}</span>
       </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;
