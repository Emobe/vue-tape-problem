import test from 'tape'
import HelloWorld from './HelloWorld.vue'
import { shallowMount } from '@vue/test-utils';

test('Component should initialise', t => {
  const wrap = shallowMount(HelloWorld)
  t.assert(wrap);
  t.end();
})