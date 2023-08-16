import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import { Row, Col } from 'antd';
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
      {items
        .filter((item) => item.label === 'important')
        .map((value, index) => (
          <SortableItem key={`item-${value.key}`} index={index} value={value} />
        ))}
    </Row>
  );
});

function Important() {
  const dispatch = useDispatch();
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(
      noteDragData(
        arrayMoveImmutable(
          [
            ...noteData.filter((item) => item.label === 'important'),
            ...noteData.filter((item) => item.label !== 'important'),
          ],
          oldIndex,
          newIndex,
        ),
      ),
    );
  };
  return (
    <Cards title="Task Lists">
      <NoteCardWrap>
        <SortableList useDragHandle axis="xy" items={noteData} onSortEnd={onSortEnd} />
      </NoteCardWrap>
    </Cards>
  );
}

export default Important;
