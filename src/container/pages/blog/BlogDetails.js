import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilLinkh from '@iconscout/react-unicons/icons/uil-link-h';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogDetailsStyle } from './Style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';

function BlogDetails() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blog Details',
    },
  ];
  const [state, setState] = useState({
    shareLinks: false,
  });
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 600) {
        setState({ shareLinks: true });
      } else {
        setState({ shareLinks: false });
      }
    });
  }, []);

  const { shareLinks } = state;

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Blog Details" routes={PageRoutes} />
      <Main>
        <Row justify="center">
          <Col lg={15}>
            <BlogDetailsStyle>
              <div className="ninjadash-blog-details">
                <div className="ninjadash-blog-featured-img">
                  <img src={require(`../../../static/img/blogs/blog-details/1.png`)} alt="ninjadash Blog" />
                </div>
                <div className="ninjadash-blog-content-box">
                  <div className="ninjadash-blog-content">
                    <h1 className="ninjadash-blog-title">Know More About Time Management System on your Daily Works</h1>
                    <ul className="ninjadash-blog-meta">
                      <li className="ninjadash-blog-meta__author">
                        <img src={require(`../../../static/img/users/1.png`)} alt="ninjadash blog author" />
                        <span className="ninjadash-blog-authorname">Charli Day</span>
                      </li>
                      <li className="ninjadash-blog-meta__date">01 July 2020</li>
                      <li className="ninjadash-blog-meta__category">
                        <Link to="#">Development</Link>
                      </li>
                      <li className="ninjadash-blog-meta__read-time">6 mins read</li>
                    </ul>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter – not harder – so that you
                      get more done in less time, even when time is tight and pressures are high. Failing to manage your
                      time damages your effectiveness and causes stress.
                    </p>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter – not harder – so that you
                      get more done enables you to work smarter.
                    </p>
                    <h2>What is Time Management?</h2>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter – not harder – so that you
                      get more done in less time, even when time is tight and pressures are high. Failing to manage your
                      time damages your effectiveness and causes stress.
                    </p>
                    <img src={require(`../../../static/img/blogs/blog-details/2.png`)} alt="ninjadash Blog" />
                    <h3>How Can you Use your Time Properly?</h3>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter – not harder – so that you
                      get more done in less time, even when time is tight and pressures are high
                    </p>
                    <blockquote>
                      <div className="ninjadash-blog-blockquote">
                        <p>
                          <img
                            className="ninjadash-blog-blockquote-icon-left"
                            src={require(`../../../static/img/icon/quote-left.png`)}
                            alt="ninjadash blockquote"
                          />
                          Usability design is to improve the usability of a product, which is an important part to guide
                          the actual design. It can also be regarded. A month ago, I agreed to
                          <img
                            className="ninjadash-blog-blockquote-icon-right"
                            src={require(`../../../static/img/icon/quote-right.png`)}
                            alt="ninjadash blockquote"
                          />
                        </p>
                        <span className="ninjadash-blog-quote-author">
                          <strong>Daniel Brown,</strong>Founder of Company
                        </span>
                      </div>
                    </blockquote>
                    <h4>Value of Time Management</h4>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter.
                    </p>
                    <ul className="ninjadash-blog-list">
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--label">Trim transparent pixels on exports:</span>
                        <span className="ninjadash-blog-list__item--text">
                          Usability design is to improve the usability of a product, which is an important.
                        </span>
                      </li>
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--label">Crash and bug fixes:</span>
                        <span className="ninjadash-blog-list__item--text">
                          Usability design is to improve the usability of a product, which is an important part to
                          guide.
                        </span>
                      </li>
                    </ul>
                    <h5>How Can you Benefit from Time Management System?</h5>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter.
                    </p>
                    <ul className="ninjadash-blog-list">
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--text">Only be run by an explicit user action</span>
                      </li>
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--text">
                          Show UI in a single plugin-specific dialog
                        </span>
                      </li>
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--text">
                          Make a technology change (described in the next section) that avoided the privately-disclosed
                          vulnerabilities.
                        </span>
                      </li>
                    </ul>
                    <h5>Help Users Fill in Forms</h5>
                    <p>
                      ”Time management” is the process of organizing and planning how to divide your time between
                      specific activities. Good time management enables you to work smarter..
                    </p>
                    <ul className="ninjadash-blog-list">
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--text">Only be run by an explicit user action</span>
                      </li>
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--text">
                          Show UI in a single plugin-specific dialog
                        </span>
                      </li>
                      <li className="ninjadash-blog-list__item">
                        <span className="ninjadash-blog-list__item--text">
                          Make a technology change (described in the next section) that avoided the privately-disclosed
                          vulnerabilities.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <ul className="ninjadash-category-list">
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Design Process</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Prototype</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Design Process</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Prototype</Link>
                    </li>
                  </ul>
                  <ul className="ninjadash-social-links">
                    <li>Share this article:</li>
                    <li>
                      <Link to="#" className="ninjadash-facebook">
                        <UilFacebook />
                        <span>Share</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ninjadash-twitter">
                        <UilTwitter />
                        <span>Tweet</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ninjadash-linkedin">
                        <UilLinkedin />
                        <span>Share</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="ninjadash-copy">
                        <UilLinkh />
                        <span>Copy</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="ninjadash-blog-author-box">
                    <div className="ninjadash-blog-author-img">
                      <img src={require(`../../../static/img/users/1.png`)} alt="ninjadash Blog" />
                    </div>
                    <div className="ninjadash-blog-author-info">
                      <span>Written By</span>
                      <span className="ninjadash-blog-author-name">Charli Day</span>
                      <p>
                        Charli Day is a British writer and social media manager specializing in dynamic branding,
                        campaign strategy and content engagement.{' '}
                      </p>
                    </div>
                  </div>
                  <div className={shareLinks ? 'ninjadash-share-links show' : 'ninjadash-share-links'}>
                    <span>Share</span>
                    <ul>
                      <li>
                        <Link to="#" className="ninjadash-facebook">
                          <UilFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ninjadash-twitter">
                          <UilTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ninjadash-linkedin">
                          <UilLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ninjadash-link">
                          <UilLinkh />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </BlogDetailsStyle>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default BlogDetails;
