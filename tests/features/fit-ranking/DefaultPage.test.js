import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/fit-ranking/DefaultPage';

describe('fit-ranking/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      fitRanking: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.fit-ranking-default-page').length
    ).toBe(1);
  });
});
