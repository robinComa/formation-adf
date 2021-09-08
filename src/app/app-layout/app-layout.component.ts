/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ResultSetRowEntry } from '@alfresco/js-api';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {

  constructor(private router: Router) {
  }

  onItemClicked(resultSet: ResultSetRowEntry) {
    this.router.navigate([{
      outlets: {
        overlay: ['files', resultSet.entry.id, 'view']
      }
    }]);
  }

  onSearchSubmit(event: KeyboardEvent)   {
    this.router.navigate(['search-results'], {
      queryParams: { q: (event.target as HTMLInputElement).value }
    });
  }
}
