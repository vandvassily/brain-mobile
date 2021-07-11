import { mount } from '@vue/test-utils';
import Icon from '..';

test('should render title slot and match snapshot', () => {
  const wrapper = mount(Icon, {
    propsData: {
      iconName: 'arrow-left',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
