import { InMemoryDbService } from 'angular-in-memory-web-api';

import {CandidateDetails} from '../Models/CandidateDetails';

export class InMemoryCandidatesDataService implements InMemoryDbService {
  createDb() {

const candidateDetailsData: CandidateDetails[] = [  
  {id:1, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:2, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:3, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:4, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:5, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:6, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:7, CandidateName:"ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"5",  Status:"called for interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" }

 ];
    return {candidateDetailsData};
  }
}