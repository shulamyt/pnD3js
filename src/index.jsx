import React from 'react';
import { render } from 'react-dom';
// import './index.scss';

import Pnd from './pnd';

const div = document.createElement('div');
document.body.append(div);

var plan = {
    "id": "73138AF15E8E4AF4B49670E27F2C38031531197610",
    "action": "CREATE",
    "state": "In Progress",
    "versionNumber": 1,
    "createDate": "2018-07-10T04:40:10.244+0000",
    "estimatedStartDate": "2018-07-19T04:39:48.000+0000",
    "estimatedEndDate": "2018-08-01T18:00:48.000+0000",
    "currentStartDate": "2018-07-10T04:40:10.932+0000",
    "currentEndDate": "2018-07-23T18:00:10.932+0000",
    "specification": {
        "id": "Small_Cell_CIQ_SC"
    },
    "actualStartDate": "2018-07-10T04:40:12.906+0000",
    "type": "Do",
    "planType": "INTERNAL",
    "projectId": "Project36",
    "errorCounter": 0,
    "dependencyPlan": {
        "depedencyGroup": [
            {
                "id": "UNDEFINED",
                "entity": [
                    {
                        "entityId": "16984DB7DFB64F17811E13C2E234F7D0",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "3B82C2E3A1E44C2DBF3F11EED97B22C7",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "65C692D319634407A4CE6D2A7CD6F4EB",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "81FCE84057F14F5584EFBA48D0D3B779",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "44ABC0F6DDAD49CB87B2C114AB05485E",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "89DDD05665424CFCA5B2994518741600",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "59BA970F720E49A6ADC7D1FF05E7FFD7",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "0BB424B81002414C80DEE3888C3678F8",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "CCA23BAEE82942BA9332396FD4542905",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "715BA74A758B479BBCA4BDB648A57A5A",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "EE5DE9C2E4A74D0FB64872205FFD245F",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "DD165DB671EB4A818A3628AB709CCEB3",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "8924155345C944C49789B99B0B32453C",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "941D8C6A700746378CEA199D0719816F",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "6C635FA4175541588DC6AD69055C9EA3",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    },
                    {
                        "entityId": "3378FC8B5F3E48DC8284C7FE6D5C5880",
                        "type": {
                            "value": "ACTIVITY"
                        }
                    }
                ]
            }
        ],
        "entityDependencyDescriptor": [
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "3B82C2E3A1E44C2DBF3F11EED97B22C7",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "16984DB7DFB64F17811E13C2E234F7D0",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "65C692D319634407A4CE6D2A7CD6F4EB",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "CCA23BAEE82942BA9332396FD4542905",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "81FCE84057F14F5584EFBA48D0D3B779",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "65C692D319634407A4CE6D2A7CD6F4EB",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "44ABC0F6DDAD49CB87B2C114AB05485E",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "89DDD05665424CFCA5B2994518741600",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "59BA970F720E49A6ADC7D1FF05E7FFD7",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "0BB424B81002414C80DEE3888C3678F8",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "CCA23BAEE82942BA9332396FD4542905",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "44ABC0F6DDAD49CB87B2C114AB05485E",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "CCA23BAEE82942BA9332396FD4542905",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "89DDD05665424CFCA5B2994518741600",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "CCA23BAEE82942BA9332396FD4542905",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "59BA970F720E49A6ADC7D1FF05E7FFD7",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "CCA23BAEE82942BA9332396FD4542905",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "0BB424B81002414C80DEE3888C3678F8",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "3B82C2E3A1E44C2DBF3F11EED97B22C7",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "715BA74A758B479BBCA4BDB648A57A5A",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "3B82C2E3A1E44C2DBF3F11EED97B22C7",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "DD165DB671EB4A818A3628AB709CCEB3",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "EE5DE9C2E4A74D0FB64872205FFD245F",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "8924155345C944C49789B99B0B32453C",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "DD165DB671EB4A818A3628AB709CCEB3",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "941D8C6A700746378CEA199D0719816F",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "8924155345C944C49789B99B0B32453C",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "6C635FA4175541588DC6AD69055C9EA3",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "941D8C6A700746378CEA199D0719816F",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            },
            {
                "dependencyType": {
                    "value": "STATUS_TO_STATUS"
                },
                "dependentStatus": "Not Started",
                "parentStatus": "Completed",
                "dependent": {
                    "entityId": "3378FC8B5F3E48DC8284C7FE6D5C5880",
                    "type": {
                        "value": "ACTIVITY"
                    }
                },
                "parent": {
                    "entityId": "6C635FA4175541588DC6AD69055C9EA3",
                    "type": {
                        "value": "ACTIVITY"
                    }
                }
            }
        ],
        "planEntity": [
            {
                "entityId": "16984DB7DFB64F17811E13C2E234F7D0",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "3B82C2E3A1E44C2DBF3F11EED97B22C7",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "65C692D319634407A4CE6D2A7CD6F4EB",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "81FCE84057F14F5584EFBA48D0D3B779",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "44ABC0F6DDAD49CB87B2C114AB05485E",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "89DDD05665424CFCA5B2994518741600",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "59BA970F720E49A6ADC7D1FF05E7FFD7",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "0BB424B81002414C80DEE3888C3678F8",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "CCA23BAEE82942BA9332396FD4542905",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "715BA74A758B479BBCA4BDB648A57A5A",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "EE5DE9C2E4A74D0FB64872205FFD245F",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "DD165DB671EB4A818A3628AB709CCEB3",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "8924155345C944C49789B99B0B32453C",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "941D8C6A700746378CEA199D0719816F",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "6C635FA4175541588DC6AD69055C9EA3",
                "type": {
                    "value": "ACTIVITY"
                }
            },
            {
                "entityId": "3378FC8B5F3E48DC8284C7FE6D5C5880",
                "type": {
                    "value": "ACTIVITY"
                }
            }
        ]
    },
    "needAttention": false,
    "timeStamp": 1531197613646,
    "targetPlanVersion": 0,
    "workBreakDownStructure": [
        {
            "planId": "73138AF15E8E4AF4B49670E27F2C38031531197610",
            "state": "In Progress",
            "id": "3BBE24B27AC141F2AEB2FFD9D8FCDEF4",
            "wbsSpecification": {
                "version": [
                    {
                        "id": "Site_Compliance_code",
                        "versionNumber": 0
                    }
                ]
            },
            "activity": [
                {
                    "id": "DD165DB671EB4A818A3628AB709CCEB3",
                    "activitySpecification": {
                        "id": "f47cf060-dbac-42ff-83ea-9bbfc7e59c25",
                        "version": [
                            {
                                "id": "719c0434-1c82-403b-947b-54645266f75f",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8FED8879B980485684A769E3340C216D"
                    },
                    "duration": {
                        "day": 2,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "Not Started",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.244+0000",
                    "estimatedStartDate": "2018-07-20T18:00:48.000+0000",
                    "estimatedEndDate": "2018-07-24T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-11T18:00:10.932+0000",
                    "currentEndDate": "2018-07-13T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "Not Started",
                    "extension": {
                        "TaskId": null,
                        "TaskOwnerId": null
                    }
                },
                {
                    "id": "6C635FA4175541588DC6AD69055C9EA3",
                    "activitySpecification": {
                        "id": "f5b31b9a-3e96-41a9-ab6c-be09cbdf9cfc",
                        "version": [
                            {
                                "id": "40f50bb6-4f84-4f46-a5ed-a2f9982d8e05",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8FED8879B980485684A769E3340C216D"
                    },
                    "duration": {
                        "day": 1,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "Not Started",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.244+0000",
                    "estimatedStartDate": "2018-07-26T18:00:48.000+0000",
                    "estimatedEndDate": "2018-07-27T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-17T18:00:10.932+0000",
                    "currentEndDate": "2018-07-18T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "Not Started",
                    "extension": {
                        "TaskId": null,
                        "TaskOwnerId": null
                    }
                },
                {
                    "id": "3378FC8B5F3E48DC8284C7FE6D5C5880",
                    "activitySpecification": {
                        "id": "57dfe571-7e95-4d8a-8b13-93e39082549b",
                        "version": [
                            {
                                "id": "4046d4ea-26a3-4973-88ea-688fc39c7d49",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8FED8879B980485684A769E3340C216D"
                    },
                    "duration": {
                        "day": 0,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "Not Started",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.245+0000",
                    "estimatedStartDate": "2018-07-27T18:00:48.000+0000",
                    "estimatedEndDate": "2018-07-27T18:00:48.000+0000",
                    "businessCalendarIndicator": false,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {}
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-18T18:00:10.932+0000",
                    "currentEndDate": "2018-07-18T18:00:10.932+0000",
                    "implementationType": "Automated",
                    "status": "Not Started",
                    "extension": {
                        "AdditionalDetailsExist": "false"
                    }
                },
                {
                    "id": "941D8C6A700746378CEA199D0719816F",
                    "activitySpecification": {
                        "id": "673dbe65-f07f-4265-bdd6-0e7476f7b4bb",
                        "version": [
                            {
                                "id": "9b9bdb4a-2696-4cb6-8c7f-c6c7dac06e48",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8FED8879B980485684A769E3340C216D"
                    },
                    "duration": {
                        "day": 1,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "Optional",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.245+0000",
                    "estimatedStartDate": "2018-07-25T18:00:48.000+0000",
                    "estimatedEndDate": "2018-07-26T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-16T18:00:10.932+0000",
                    "currentEndDate": "2018-07-17T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "Not Started",
                    "extension": {
                        "TaskId": null,
                        "TaskOwnerId": null
                    }
                },
                {
                    "id": "8924155345C944C49789B99B0B32453C",
                    "activitySpecification": {
                        "id": "6c9d5894-dd5e-41d1-ac66-7bfe03d15d3e",
                        "version": [
                            {
                                "id": "e71cbd96-b922-41ae-96c3-9e1885aab092",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8FED8879B980485684A769E3340C216D"
                    },
                    "duration": {
                        "day": 1,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "Optional",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.245+0000",
                    "estimatedStartDate": "2018-07-24T18:00:48.000+0000",
                    "estimatedEndDate": "2018-07-25T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-13T18:00:10.932+0000",
                    "currentEndDate": "2018-07-16T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "Not Started",
                    "extension": {
                        "TaskId": null,
                        "TaskOwnerId": null
                    }
                },
                {
                    "id": "EE5DE9C2E4A74D0FB64872205FFD245F",
                    "activitySpecification": {
                        "id": "7ac4eb5e-df55-4b01-b575-6f976b704ee6",
                        "version": [
                            {
                                "id": "aab132f4-63cf-47c5-8828-651a729819d9",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8FED8879B980485684A769E3340C216D"
                    },
                    "duration": {
                        "day": 2,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "In Progress",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.245+0000",
                    "actualStartDate": "2018-07-10T04:40:12.874+0000",
                    "estimatedStartDate": "2018-07-19T04:39:48.000+0000",
                    "estimatedEndDate": "2018-07-20T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-10T04:40:10.932+0000",
                    "currentEndDate": "2018-07-11T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "In Progress",
                    "extension": {
                        "TaskId": "8A21D01568B14F3BB32B767DF0DAB70C",
                        "TaskOwnerId": null
                    }
                }
            ],
            "needAttention": false,
            "slmDetail": {
                "businessCalendarSpec": {
                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                }
            }
        },
        {
            "planId": "73138AF15E8E4AF4B49670E27F2C38031531197610",
            "state": "In Progress",
            "id": "7520B552A38040F09EE708B8E1E0009F",
            "wbsSpecification": {
                "version": [
                    {
                        "id": "CIQ_code",
                        "versionNumber": 0
                    }
                ]
            },
            "activity": [
                {
                    "id": "3B82C2E3A1E44C2DBF3F11EED97B22C7",
                    "activitySpecification": {
                        "id": "e89f45eb-7676-4b92-acdc-933b00777dac",
                        "version": [
                            {
                                "id": "9e5d6120-c2de-46c6-9598-5fb9ff10f9aa",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8B0C02522A5249F4AF39C661A94D453C"
                    },
                    "duration": {
                        "day": 2,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "Not Started",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.245+0000",
                    "estimatedStartDate": "2018-07-19T18:00:48.000+0000",
                    "estimatedEndDate": "2018-07-23T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-10T18:00:10.932+0000",
                    "currentEndDate": "2018-07-12T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "Not Started",
                    "extension": {
                        "TaskId": null,
                        "TaskOwnerId": null
                    }
                },
                {
                    "id": "16984DB7DFB64F17811E13C2E234F7D0",
                    "activitySpecification": {
                        "id": "c7ef09bf-ad60-4b03-86c1-c031a6058442",
                        "version": [
                            {
                                "id": "9f668037-6052-4d4e-926e-3eff7f277eaa",
                                "versionNumber": 1
                            }
                        ]
                    },
                    "wbs": {
                        "id": "8B0C02522A5249F4AF39C661A94D453C"
                    },
                    "duration": {
                        "day": 1,
                        "hour": 0,
                        "minute": 0
                    },
                    "state": "In Progress",
                    "needAttention": false,
                    "eligible": false,
                    "createdDate": "2018-07-10T04:40:10.245+0000",
                    "actualStartDate": "2018-07-10T04:40:12.937+0000",
                    "estimatedStartDate": "2018-07-19T04:39:48.000+0000",
                    "estimatedEndDate": "2018-07-19T18:00:48.000+0000",
                    "businessCalendarIndicator": true,
                    "plan": {
                        "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                    },
                    "isScheduled": false,
                    "reworkCounter": 0,
                    "reworkReason": {},
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    },
                    "delayInMillis": 0,
                    "currentStartDate": "2018-07-10T04:40:10.932+0000",
                    "currentEndDate": "2018-07-10T18:00:10.932+0000",
                    "implementationType": "Human",
                    "status": "In Progress",
                    "extension": {
                        "TaskId": "5BAC36067D8A45CF9F4F3BD051BE97D5",
                        "TaskOwnerId": null
                    }
                }
            ],
            "subWBS": [
                {
                    "planId": "73138AF15E8E4AF4B49670E27F2C38031531197610",
                    "state": "Not Started",
                    "id": "72D3EFA899D7429088645D2761CCED9A",
                    "wbsSpecification": {
                        "version": [
                            {
                                "id": "LAN_Design_Flow_code",
                                "versionNumber": 0
                            }
                        ]
                    },
                    "activity": [
                        {
                            "id": "715BA74A758B479BBCA4BDB648A57A5A",
                            "activitySpecification": {
                                "id": "4675456f-baa7-4eef-9891-551ad9384875",
                                "version": [
                                    {
                                        "id": "0dc49464-be2d-4d19-a378-192310643b55",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "AD63751E5EBD49C79B14A77799F4DDDE"
                            },
                            "duration": {
                                "day": 2,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Optional",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-23T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-25T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-12T18:00:10.932+0000",
                            "currentEndDate": "2018-07-16T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        }
                    ],
                    "needAttention": false,
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    }
                },
                {
                    "planId": "73138AF15E8E4AF4B49670E27F2C38031531197610",
                    "state": "Not Started",
                    "id": "C5CC4C77C8694A93A066D86C94362CAD",
                    "wbsSpecification": {
                        "version": [
                            {
                                "id": "CIQ_Work_Flow_code",
                                "versionNumber": 0
                            }
                        ]
                    },
                    "activity": [
                        {
                            "id": "59BA970F720E49A6ADC7D1FF05E7FFD7",
                            "activitySpecification": {
                                "id": "8d160bab-9cd9-4541-9aae-0117b5e2af24",
                                "version": [
                                    {
                                        "id": "41826530-fbac-4aec-a787-b9debf60a7ee",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 1,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Optional",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-25T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-26T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-16T18:00:10.932+0000",
                            "currentEndDate": "2018-07-17T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "0BB424B81002414C80DEE3888C3678F8",
                            "activitySpecification": {
                                "id": "f9ebcc6a-1ac5-42b1-920f-46cb25fc2099",
                                "version": [
                                    {
                                        "id": "67c51793-f14a-4fc4-be98-72a8cb47300b",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 2,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Optional",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-25T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-27T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-16T18:00:10.932+0000",
                            "currentEndDate": "2018-07-18T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "81FCE84057F14F5584EFBA48D0D3B779",
                            "activitySpecification": {
                                "id": "acd3b2b7-0825-487d-a526-cc2a2e3ea19f",
                                "version": [
                                    {
                                        "id": "3626e41e-0200-44e3-a921-0880d8608e06",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 2,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Not Started",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-30T18:00:48.000+0000",
                            "estimatedEndDate": "2018-08-01T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-19T18:00:10.932+0000",
                            "currentEndDate": "2018-07-23T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "CCA23BAEE82942BA9332396FD4542905",
                            "activitySpecification": {
                                "id": "0ecbe669-c3da-484e-9ed1-d392b0dca1e9",
                                "version": [
                                    {
                                        "id": "8c380724-e8a8-4eab-9968-57941d451353",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 0,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Not Started",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-27T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-27T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-18T18:00:10.932+0000",
                            "currentEndDate": "2018-07-18T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "44ABC0F6DDAD49CB87B2C114AB05485E",
                            "activitySpecification": {
                                "id": "d61fc0ef-7772-4e68-9c60-6a392b197576",
                                "version": [
                                    {
                                        "id": "4882ea7c-9c51-4383-9f02-f914b55882de",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 2,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Optional",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-25T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-27T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-16T18:00:10.932+0000",
                            "currentEndDate": "2018-07-18T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "65C692D319634407A4CE6D2A7CD6F4EB",
                            "activitySpecification": {
                                "id": "282e28c4-356f-4630-a230-b4662b66900f",
                                "version": [
                                    {
                                        "id": "d05df434-c0c8-4528-8695-a8fae991506c",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 1,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Not Started",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-27T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-30T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-18T18:00:10.932+0000",
                            "currentEndDate": "2018-07-19T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "B4405BF8C4DF41F7B3C9110AB95DBE9A",
                            "activitySpecification": {
                                "id": "3061cd84-c14c-420a-a919-07393cd2ecf3",
                                "version": [
                                    {
                                        "id": "838fca86-db62-441c-9c25-32ecb1e6ff34",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 2,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Not Started",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-23T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-25T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-12T18:00:10.932+0000",
                            "currentEndDate": "2018-07-16T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        },
                        {
                            "id": "89DDD05665424CFCA5B2994518741600",
                            "activitySpecification": {
                                "id": "61229792-94d3-4345-97e9-3ad176f7512a",
                                "version": [
                                    {
                                        "id": "06d02086-669c-4b1b-b16a-614d3744f536",
                                        "versionNumber": 1
                                    }
                                ]
                            },
                            "wbs": {
                                "id": "35BF356E23DC491C975AF7545A633A5C"
                            },
                            "duration": {
                                "day": 1,
                                "hour": 0,
                                "minute": 0
                            },
                            "state": "Optional",
                            "needAttention": false,
                            "eligible": false,
                            "createdDate": "2018-07-10T04:40:10.245+0000",
                            "estimatedStartDate": "2018-07-25T18:00:48.000+0000",
                            "estimatedEndDate": "2018-07-26T18:00:48.000+0000",
                            "businessCalendarIndicator": true,
                            "plan": {
                                "id": "73138AF15E8E4AF4B49670E27F2C38031531197610"
                            },
                            "isScheduled": false,
                            "reworkCounter": 0,
                            "reworkReason": {},
                            "slmDetail": {
                                "businessCalendarSpec": {
                                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                                }
                            },
                            "delayInMillis": 0,
                            "currentStartDate": "2018-07-16T18:00:10.932+0000",
                            "currentEndDate": "2018-07-17T18:00:10.932+0000",
                            "implementationType": "Human",
                            "status": "Not Started",
                            "extension": {
                                "TaskId": null,
                                "TaskOwnerId": null
                            }
                        }
                    ],
                    "needAttention": false,
                    "slmDetail": {
                        "businessCalendarSpec": {
                            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                        }
                    }
                }
            ],
            "needAttention": false,
            "slmDetail": {
                "businessCalendarSpec": {
                    "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
                }
            }
        }
    ],
    "slmDetail": {
        "businessCalendarSpec": {
            "id": "7f41e01a-ecae-414d-ba21-24b6d5c0a9a4"
        }
    }
};

let entityArray = plan.dependencyPlan.depedencyGroup[0].entity;
let activities = {};
let pointedActivityIds = [];

entityArray.forEach(function(entity) {
  let activity = {
    id: entity.entityId,
    children: []
  };
  activities[activity.id] = activity;
});

let entityDependency = plan.dependencyPlan.entityDependencyDescriptor;
entityDependency.forEach(function(entityDependency) {
  let parent = activities[entityDependency.parent.entityId];
  let dependent = activities[entityDependency.dependent.entityId];
  pointedActivityIds.push(dependent.id);
  parent.children.push(dependent);
});

let activityIds = Object.keys(activities);
let difference =activityIds.filter(x => !pointedActivityIds.includes(x)); 

let activityRoot = activities[difference[0]];
render(<Pnd plan={activityRoot} />, div);

