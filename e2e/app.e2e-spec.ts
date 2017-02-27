import { AjitThemePage } from './app.po';

describe('ajit-theme App', () => {
  let page: AjitThemePage;

  beforeEach(() => {
    page = new AjitThemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
