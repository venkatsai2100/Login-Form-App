import Layout from "./Layout";
import { auth } from "./Auth";
import {useEffect, useState} from "react"
import {data} from './data'

function Dashboard(){
    const Data=data.data;
    Data.sort((obj1,obj2)=>{
        if(obj1.employee_name<obj2.employee_name){
            return -1;
        }else if(obj1.employee_name>obj2.employee_name){
            return 1;
        }
        return 0;
    })
    return(
        <div>
        <Layout/>
        <div className="w-75" style={{margin:"auto 200px"}}>
        <table class=" table table-bordered table-striped">
            <thead>
                <tr>
                <th  style={{backgroundColor:"black",color:"white"}}>ID</th>
                <th style={{backgroundColor:"black",color:"white"}}>EMPLOYEE_NAME</th>
                <th style={{backgroundColor:"black",color:"white"}}>EMPLOYEE_SALARY</th>
                <th style={{backgroundColor:"black",color:"white"}}>EMPLOYEE_AGE</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((employee,index)=>{
                    return(
                    <tr>
                   <td>{index+1}</td>
                   <td>{employee.employee_name}</td>
                   <td>{employee.employee_salary}</td>
                   <td>{employee.employee_age}</td>
                   </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        <footer className="bg-black w-100vw" style={{height:"50px"}}>
          <p className="text-white" style={{fontSize:"25px"}}>CopyRight &copy;</p>
      </footer>
        </div>
    )
            }
    export default Dashboard;