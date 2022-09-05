import { Space, Table, Tag } from 'antd';
import { ExportOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React from 'react';
const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Источник',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Принадлежность',
    key: 'attachment',
    dataIndex: 'attachment',
  },
  {
    title: 'Дата создания',
    key: 'creationDate',
    dataIndex: 'creationDate',
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <ExportOutlined title='Перейти'/>
        <EditOutlined title='Изменить'/>
        <DeleteOutlined title='Удалить' style={{color: 'red'}}/>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '',
    source: '',
    description: '',
    attachment: '',
    reationDate: '',
  },
  {
    key: '2',
    name: '',
    source: '',
    description: '',
    attachment: '',
    reationDate: '',
  },
  {
    key: '3',
    name: '',
    source: '',
    description: '',
    attachment: '',
    reationDate: '',
  },
];

const DataTable = () => <Table columns={columns} dataSource={data} />;

export default DataTable;