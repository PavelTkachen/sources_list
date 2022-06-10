import { Space, Table, Tag } from 'antd';
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
    title: 'Дейсвтия',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Добавить {record.name}</a>
        <a>Удалить</a>
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