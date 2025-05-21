import { mount, VueWrapper } from '@vue/test-utils';
import { beforeAll, describe, it } from 'vitest';
import App from '../App.vue';
let wrapper: VueWrapper;

describe('App test', () => {
  beforeAll(() => {
    wrapper = mount(App);
  });

  it('should show hello world text', () => {
    expect(wrapper.text()).toContain('Hello World');
  });
});
