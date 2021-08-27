import GiftCard from '..';
import { mount } from '../../../test';

test('create a GiftCard', () => {
  const wrapper = mount(GiftCard);

  expect(wrapper).toMatchSnapshot();
});
