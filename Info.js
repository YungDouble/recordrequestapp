import React from 'react'

const Info = ({info}) => {
    return(
        <div className="form-template">
            {
                info.map(info => { 
                    return(
                        
                    
                })
                <div>Date: { info.date }</div>
                <div>First Name: { info.fname }</div>
                <div>Last Name: { info.lname }</div>
                <div>District: { info.district }</div>
                <div>Record Series: { info.rseries }</div>
                <div>Requester Email: { info.email }</div>
                <div>Doctype: { info.doctpye }</div>
            
            })
            
        }   
        </div>


export default Info
