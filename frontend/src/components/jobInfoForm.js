import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import "./styles.css";

export default function JobInfoForm(){
    return(
        <>
        <form className="jobGrid">
            <MDBRow>
                <MDBCol><MDBInput label='Estimate #'/></MDBCol>
                <MDBCol><MDBInput label='Job Name'/></MDBCol>
                <MDBCol><MDBInput label='Date '/></MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol size={8}><MDBInput label='Street Address'/></MDBCol>
                <MDBCol><MDBInput label='City'/></MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol size={3}><MDBInput label='$ Total'/></MDBCol>
                <MDBCol size={3}><MDBInput label='%'/></MDBCol>
            </MDBRow>
            <hr/>
            <MDBBtn type="submit" block>Create Job</MDBBtn>
        </form>
        </>
    );
};