import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 
  height: 40px;
  background:#20295F;
  border-bottom: 5px solid #EE6B26;

  display: flex;
`

export const LeftSide = styled.div`
  width: 50%; 
  height: 20px;
  display: flex;
  align-items: center;
  padding-left:10px;

  img{
    height:40px; width:100px; margin-top:20px;
  }
`

export const RightSide = styled.div`
  width: 50%; 
  height: 70px;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  margin-top:10px;

  a{
    color:white; font-weight: bold;
    font-size:17px;
    text-decoration: none;
    margin: 0 10px;
    margin-top:-40px;

    &:hover{
      color:#EE6B26;
    }
  }

  button{
    background: none;
    border: none;
    margin: 0 10px;
    margin-top:-40px;
  }
  
  #notification{
    img{
      width:25px;
      height:25px;
    }
    span{
      background:white;
      color: #EE6B26;
      padding: 1px 5px;
      border-radius:50%; 
      position: relative;
      top: -15px;
      right:10px; 
    }

    &:hover{
      opacity: 0.5;
    }

  }
  .dividir::after{
      content: "|";
      padding: 0 10px;
      color: white;
      position: relative;
      top: -23px;
      right:5px; 
      
    }
    button{
      font-size: 16px;
      color:white;
      font-weight: bold;
    }
  
`