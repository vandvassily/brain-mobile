import AddressCard from '..';
import { mount } from '../../../test';

const addressInfo = {
  address: '北京市东城区',
  name: 'vassily',
  phone: '13000000000'
};

test('create a AddressCard', () => {
  const wrapper = mount(AddressCard);

  expect(wrapper).toMatchSnapshot();
});

test('create a AddressCard with props', () => {
  const wrapper = mount(AddressCard, {
    propsData: {
      addressInfo
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('valid area placeholder confirm', async () => {
  const wrapper = mount(AddressCard, {
    propsData: {
      addressInfo
    }
  });

  const field = wrapper.findAll('.address-card').at(0);
  field.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});
