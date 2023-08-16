import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.figure`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h4 {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
    h2 {
      margin: 6px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    p {
      line-height: 1.79;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    button {
      background: ${({ theme }) => theme['primary-color']}15;
      color: ${({ theme }) => theme['primary-color']};
    }
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      .author {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        img {
          width: 50px;
          border-radius: 50%;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
        }
        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
      .feedback {
        span {
          font-size: 13px;
          ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
          color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          display: inline-flex;
          align-items: center;
          svg {
            width: 16px;
            height: 16px;
            margin: 0 5px;
            cursor: pointer;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
          }
        }
      }
    }
  }
`;

function SampleCardFour({ item }) {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h4>
          <span>Web Development</span>
          <span>01 July 2020 </span>
        </h4>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="feedbackSection">
          <div className="author">
            <img src={require('../../../static/img/chat-author/t1.jpg')} alt="" />
            <span>Burns Marks</span>
          </div>
          <div className="feedback">
            <span className="like">
              <UilEye />
              70
            </span>
            <span className="view">
              <UilHeart />
              120
            </span>
          </div>
        </div>
      </figcaption>
    </CardWrapper>
  );
}

SampleCardFour.propTypes = {
  item: propTypes.object,
};

SampleCardFour.defaultProps = {
  item: {
    id: 1,
    title: 'How to Use Apples Products',
    content:
      'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
    img: 'static/img/sampleCards/6.png',
  },
};

export default SampleCardFour;
