import React from 'react';
import { shallow } from 'enzyme';
import { UnchangedData } from '../../../src/features/diff-docs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<UnchangedData />);
  expect(renderedComponent.find('.diff-docs-unchanged-data').length).toBe(1);
});
