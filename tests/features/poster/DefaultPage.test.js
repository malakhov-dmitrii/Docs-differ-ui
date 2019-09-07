import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/poster/DefaultPage';

describe('poster/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      poster: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.poster-default-page').length
    ).toBe(1);
  });
});
