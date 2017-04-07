import { ChartsDemoPage } from './app.po';

describe('charts-demo App', function() {
  let page: ChartsDemoPage;

  beforeEach(() => {
    page = new ChartsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
