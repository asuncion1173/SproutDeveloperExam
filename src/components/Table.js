import React from "react";
import '../index.css';

const all = "";

function Table() {
    return(
        <section className="wholeform">
            <div className="topoptions">
                <div className="leftside">
                <button type={all}><span>10</span>All</button>
                <button type={all}><span className="draft">10</span>Drafts</button>
                </div>
                <div className="rightside">
                <select class="filter" placeholder="Filter by">
                    <option>Filter by</option>
                </select>
                <span className="fa fa-search"></span>
                <input placeholder="Search..."></input>
                </div>
            </div>
            <table>
                <tr>
                    <th>TITLE</th>
                    <th>MESSAGE</th>
                    <th>SENT BY</th>
                    <th>SENT THROUGH <i class="fa fa-info-circle" aria-hidden="true"></i></th>
                    <th>DATE CREATED</th>
                    <th>START DATE</th>
                    <th>END DATE</th>
                </tr>
                <tr>
                    <td>[FOR YOUR ACTIO...</td>
                    <td>In line with the inc...</td>
                    <td>Roe, Ken</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i></td>
                    <td>02/17/2022</td>
                    <td>02/17/2022<p className="time-start">9:30 AM</p></td>
                    <td>02/22/2022<p className="time-end">7:30 PM</p></td>
                </tr>
                <tr>
                    <td>Annual Physical E...</td>
                    <td>In compliance with...</td>
                    <td>Roe, Ken</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i></td>
                    <td>08/30/2020</td>
                    <td>09/01/2020<p className="time-start">9:00 AM</p></td>
                    <td>09/30/2020<p className="time-end">6:00 PM</p></td>
                </tr>
                <tr>
                    <td>Mid-Autumn Festi...</td>
                    <td>We wish everyone a...</td>
                    <td>Doe, Jane</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i></td>
                    <td>08/22/2020</td>
                    <td>08/23/2020<p className="time-start">12:00 PM</p></td>
                    <td>08/25/2020<p className="time-end">9:30 AM</p></td>
                </tr>
                <tr>
                    <td>50th General Asse...</td>
                    <td>Expelliarmus! Chec...</td>
                    <td>Doe, Jane</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i></td>
                    <td>08/15/2020</td>
                    <td>08/23/2020<p className="time-start">9:00 AM</p></td>
                    <td>08/25/2020<p className="time-end">6:30 PM</p></td>
                </tr>
                <tr>
                    <td>New Employees</td>
                    <td>Let us all welcom...</td>
                    <td>King, Chow</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i></td>
                    <td>08/10/2020</td>
                    <td>08/15/2020<p className="time-start">8:30 AM</p></td>
                    <td>08/18/2020<p className="time-end">6:30 PM</p></td>
                </tr>
                <tr>
                    <td>Stocks as of Aug...</td>
                    <td>Our investors have...</td>
                    <td>King, Chow</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i></td>
                    <td>07/30/2020</td>
                    <td>08/01/2020<p className="time-start">9:00 AM</p></td>
                    <td>08/04/2020<p className="time-end">6:30 PM</p></td>
                </tr>
                <tr>
                    <td>Tip of the Week</td>
                    <td>To stay hydrated, d...</td>
                    <td>Roe, Ken</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i></td>
                    <td>02/26/2020</td>
                    <td>02/27/2020<p className="time-start">9:00 AM</p></td>
                    <td>03/15/2020<p className="time-end">6:30 PM</p></td>
                </tr>
                <tr>
                    <td>Employees of the M...</td>
                    <td>Congratulations to ...</td>
                    <td>King, Chow</td>
                    <td><i class="fa fa-mobile" aria-hidden="true"></i></td>
                    <td>01/12/2020</td>
                    <td>01/13/2020<p className="time-start">9:00 AM</p></td>
                    <td>12/20/2019<p className="time-end">6:30 PM</p></td>
                </tr>
                <tr>
                    <td>Breakfast Menu</td>
                    <td>We will be introduci...</td>
                    <td>Gus, Amon</td>
                    <td><i class="fa fa-mobile" aria-hidden="true"></i></td>
                    <td>12/15/2019</td>
                    <td>12/20/2019<p className="time-start">9:00 AM</p></td>
                    <td>12/20/2019<p className="time-end">6:30 PM</p></td>
                </tr>
                <tr>
                    <td>Cafe Relocation</td>
                    <td>With the ongoing re...</td>
                    <td>Lavjsta, Asta</td>
                    <td><i class="fa fa-bookmark" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i></td>
                    <td>12/14/2019</td>
                    <td>12/15/2019<p className="time-start">9:00 AM</p></td>
                    <td>12/19/2019<p className="time-end">6:30 PM</p></td>
                </tr>
                <tfoot>
                    <tr>
                        <td className="left">Items per page 
                            <select>
                                <option>10</option>
                            </select>
                        </td>
                        <td className="center" colspan="5">
                            <i class="fa fa-step-backward" aria-hidden="true"></i>
                            <i class="fa fa-caret-left" aria-hidden="true"></i>
                            Page<div className="page-num">1</div> of 1 <i class="fa fa-caret-right" aria-hidden="true"></i>
                            <i class="fa fa-step-forward" aria-hidden="true"></i>
                        </td>
                        <td className="right">Showing 1 - 10 of 1</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Table