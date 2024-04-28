import { fixture } from '@pap-it/tools-test';

describe('Vector', function () {
  describe('base tests', function () {
    it('web-component should exists', function () {
      const elm = fixture('pap-vector');

      if (!elm) {
        throw new Error('element not created')
      }

      const docelm = document.querySelector(`pap-vector[data-testid="${elm.getAttribute('data-testid')}"]`);
      
      if (!docelm) {
        throw new Error('element not found');
      }
    });
  });
});