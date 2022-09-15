import React from "react";
import '../index.css';

const post = "";

function Announcements() {
    return(
        <section>
            <h1>Announcements</h1>
            <p>View, create, or edit announcements for all employees of your company</p>
            <div>
            <button className="post" id="post" onClick={post}><i class="fa fa-plus" aria-hidden="true"></i>Post an Announcement</button>
            </div>       
        </section>


    )
}

export default Announcements