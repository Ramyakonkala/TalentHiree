
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

    ngOnInit() {
        // this.policyService.getPolicies().subscribe((data : any[])=>{
        //     console.log(data);
        //     this.policies = data;
        // })
          this.candidateDetailsService.getAllCandidates().subscribe((data : any[])=>{
            console.log(data);
            this.candidateDetails = data;
          })  
        
        // this.candidateDetails = [
        //         {id:1, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
        //         {id:2, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
        //         {id:3, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
        //         {id:4, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
        //         {id:5, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
        //         {id:6, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
        //         {id:7, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" }
        //     ]
       
        
        this.cols = [
            { field: 'CandidateName', header: 'CandidateName' },
            { field: 'Resume', header: 'Resume' },
            { field: 'Status', header: 'Status' },
            { field: 'Actions', header: 'Actions' }
        ];
    }
}
