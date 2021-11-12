import { Component, OnInit, ViewChild } from '@angular/core';
import { AgencyService } from '../services/agency.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agency: any;
  loading: boolean = true;
  data : any;
  links : any;
  jsonApi : any;
  numbers : any;
  dataSource : any;

  title = 'pagination';



  constructor(public agencyService: AgencyService, private router: Router) {   }


  ngOnInit(): void {
    this.agencyService.getAgencies()
    .subscribe((resp : any) => {
     this.data = resp.data;
     this.links = resp.links;
     console.log(this.links);
     this.jsonApi = resp.jsonapi;
     this.loading = false;
     this.agency = resp.data;
    var temp = new Array(); 

    for (let property in  this.data) {
      this.data[property].attributes.links = this.data[property].links;
      this.data[property].attributes.id = this.data[property].id;
      temp.push(this.data[property].attributes);

    }

    this.numbers = temp;
    this.dataSource = this.numbers;
    });

    }

    getPaginateAgencies(val:any){

                    if(val == '10'){
                  
                                          this.agencyService.getPaginateAgencies10(val)
                                          .subscribe((resp : any) => {
                                          this.data = resp.data;
                                          this.links = resp.links;
                                          this.loading = false;
                                          this.agency = resp.data;
                                          var temp = new Array(); 
                                          for (let property in  this.data) {
                                            this.data[property].attributes.links = this.data[property].links;
                                            this.data[property].attributes.id = this.data[property].id;
                                            temp.push(this.data[property].attributes);
                                          }
                                          this.numbers = temp;
                                          console.log(this.numbers);
                                          this.dataSource = this.numbers;
                                          });

                                    }

                    if(val == '15'){
                  
                                      this.agencyService.getPaginateAgencies15()
                                      .subscribe((resp : any) => {
                                      this.data = resp.data;
                                      this.links = resp.links;
                                      this.loading = false;
                                      this.agency = resp.data;
                                      var temp = new Array(); 

                                      for (let property in  this.data) {
                                        this.data[property].attributes.links = this.data[property].links;
                                        this.data[property].attributes.id = this.data[property].id;
                                        temp.push(this.data[property].attributes);
                                      }

                                      this.numbers = temp;
                                      console.log(this.numbers);
                                      this.dataSource = this.numbers;
                                      });

                                }


                 if(val == '20'){
                  
                                  this.agencyService.getPaginateAgencies20()
                                  .subscribe((resp : any) => {
                                  this.data = resp.data;
                                  this.links = resp.links;
                                  this.loading = false;
                                  this.agency = resp.data;
                                  var temp = new Array(); 

                                  for (let property in  this.data) {
                                    this.data[property].attributes.links = this.data[property].links;
                                    this.data[property].attributes.id = this.data[property].id;
                                    temp.push(this.data[property].attributes);
                                  }
                                  this.numbers = temp;
                                  console.log(this.numbers);
                                  this.dataSource = this.numbers;
                                  });

                            }

              if(val == '50'){
                  
                                  this.agencyService.getPaginateAgencies50()
                                  .subscribe((resp : any) => {
                                  this.data = resp.data;
                                  this.links = resp.links;
                                  this.dataSource = resp.data;
                                  this.loading = false;
                                  this.agency = resp.data;
                                  var temp = new Array(); 

                                  for (let property in  this.data) {
                                    this.data[property].attributes.links = this.data[property].links;
                                    this.data[property].attributes.id = this.data[property].id;
                                    temp.push(this.data[property].attributes);
                                  }

                                  this.numbers = temp;
                                  console.log(this.numbers);
                                  this.dataSource = this.numbers;
                                  });

                            }
    }

    next(val:any){
      // console.log(val);


      this.agencyService.nextPaginate(val)
      .subscribe((resp : any) => {
      this.data = resp.data;
      this.links = resp.links;
      this.loading = false;
      this.agency = resp.data;
      var temp = new Array(); 
      for (let property in  this.data) {
        this.data[property].attributes.links = this.data[property].links;
        this.data[property].attributes.id = this.data[property].id;
        temp.push(this.data[property].attributes);
      }
      this.numbers = temp;
      // console.log(this.numbers);
      this.dataSource = this.numbers;
      });
      



    }


    previous(val:any){
      console.log('test');


      this.agencyService.prePaginate(val)
      .subscribe((resp : any) => {
      this.data = resp.data;
      this.links = resp.links;
      this.loading = false;
      this.agency = resp.data;
      var temp = new Array(); 
      for (let property in  this.data) {
        this.data[property].attributes.links = this.data[property].links;
        this.data[property].attributes.id = this.data[property].id;
        temp.push(this.data[property].attributes);
      }
      this.numbers = temp;
      console.log(this.numbers);
      this.dataSource = this.numbers;
      });
      



    }


    detail(val:any){
      console.log(val);
      this.router.navigate([ '/agency-detail',  val])
    }

    
  }


