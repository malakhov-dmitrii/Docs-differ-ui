import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/diff-docs/DefaultPage';

describe('diff-docs/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      diffDocs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.diff-docs-default-page').length
    ).toBe(1);
  });
});
