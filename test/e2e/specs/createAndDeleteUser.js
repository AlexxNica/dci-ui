// Copyright 2015 Red Hat, Inc.
//
// Licensed under the Apache License, Version 2.0 (the 'License'); you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

const shortcuts = require("./shortcuts");

module.exports = {
  "Can create and delete a user": function(browser) {
    const userName = Date.now();
    shortcuts(browser)
      .login()
      .goAndWaitH1("#navbar-primary__admin-users-link", "Users")
      .goAndWaitH1("#admin__create-user-btn", "Create a new user");

    browser
      .waitForElementVisible("#userName")
      .clearValue("#userName")
      .setValue("#userName", userName)
      .clearValue("#fullName")
      .setValue("#fullName", userName)
      .clearValue("#email")
      .setValue("#email", `${userName}@example.org`)
      .clearValue("#userPassword")
      .setValue("#userPassword", userName)
      .click('select[id="selectTeam"]')
      .waitForElementVisible("option[name='admin']")
      .click("option[name='admin']")
      .click('select[id="selectRole"]')
      .waitForElementVisible("option[name='User']")
      .click("option[name='User']")
      .waitForElementVisible("#createButton")
      .click("#createButton")
      .useXpath()
      .waitForElementPresent(`//tr[td/text()="${userName}"]`)
      .useCss()
      .waitForElementVisible(".btn-danger")
      .click(".btn-danger")
      .useXpath()
      .waitForElementVisible(`//button[text()="Yes delete ${userName}"]`)
      .click(`//button[text()="Yes delete ${userName}"]`)
      .waitForElementNotPresent(`//a[text()="${userName}"]`)
      .useCss();

    shortcuts(browser)
      .logout()
      .end();
  }
};
