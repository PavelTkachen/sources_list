import React, { useCallback } from "react";
import { useState } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import "./Navigation.css";
import { Layout, Menu, Button, Modal, Spin } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import DataTable from "./DataTable";
const { Header, Content } = Layout;

const HEADER_STYLE = {
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
};
const OPEN_MODAL_BUTTON_STYLE = { alignItems: "center" };
const CREATE_TAB_BUTTON_STYLE = { marginLeft: "20px" };
const CLOSE_CIRCLE_OUTLINED_ICON_STYLE = {
  color: "red",
  marginLeft: ".5em",
  fontSize: "1em",
};
const MENU_STYLE = { width: "90%", margin: "3em" };
const CONTENT_STYLE = { padding: "50px 50px" };
const MODAL_STYLE = { display: "flex" };
const MODAL_INPUT_STYLE = { width: 475 };

const Navigation = () => {
  const [stateList, setStateList] = useState([]); // Хранилище вкладок и его обновление
  const [stateFormValues, setStateFormValues] = useState(""); // Хранилище формы заполнения и его обновление
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [isErrorState, setIsErrorState] = useState(false);

  const create = useCallback(async () => {
    try {
      if (stateFormValues !== "") {
      setIsLoadingState(true);
      setIsErrorState(false);
      await new Promise((res, rej) => {
        setTimeout(() => {
          const tabs = JSON.parse(localStorage.getItem("tabs") || "[]");
          tabs.unshift({ label: stateFormValues, key: uuidv4() });
          localStorage.setItem("tabs", JSON.stringify(tabs));
          res(tabs);
        }, 2000);
      })
        .then((data) => {
          setStateList(data);
          setIsModalVisible(false);
          setStateFormValues('');
        })
        .catch((e) => {
          throw Error(e);
        });
    } else if (stateFormValues === "") {
      setIsErrorState(true);
    }} catch (error) {
      console.log("err");
    } finally {
      setIsLoadingState(false);
    }
  }, [stateFormValues]);
  const remove = (key) => {
    // Функция удаления вкладки по id
    const index = stateList.findIndex((item) => item.key === key); // Ищем в хранилище вкладок вкладку по id и присваиваем её index
    Modal.confirm({
      title: "Вы уверены, что хотите удалить вкладку?",
      okText: "Да",
      cancelText: "Нет",
      okType: "danger",
      onOk: () => {
        if (index !== -1) {
          const newState = [...stateList]; // Копируем хранилище вкладок
          newState.splice(index, 1); // Удаляем 1 вкладку по index`у
          setStateList(newState); // Обновляем старое хранилище вкладок на новое
        }
      },
    });
  };
  const handleChange = useCallback((e) => {
    // Функция записи данных в хранилище формы
    const value = e?.target?.value;
    setStateFormValues(value); // Обновляем старое хранилище формы на новое
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    create();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout className="layout">
      <Modal
        title="Введите название новой вкладки"
        okText={isLoadingState ?  'Загрузка...':"Добавить"}
        cancelText="Отмена"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={MODAL_STYLE}>
          <input
            placeholder="Название вкладки"
            style={MODAL_INPUT_STYLE}
            value={stateFormValues}
            onChange={handleChange}
          />
        </div>
        <div style={isErrorState ? {} : {display: 'none'} }>
          <h4 style={{color:"red", marginTop:'10px'}}>Пожалуйста введите название вкладки.</h4>
        </div>
      </Modal>
      <Header style={HEADER_STYLE}>
        <Button
          style={OPEN_MODAL_BUTTON_STYLE}
          type="primary"
          onClick={() => showModal()}
        >
          Создать
        </Button>
        <div style={MENU_STYLE}>
          <Menu theme="dark" mode="horizontal">
            {" "}
            {stateList.map(
              (item) => (
                (
                  <Menu.Item>
                    {item.label}
                    <CloseCircleOutlined
                      title="Удалить"
                      style={CLOSE_CIRCLE_OUTLINED_ICON_STYLE}
                      onClick={(e) => {
                        e.stopPropagation();
                        remove(item.key);
                      }}
                    />
                  </Menu.Item>
                )
              )
            )}
          </Menu>
        </div>
      </Header>
      <Content style={CONTENT_STYLE}>
        <div className="site-layout-content">
          <DataTable />
        </div>
      </Content>
    </Layout>
  );
};

export default Navigation;
