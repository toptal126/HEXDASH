import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import { NoteCardWrap } from '../style';
import NoteCard from '../../../components/note/Card';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { noteDragData } from '../../../redux/note/actionCreator';

const DragHandle = sortableHandle(() => <UilExpandArrows />);

const SortableItem = SortableElement(({ value }) => (
  <Col xxl={8} xl={12} lg={12} sm={12} xs={24} key={value.key}>
    <NoteCard Dragger={DragHandle} data={value} />
  </Col>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <Row gutter={24}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value.key}`} index={index} value={value} />
      ))}
    </Row>
  );
});

function All() {
  const dispatch = useDispatch();
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(noteDragData(arrayMoveImmutable(noteData, oldIndex, newIndex)));
  };

  return (
    <Cards title="Note Lists">
      <NoteCardWrap>
        <SortableList useDragHandle axis="xy" items={noteData} onSortEnd={onSortEnd} />
      </NoteCardWrap>
    </Cards>
  );
}

export default All;
