import UilSlidersV from '@iconscout/react-unicons/icons/uil-sliders-v';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { CheckboxGroup } from '../../../components/checkbox/checkbox';
import Heading from '../../../components/heading/heading';
import { Slider } from '../../../components/slider/slider';
import { Sidebar, SidebarSingle } from '../Style';

const Filters = React.memo(() => {
  const [state, setState] = useState({
    min: 10,
    max: 100,
  });

  const { min, max } = state;
  const onChange = (value) => {
    setState({
      ...state,
      min: value[0],
      max: value[1],
    });
    // dispatch(filterByPriceRange(value));
  };

  const optionsJobTypes = [
    {
      label: (
        <>
          Freelance <span className="brand-count">25</span>
        </>
      ),
      value: 'freelance',
    },
    {
      label: (
        <>
          Full Time <span className="brand-count">25</span>
        </>
      ),
      value: 'full',
    },
    {
      label: (
        <>
          Part Time <span className="brand-count">25</span>
        </>
      ),
      value: 'part',
    },
    {
      label: (
        <>
          Internship <span className="brand-count">25</span>
        </>
      ),
      value: 'internship',
    },
    {
      label: (
        <>
          Contract <span className="brand-count">25</span>
        </>
      ),
      value: 'contract',
    },
    {
      label: (
        <>
          Temporary <span className="brand-count">25</span>
        </>
      ),
      value: 'temporary',
    },
  ];

  const industry = [
    {
      label: (
        <>
          Designer Graphics <span className="brand-count">25</span>
        </>
      ),
      value: 'Graphics',
    },
    {
      label: (
        <>
          Development <span className="brand-count">25</span>
        </>
      ),
      value: 'Development',
    },
    {
      label: (
        <>
          Management <span className="brand-count">25</span>
        </>
      ),
      value: 'Management',
    },
    {
      label: (
        <>
          Finance <span className="brand-count">25</span>
        </>
      ),
      value: 'Finance',
    },
    {
      label: (
        <>
          Banking <span className="brand-count">25</span>
        </>
      ),
      value: 'Banking',
    },
    {
      label: (
        <>
          Customer Support <span className="brand-count">25</span>
        </>
      ),
      value: 'Customer Support',
    },
  ];

  const salary = [
    {
      label: (
        <>
          Hourly <span className="brand-count">25</span>
        </>
      ),
      value: 'Hourly',
    },
    {
      label: (
        <>
          Weekly <span className="brand-count">25</span>
        </>
      ),
      value: 'Weekly',
    },
    {
      label: (
        <>
          Monthly <span className="brand-count">25</span>
        </>
      ),
      value: 'Monthly',
    },
    {
      label: (
        <>
          Yearly <span className="brand-count">25</span>
        </>
      ),
      value: 'Yearly',
    },
  ];

  const datePosted = [
    {
      label: (
        <>
          Last Hour <span className="brand-count">25</span>
        </>
      ),
      value: 'last',
    },
    {
      label: (
        <>
          Last 24 hours <span className="brand-count">25</span>
        </>
      ),
      value: '24h',
    },
    {
      label: (
        <>
          7 days <span className="brand-count">25</span>
        </>
      ),
      value: '7d',
    },
    {
      label: (
        <>
          14 days <span className="brand-count">25</span>
        </>
      ),
      value: '14d',
    },
    {
      label: (
        <>
          30 days <span className="brand-count">25</span>
        </>
      ),
      value: '30d',
    },
    {
      label: (
        <>
          All <span className="brand-count">25</span>
        </>
      ),
      value: 'all',
    },
  ];

  return (
    <Sidebar>
      <Cards
        title={
          <span>
            <UilSlidersV />
            Filters
          </span>
        }
      >
        <SidebarSingle className="mb-30">
          <Heading as="h5">Distance</Heading>
          <p className="price-range-text">
            Within 30 miles of <strong>New York, NY</strong>
          </p>
          <Slider max={100} onChange={onChange} defaultValue={30} />
          <p className="price-range-value">
            <span>{min} miles</span> <span>{max} miles</span>
          </p>
        </SidebarSingle>

        <SidebarSingle className="mb-30">
          <Heading as="h5">Job Types</Heading>
          <CheckboxGroup options={optionsJobTypes} />

          <div className="sidebar-single__action">
            <Link className="btn-seeMore" to="#">
              See more
            </Link>
          </div>
        </SidebarSingle>

        <SidebarSingle className="mb-30">
          <Heading as="h5">Industry</Heading>
          <CheckboxGroup options={industry} />

          <div className="sidebar-single__action">
            <Link className="btn-seeMore" to="#">
              See more
            </Link>
          </div>
        </SidebarSingle>

        <SidebarSingle className="mb-30">
          <Heading as="h5">Salary</Heading>
          <CheckboxGroup options={salary} />
        </SidebarSingle>

        <SidebarSingle>
          <Heading as="h5">Date Posted</Heading>
          <CheckboxGroup options={datePosted} />
        </SidebarSingle>
      </Cards>
    </Sidebar>
  );
});

export default Filters;
