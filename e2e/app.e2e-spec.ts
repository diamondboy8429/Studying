import { StudyingPage } from './app.po';

describe('studying App', function() {
  let page: StudyingPage;

  beforeEach(() => {
    page = new StudyingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
