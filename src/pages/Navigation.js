import React, { useEffect } from "react";
import { useState } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import "./Navigation.css";
import { Layout, Menu, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import DataTable from "../components/DataTable";
import { CustomModal } from "../components/CustomModal";
import { getItem, setItem } from "../helpers/lsService";
const { Header, Content } = Layout;

const Navigation = () => {
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getTabById = (key) => {
    const tab = stateList.find((item) => item.key === key) || {};
    return tab.label;
  };

  const create = (value = "") => {
    const tabs = getItem("tabs");
    tabs.unshift({ key: uuidv4(), label: value });
    setItem("tabs", tabs);
    setStateList(tabs);
  };
  const edit = (key, value) => {
    const tabs = getItem("tabs");
    const index = tabs.findIndex((item) => item.key === key);
    if (index !== -1) {
      tabs.splice(index, 1, { ...tabs[index], label: value });
      setItem("tabs", tabs);
      setStateList(tabs);
    }
  };
  const getData = () => {
    const tabs = getItem("tabs");
    if (tabs.length) {
      setStateList(tabs);
    }
  };
  const deleteById = (key) => {
    const tabs = getItem("tabs");
    const index = tabs.findIndex((item) => item.key === key);
    Modal.confirm({
      title: "Вы уверены, что хотите удалить вкладку?",
      okText: "Да",
      cancelText: "Нет",
      okType: "danger",
      onOk: () => {
        if (index !== -1) {
          tabs.splice(index, 1);
          setStateList(tabs);
          setItem("tabs", tabs);
        }
      },
    });
  };
  return (
    <Layout>
      <Header className="header">
        <CustomModal
          buttonLabel="Создать"
          buttonTitle="Добавить вкладку"
          modalTitle="Добавить вкладку"
          handleSubmit={create}
        />
        <div className="menu">
          <Menu theme="dark" mode="horizontal">
            {" "}
            {stateList.map((item) => (
              <Menu.Item key={item.key}>
                {item.label}
                <CustomModal
                  isEdit
                  defaultFormValue={getTabById(item.key)}
                  modalTitle="Введите новое название"
                  buttonTitle="Изменить название"
                  handleSubmit={(value) => edit(item.key, value)}
                />
                <CloseCircleOutlined
                  className="close-circle-outlined"
                  title="Удалить"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteById(item.key);
                  }}
                />
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Header>
      <Content className="content">
        <div className="site-layout-content">
          <DataTable />
        </div>
      </Content>
    </Layout>
  );
};

export default Navigation;
