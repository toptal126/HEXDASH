import React from 'react';
import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { KnowledgeBaseCardWrap } from '../../Style';

function KnowledgeBase() {
  return (
    <Cards headless>
      <KnowledgeBaseCardWrap>
        <figure className="ninjadash-knowledgebase-card">
          <img src={require('../../../../static/img/book-open.png')} alt="" />
          <figcaption className="ninjadash-knowledgebase-card__text">
            <h2 className="ninjadash-knowledgebase-card__title">Knowledge Base</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
            </p>
            <Button className="ninjadash-knowledgebase-card__action" block type="primary">
              Browse Article
            </Button>
          </figcaption>
        </figure>
      </KnowledgeBaseCardWrap>
    </Cards>
  );
}

export default KnowledgeBase;
