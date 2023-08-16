import { List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TeamListStyle } from './Style';
import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';

import teamData from '../../../../demoData/teamMembers.json';

function TeamList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const team = teamData.slice(0, 5);
    if (!unmounted) {
      setData(team);
    }

    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, []);

  const handleActive = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  return (
    <BorderLessHeading>
      <Cards title="Team Members" size="large">
        <TeamListStyle>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  className="ninjadash-status-online"
                  avatar={<img src={require(`../../../../${item.img}`)} alt="ninjadash Team" />}
                  title={<Link to="#">{item.name}</Link>}
                  description="online"
                />
                <Button onClick={handleActive} type="primary">
                  Add
                </Button>
              </List.Item>
            )}
          />
        </TeamListStyle>
      </Cards>
    </BorderLessHeading>
  );
}

export default TeamList;
