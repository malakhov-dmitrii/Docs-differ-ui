import React from 'react';
import { shallow } from 'enzyme';
import { SectionContainer } from '../../../src/features/diff-docs/SectionContainer/SectionContainer';

describe('diff-docs/SectionContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      diffDocs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SectionContainer {...props} />
    );

    expect(
      renderedComponent.find('.diff-docs-section-container').length
    ).toBe(1);
  });
});
