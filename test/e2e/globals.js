// Copyright 2017 Red Hat, Inc.
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

const chromedriver = require("chromedriver");

module.exports = {
  before: function(done) {
    chromedriver.start();
    setTimeout(() => {
      console.log("wait for chromedriver to start");
      done();
    }, 10000);
  },

  after: function(done) {
    chromedriver.stop();
    done();
  }
};
