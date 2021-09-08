import { TestBed } from '@angular/core/testing';

import { NoauthRedirectInterceptor } from './noauth-redirect.interceptor';

describe('NoauthRedirectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NoauthRedirectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NoauthRedirectInterceptor = TestBed.inject(NoauthRedirectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
