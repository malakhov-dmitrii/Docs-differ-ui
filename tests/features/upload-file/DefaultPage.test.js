import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/upload-file/DefaultPage';

describe('upload-file/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      uploadFile: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.upload-file-default-page').length
    ).toBe(1);
  });
});
