import { CurricullumPage } from './app.po';

describe('curricullum App', function() {
  let page: CurricullumPage;

  beforeEach(() => {
    page = new CurricullumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
