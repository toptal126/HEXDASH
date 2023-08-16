import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import PropTypes from 'prop-types';
import { TableWrapper, DragDropStyle } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const DragHandle = sortableHandle(() => <UilExpandArrows />);

function DragAndDropTable() {
  const { users } = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  const usersTableData = [];
  users.map((user, index) => {
    const { name, designation, img } = user;

    return usersTableData.push({
      key: index + 1,
      index,
      user: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../${img}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {name}
            </Heading>
          </figcaption>
        </div>
      ),
      email: <span className="drag_email">john@gmail.com</span>,
      company: <span className="drag_company">Business Development</span>,
      position: <span className="drag_designation">{designation}</span>,
      joinDate: <span className="drag_join-date">January 20, 2020</span>,
      action: (
        <div className="table-actions">
          <Button className="btn-icon" type="info" to="#" shape="circle">
            <UilEdit />
          </Button>
          <Button className="btn-icon" type="danger" to="#" shape="circle">
            <UilTrashAlt />
          </Button>
        </div>
      ),
    });
  });

  const usersTableColumns = [
    {
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      dataIndex: 'user',
    },
    {
      dataIndex: 'email',
    },
    {
      dataIndex: 'company',
    },
    {
      dataIndex: 'position',
    },
    {
      dataIndex: 'joinDate',
    },
    {
      dataIndex: 'action',
      width: '90px',
    },
  ];

  const [state, setState] = useState({
    dataSource: usersTableData,
  });

  const { dataSource } = state;

  const SortableItem = sortableElement((props) => <tr {...props} />);
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter((el) => !!el);
      setState({ ...state, dataSource: newData });
    }
  };

  function DraggableBodyRow({ className, style, ...restProps }) {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex((x) => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  }

  DraggableBodyRow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  function DraggableContainer(props) {
    return <SortableContainer useDragHandle helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />;
  }

  return (
    <DragDropStyle>
      <Cards title="Drag & Drop">
        <TableWrapper className="table-responsive">
          <Table
            pagination={false}
            dataSource={dataSource}
            columns={usersTableColumns}
            rowKey="index"
            components={{
              body: {
                wrapper: DraggableContainer,
                row: DraggableBodyRow,
              },
            }}
          />
        </TableWrapper>
      </Cards>
    </DragDropStyle>
  );
}

export default DragAndDropTable;
