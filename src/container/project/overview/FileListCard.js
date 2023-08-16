import React from 'react';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import PropTypes from 'prop-types';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

function FileListCard({ title }) {
  return (
    <Cards title={title}>
      <div className="file-list">
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/zip.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Main-admin-design.zip</span>
              <span className="file-size">7.05 MB</span>
              <span className="file-content-action">
                <Link to="/">Download</Link>
              </span>
            </div>
          </div>
          <div className="file-single-action">
            <Dropdown
              className="wide-dropdwon"
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/pdf.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Product-guidelines.pdf</span>
              <span className="file-size">522 KB</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
          <div className="file-single-action">
            <Dropdown
              className="wide-dropdwon"
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/psd.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">admin-wireframe.psd</span>
              <span className="file-size">2.05 MB</span>
              <span className="file-content-action">
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
          <div className="file-single-action">
            <Dropdown
              className="wide-dropdwon"
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/jpg.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Wirefram-escreenshots.jpg</span>
              <span className="file-size">522 KB</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
          <div className="file-single-action">
            <Dropdown
              className="wide-dropdwon"
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/png.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Logo.png</span>
              <span className="file-size">522 KB</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
          <div className="file-single-action">
            <Dropdown
              className="wide-dropdwon"
              content={
                <div className="dropdown-more">
                  <>
                    <Link to="#">
                      <UilEye />
                      Viewt
                    </Link>
                    <Link to="#">
                      <UilEdit />
                      Edit
                    </Link>
                    <Link to="#">
                      <UilTrashAlt />
                      Delete
                    </Link>
                  </>
                </div>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </div>
        {/* End of .file-list__single */}
      </div>
    </Cards>
  );
}

FileListCard.defaultProps = {
  title: 'File',
};

FileListCard.propTypes = {
  title: PropTypes.string,
};

export default FileListCard;
