import { TestAngularAppPage } from './app.po';

describe('test-angular-app App', () => {
  let page: TestAngularAppPage;

  beforeEach(() => {
    page = new TestAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
