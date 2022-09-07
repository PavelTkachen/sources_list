import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { v4 as uuidv4 } from 'uuid';
import './Navigation.css';
import { Layout, Menu, Button, Modal,  } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import DataTable from './DataTable';
const { Header, Content } = Layout;

const HEADER_STYLE={display: 'flex', justifyContent:'left', alignItems: 'center'}
const BUTTON_STYLE={alignItems: 'center'}

const Navigation = () => {
  const [stateList, setStateList] = useState([]); // Хранилище вкладок и его обновление
  const [stateFormValues, setStateFormValues] = useState(''); // Хранилище формы заполнения и его обновление
  const [isModalVisible, setIsModalVisible] = useState(false);

  const create = () => { // Функция создания новой вкладки
    const newState = [...stateList]; // Копируем хранилище вкладок
    if (stateFormValues != '') {
      newState.unshift({ label: stateFormValues, key: uuidv4() }); // Добавляем к нему новую вкладку
      setStateList(newState); // Обновляем старое хранилище вкладок на новое
      setStateFormValues('')
    }
  };
  const remove = (key) => { // Функция удаления вкладки по id
    const index = stateList.findIndex(item => item.key === key); // Ищем в хранилище вкладок вкладку по id и присваиваем её index
    Modal.confirm({
      title: 'Вы уверены, что хотите удалить вкладку?',
      okText: 'Да',
      cancelText: 'Нет',
      okType: 'danger',
      onOk: () => {
        if (index !== -1) {
          const newState = [...stateList]; // Копируем хранилище вкладок
          newState.splice(index, 1); // Удаляем 1 вкладку по index`у
          setStateList(newState); // Обновляем старое хранилище вкладок на новое
        }
      }
    })
  };
  const handleChange = (e) => { // Функция записи данных в хранилище формы
    const value = e?.target?.value;
    setStateFormValues(value); // Обновляем старое хранилище формы на новое
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    create();
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout className="layout">
      <Modal 
          bodyStyle={{ display: 'flex'}}
          title="Введите название новой вкладки"
          cancelText="Отмена"
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}>
            <div style={{display: 'flex'}}>
              <input placeholder="Название вкладки" style={{width: 365}} value={stateFormValues} onChange={handleChange} />
              <Button style={{marginLeft:'20px'}} onClick={() => create()}>Добавить</Button>
            </div>
        </Modal>
      <Header style={HEADER_STYLE}>
        <Button style={BUTTON_STYLE} type="primary" onClick={() => showModal()}>Создать</Button>
        <div style={{width:'90%', margin: '3em'}}>
        <Menu theme="dark" mode="horizontal"> {
          stateList.map((item) => (
            console.log(stateList),
            <Menu.Item>
              {item.label}
              <CloseCircleOutlined title='Удалить' style={{color:'red', marginLeft:'.5em', fontSize:'1em'}}onClick={(e) => {
                e.stopPropagation();
                remove(item.key)
              }}/>
            </Menu.Item>))
        }
        </Menu>
        </div>
      </Header>
      <Content style={{padding: '50px 50px'}}>
        <div className="site-layout-content">
          <DataTable />
        </div>
      </Content>
    </Layout>
)};

export default Navigation;
