// import UilBriefcaseAlt from '@iconscout/react-unicons/icons/uil-briefcase-alt';
// import UilAward from '@iconscout/react-unicons/icons/uil-award';
import * as Unicons from '@iconscout/react-unicons';
import propTypes from 'prop-types';
import React from 'react';
import { InfoCardStyle } from './Style';

function InfoCard({ icon, text, counter, type }) {
  const IconTag = Unicons[icon];
  return (
    <InfoCardStyle type={type}>
      <span className="ninjadash-infocard-icon">
        <IconTag />
      </span>
      <p className="ninjadash-infocard-text">{text}</p>
      <h2 className="ninjadash-infocard-label">{counter}</h2>
    </InfoCardStyle>
  );
}

InfoCard.propTypes = {
  counter: propTypes.string,
  text: propTypes.string,
  icon: propTypes.string,
  type: propTypes.oneOf(['primary', 'secondary']),
};

InfoCard.defaultProps = {
  counter: '21k',
  text: 'Total Products',
  icon: 'briefcase',
  type: 'primary',
};

export default InfoCard;
