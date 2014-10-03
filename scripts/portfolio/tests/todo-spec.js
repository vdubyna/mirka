describe('portfolio header', function() {


  it('should contain valid name', function() {
    browser.get('#/');
    var name = element(by.css('li.name h1 a'));

    expect(name.getText()).toEqual('My Portfolio');
  });
});

