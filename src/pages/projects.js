import { MDBBadge,MDBModal, MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBModalContent, MDBModalDialog, MDBTable, MDBTableBody, MDBTableHead, MDBModalHeader, MDBModalBody } from "mdb-react-ui-kit";
import { useState } from "react";
import JobInfoForm from "../components/jobInfoForm";



export default function Project(){
    //setting add job modal and useState
    const[addJobModal, setJobModal] = useState(false);
    const toggleAddjob=()=>setJobModal(!addJobModal);

    const QuickBtn = ({label})=>{
        return(
        <div className="quickBtn">
            <div className="bigBtn" onClick={toggleAddjob}>
                <MDBIcon icon="download"/>
            </div>
            <p>{label}</p>
        </div>
        );
    }

    return(
    <>
        <MDBModal show={addJobModal} setShow={setJobModal} tabIndex='-1'>
            <MDBModalDialog centered size="lg">
                <MDBModalContent>
                    <MDBModalHeader>Enter Job Info</MDBModalHeader>
                    <MDBModalBody>
                        <JobInfoForm/>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>




            <div className="quickAdd">
                <div className="table-header">
                    Quick Actions
                </div>
                <div className="table1">
                    <QuickBtn label="Estimate"/>
                    <QuickBtn label="Invoice"/>
                    <QuickBtn label="Add Job"/>
                </div>
           </div>
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>101</td>
                            <td>Alan Carrillo</td>
                            <td>10/17/1998</td>
                            <td>1810 William Way, Concord CA</td>
                            <td>
                                <MDBDropdown>
                                    <MDBDropdownToggle size='sm' className="rounded-9 bg-success">
                                        Submitted
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>submitted</MDBDropdownItem>
                                        <MDBDropdownItem link>accepted</MDBDropdownItem>
                                        <MDBDropdownItem link>rejected</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Alan Carrillo</td>
                            <td>10/17/1998</td>
                            <td>1810 William Way, Concord CA</td>
                            <td>
                                <MDBDropdown>
                                    <MDBDropdownToggle size='sm' className="rounded-9 bg-warning">
                                        Declined
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>submitted</MDBDropdownItem>
                                        <MDBDropdownItem link>accepted</MDBDropdownItem>
                                        <MDBDropdownItem link>rejected</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
    </>
    );
}