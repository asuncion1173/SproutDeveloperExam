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
                    <th>SENT THROUGH</th>
                    <th>DATE CREATED</th>
                    <th>START DATE</th>
                    <th>END DATE</th>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tr>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                    <td>FOR YOUR ACTIO...</td>
                </tr>
                <tfoot>
                    <tr>
                        <td className="left">1</td>
                        <td className="center" colspan="5">1</td>
                        <td className="right">1</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Table