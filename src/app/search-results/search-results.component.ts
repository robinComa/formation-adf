import { ResultSetRowEntry } from '@alfresco/js-api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchTerm = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe((queryParams) => this.searchTerm = queryParams.q);
  }
  
  elementClicked(resultSet: ResultSetRowEntry) {
    this.router.navigate([{
      outlets: {
        overlay: ['files', resultSet.entry.id, 'view']
      }
    }]);
  }

  onFocus(event) {
    console.log(event);
  }

  onBlur(event) {
    console.log(event);
  }
}