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

describe('admin user create component', function() {
  var component;

  beforeEach(inject(function($componentController) {
    component = $componentController('adminUserCreate', null, {
      teams: teams
    });
  }));

  it('should init scope with prop teams', function() {
    expect(component.teams.length).toBe(2);
  });

  it('should init scope with empty user', function() {
    expect(component.user.name).toBe('');
    expect(component.user.password).toBe('');
    expect(component.user.team_id).toBe(null);
    expect(component.user.role).toBe('user');
  });
});