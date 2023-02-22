import React from "react";
import { Card, Button, Input } from "antd";
import "./AuthPage.css";

const AuthPage = () => (
  <div>
  <Card className="card" title="Авторизация" headStyle={{textAlign:'center', fontSize:"20px"}}>
    <div className="input__field">
      <p className="text">Имя пользователя</p>
      <Input className="input" placeholder="Введите логин" />
    </div>
    <div className="input__field">
      <p className="text">Пароль</p>
      <Input.Password className="input" placeholder="Введите пароль" />
    </div>
    <Button className="inputButton" type="primary">Войти</Button>
  </Card>
  </div>
);
export default AuthPage;
