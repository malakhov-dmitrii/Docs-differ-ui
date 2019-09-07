import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../../src/features/poster/Form';

describe('poster/Form', () => {
  it('renders node with correct class name', () => {
    const props = {
      poster: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Form {...props} />
    );

    expect(
      renderedComponent.find('.poster-form').length
    ).toBe(1);
  });
});
