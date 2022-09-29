import { mount } from '@vue/test-utils';
import Timeline from '../../src/components/TimeLine.vue';
import { today } from '../../src/mocks';

describe('Timeline', () => {
  it('renders a timeline', () => {
    const wrapper = mount(Timeline);
    expect(wrapper.html()).toContain(today.created.format('Do MMM'));
  });
});
