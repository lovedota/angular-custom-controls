import { AngularCustomControlsPage } from './app.po';

describe('angular-custom-controls App', () => {
  let page: AngularCustomControlsPage;

  beforeEach(() => {
    page = new AngularCustomControlsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
