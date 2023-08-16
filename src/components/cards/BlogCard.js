import UilFile from '@iconscout/react-unicons/icons/uil-file-alt';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart-sign';
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCardStyleWrap } from './Style';

function BlogCard({ item, theme }) {
  const { content, title, img } = item;
  return (
    <BlogCardStyleWrap>
      <figure className={`ninjadash-blog ninjadash-blog-${theme}`}>
        <div className="ninjadash-blog-thumb">
          <img className="ninjadash-blog__image" src={require(`../../static/img/blogs/${img}`)} alt="ninjadash Blog" />
        </div>
        <figcaption>
          {theme === 'style-1' ? (
            <div className="ninjadash-blog-meta ninjadash-blog-meta-theme-1">
              <span className="ninjadash-blog-meta__single ninjadash-date-meta">01 July 2020</span>
            </div>
          ) : theme === 'style-2' ? (
            <div className="ninjadash-blog-meta ninjadash-blog-meta-theme-2">
              <span className="ninjadash-blog-meta__single ninjadash-category-meta">Web Development</span>
              <span className="ninjadash-blog-meta__single ninjadash-date-meta">01 July 2020</span>
            </div>
          ) : theme === 'style-3' ? (
            <div className="ninjadash-blog-meta ninjadash-blog-meta-theme-3">
              <span className="ninjadash-blog-meta__single ninjadash-date-meta">01 July 2020</span>
              <span className="ninjadash-blog-meta__single ninjadash-category-meta">Web Development</span>
              <span className="ninjadash-blog-meta__single ninjadash-time-meta">6 mins read</span>
            </div>
          ) : (
            ''
          )}
          <h2 className="ninjadash-blog__title">
            <Link to="#">{title}</Link>
          </h2>
          <p className="ninjadash-blog__text">{content}</p>
          <div className="ninjadash-blog__bottom">
            <div className="ninjadash-blog__author">
              <img className="ninjadash-blog__author-img" src={require('../../static/img/chat-author/t1.jpg')} alt="" />
              <span className="ninjadash-blog__author-name">Burns Marks</span>
            </div>
            <ul className="ninjadash-blog__meta">
              <li className="ninjadash-blog__meta--item">
                <span className="like">
                  <UilHeart />
                  <span>70</span>
                </span>
              </li>
              <li className="ninjadash-blog__meta--item">
                <span className="view">
                  <UilFile />
                  <span>120</span>
                </span>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </BlogCardStyleWrap>
  );
}

BlogCard.propTypes = {
  item: propTypes.object,
  theme: propTypes.string,
};

BlogCard.defaultProps = {
  item: {
    id: 1,
    title: 'Technology Change the World',
    content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
    category: 'Web Development',
    img: '1.png',
    author: 'Machel Bold',
    authorImg: '1.png',
    postDate: '15 March 2021',
    favouriteBy: '15k',
    viewedBy: '20k',
  },
  theme: 'style-1',
};

export default BlogCard;
