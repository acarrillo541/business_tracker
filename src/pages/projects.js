import { MDBBadge, MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const QuickBtn = ({label})=>{
    return(
    <div className="quickBtn">
        <div className="bigBtn">
            <MDBIcon icon="download"/>
        </div>
        <p>{label}</p>
    </div>
    );
}

export default function Project(){
    return(
    <>
            <div className="quickAdd">
                <div className="table-header">
                    Quick Actions
                </div>
                <div className="table1">
                    <QuickBtn label="Estimate"/>
                    <QuickBtn label="Invoice"/>
                    <QuickBtn label="Receipt"/>
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