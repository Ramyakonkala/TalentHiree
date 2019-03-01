
import { Component, Input,OnInit } from '@angular/core';
import { CandidateDetails } from '../models/CandidateDetails';
import { CandidateDetailsService } from '../service/candidatedetails/candidatedetails.service';
import { trigger,state,style,transition,animate } from '@angular/animations';


@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class GridComponent implements OnInit {

    candidateDetails: CandidateDetails[];

    cols: any[];

    constructor(private candidateDetailsService: CandidateDetailsService) { }

    
  display: boolean = false;
    showDialog() {
        this.display = true;
    }
  

    ngOnInit() {
    
          this.candidateDetailsService.getAllCandidates().subscribe((data : any[])=>{
            console.log(data);
            this.candidateDetails = data;
          })  
               
        this.cols = [
            { field: 'CandidateName', header: 'CandidateName' },
            { field: 'JobTitile', header: 'JobTitile' },
            { field: 'Rating', header: 'Rating' },
            { field: 'Status', header: 'Status' },
            { field: 'Actions', header: 'Actions' }
        ];
    }
}
