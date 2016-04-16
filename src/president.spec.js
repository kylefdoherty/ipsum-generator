import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import President from './president';

describe('president', () => {
  it('displays the displayName passed to it', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<President displayName='John Doe' />)

    const output = renderer.getRenderOutput();
    const expected = <p>John Doe</p>

    expect(output).toIncludeJSX(expected);
  });

  context('when selected is true', () => {
    it('has the class z-depth-1', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<President selected={true} />)

      const output = renderer.getRenderOutput().props.children.props.children[0].props.className;
      const expected = 'z-depth-1';

      expect(output).toEqual(expected)
    })
  })

  context('when selected is false', () => {
    it('has the class z-depth-3', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<President selected={false} />)

      const output = renderer.getRenderOutput().props.children.props.children[0].props.className;
      const expected = 'z-depth-3';

      expect(output).toEqual(expected)
    })
  })
});
