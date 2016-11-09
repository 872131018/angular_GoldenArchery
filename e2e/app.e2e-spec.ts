import { AngularGoldenArcheryPage } from './app.po';

describe('angular-golden-archery App', function() {
  let page: AngularGoldenArcheryPage;

  beforeEach(() => {
    page = new AngularGoldenArcheryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
