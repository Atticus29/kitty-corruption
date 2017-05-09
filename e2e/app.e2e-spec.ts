import { KittyCorruptionPage } from './app.po';

describe('kitty-corruption App', () => {
  let page: KittyCorruptionPage;

  beforeEach(() => {
    page = new KittyCorruptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
