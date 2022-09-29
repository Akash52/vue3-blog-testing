import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import Timeline from '../../src/components/TimeLine.vue';
import { today, thisWeek, thisMonth } from '../../src/mocks';

describe('Timeline', () => {
  it('renders a timeline', () => {
    const wrapper = mount(Timeline);
    console.log(wrapper.html());
    expect(wrapper.html()).toContain(today.created.format('Do MMM'));
  });

  //requestAnimationFrame(()=>...)

  it('update when the period is click', async () => {
    const wrapper = mount(Timeline);

    await wrapper.get('[data-test="This Week"]').trigger('click');

    // await nextTick();
    //Wait for the next frame
    expect(wrapper.html()).toContain(today.created.format('Do MMM'));
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM'));
  });

  it('update when the period is click', async () => {
    const wrapper = mount(Timeline);

    await wrapper.get('[data-test="This Month"]').trigger('click');

    // await nextTick();
    //Wait for the next frame
    expect(wrapper.html()).toContain(today.created.format('Do MMM'));
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM'));
    expect(wrapper.html()).toContain(thisMonth.created.format('Do MMM'));
  });
});
