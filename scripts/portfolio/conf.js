exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/todo-spec.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  baseUrl: "http://localhost:63342/mirka/index.html",
  onPrepare: function() {
// implicit and page load timeouts
    browser.manage().timeouts().pageLoadTimeout(6000);
    browser.manage().timeouts().implicitlyWait(3000);

// for non-angular page
    browser.ignoreSynchronization = true;
  }
};
