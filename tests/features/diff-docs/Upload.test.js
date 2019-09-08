import React from 'react';
import { shallow } from 'enzyme';
import { Upload } from '../../../src/features/diff-docs/Upload';

describe('diff-docs/Upload', () => {
  it('renders node with correct class name', () => {
    const props = {
      diffDocs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Upload {...props} />
    );

    expect(
      renderedComponent.find('.diff-docs-upload').length
    ).toBe(1);
  });
});
