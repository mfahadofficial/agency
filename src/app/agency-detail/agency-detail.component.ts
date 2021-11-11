import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../services/agency.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.css']
})
export class AgencyDetailComponent implements OnInit {


  agency: any;
  loading: boolean = true;
  data : any;
  links : any;
  jsonApi : any;
  numbers : any;
  dataSource : any; 
  id : any;

  constructor(public agencyService: AgencyService,
     private router: Router,
     private route: ActivatedRoute,) { }

  ngOnInit(): void {

                      this.id = this.route.snapshot.params['Id'];
                      

                      this.agencyService.getAgencyDetail(this.id)
                      .subscribe((resp : any) => {
                        // console.log(resp);
                      this.data = resp.data;
                      this.links = resp.links;
                       console.log(this.data);
                      this.jsonApi = resp.jsonapi;
                      //  console.log(this.jsonApi);
                      this.loading = false;
                      this.agency = resp.data;
                      var temp = new Array(); 

                      for (let property in  this.data) {
                        // console.log(this.data.attributes);
                        this.data.attributes.relationships = this.data.relationships;
                      
                        temp.push(this.data.attributes);

                      }

                      this.numbers = temp;
                      // console.log(this.numbers);
                      this.dataSource = this.numbers;
                      });


  }

  // detail(val:any){
  //   // console.log(val);
  //   this.router.navigate([ '/agency-detail',  val])
  // }

}
