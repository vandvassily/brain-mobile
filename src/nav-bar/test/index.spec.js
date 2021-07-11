import { mount } from '@vue/test-utils';
import NavBar from '..';

test('should render title slot and match snapshot', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      title: 'Custom Title',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should emit click-left event when clicking left text', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      leftText: 'left',
    },
  });

  wrapper.find('.nav-bar__left').trigger('click');
  expect(wrapper.emitted('click-left')).toBeTruthy();
});

test('should emit click-right event when clicking right text', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      rightText: 'right',
    },
  });

  wrapper.find('.nav-bar__right').trigger('click');
  expect(wrapper.emitted('click-right')).toBeTruthy();
});
