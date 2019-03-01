import { InMemoryDbService } from 'angular-in-memory-web-api';

import {CandidateDetails} from '../Models/CandidateDetails';

export class InMemoryCandidatesDataService implements InMemoryDbService {
  createDb() {

const candidateDetailsData: CandidateDetails[] = [  
  {id:1, CandidateName:"Ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"4",  Status:"Reviewed",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:2, CandidateName:"Madhurya", RefferedEmpName:"sravani", JobTitile:"python", Resume:"path",  Rating:"3",  Status:"Pending",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:3, CandidateName:"Prachi", RefferedEmpName:"sravani", JobTitile:"Python", Resume:"path",  Rating:"2",  Status:"On hold",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:4, CandidateName:"Sowmya", RefferedEmpName:"sravani", JobTitile:"BI", Resume:"path",  Rating:"4",  Status:"Scheduled interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:5, CandidateName:"Preethi", RefferedEmpName:"sravani", JobTitile:"BI", Resume:"path",  Rating:"3",  Status:"On hold",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:6, CandidateName:"Geetha", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"1",  Status:"Rejected",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:7, CandidateName:"Sitha", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"4",  Status:"Scheduled Interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" }

 ];
    return {candidateDetailsData};
  }
}