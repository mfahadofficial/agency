import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private apiURL = "https://jsonplaceholder.typicode.com";
  apiKey = 'niL91YQ2qXDNYgOX6MKTfuYUkSCYeOp9obhuhGhy';
  url : any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getAgencies() {
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
    return this.httpClient.get('https://api.foia.gov/api/agency_components?&fields%5Bagency_component%5D=title,abbreviation,website,submission_address', {headers: headers});
  }

  getPaginateAgencies10(val:any) {
    console.log(val);
    this.url = 'https://api.foia.gov/api/agency_components?&&fields[agency_component]=title,abbreviation,website,submission_address&page[limit]=10';
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
  return this.httpClient.get(this.url, {    headers: headers}); 
  }

  getPaginateAgencies15() {
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
  return this.httpClient.get('https://api.foia.gov/api/agency_components?&&fields[agency_component]=title,abbreviation,website,submission_address&page[limit]=15', {headers: headers});  
  }
  getPaginateAgencies20() {
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
  return this.httpClient.get('https://api.foia.gov/api/agency_components?&&fields[agency_component]=title,abbreviation,website,submission_address&page[limit]=20', {headers: headers});   
  }

  getPaginateAgencies50() {
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
  return this.httpClient.get('https://api.foia.gov/api/agency_components?&&fields[agency_component]=title,abbreviation,website,submission_address&page[limit]=50', {headers: headers});
  }

  nextPaginate(val:any) {
    console.log(val);
    this.url = val;
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
  return this.httpClient.get(this.url, {headers: headers});
  }

  prePaginate(val:any) {
    this.url = val;
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);
  return this.httpClient.get(this.url, {headers: headers});
  }


  getAgencyDetail(id: any) {
    // console.log(id);
    let headers = new HttpHeaders().set('X-API-Key', this.apiKey);

    return this.httpClient.get('https://api.foia.gov/api/agency_components/' + id, {headers: headers});
  }
  
}
