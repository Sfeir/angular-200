import { Angular2200Page } from './app.po';

describe('angular2-200 App', function() {
  let page: Angular2200Page;

  beforeEach(() => {
    page = new Angular2200Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
