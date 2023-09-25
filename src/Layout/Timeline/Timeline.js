import React from 'react'
import "./Timeline.css"


export default function Timeline() {
  return (
    <div className='TimelineM'>

        <div className="head">
            <div className="label">
            <div className="text-wrapper">Timeline</div>
            </div>
        </div>
        <div className="para">
            <div className="label">
                <p className="here-is-the">
                Here is the breakdown of the time we anticipate <br />
                using for the upcoming event.
                </p>
            </div>
        </div>


        <div className="timeline">
            <ul>
                <li>
                    <div className="container">
                        <h3>Hackathon Announcement</h3>
                        <p>
                        The getlinked tech hackathon 1.0 is formally announced
                        <br />
                        to the general public and teams begin to get ready to register
                        </p>
                    </div>
                    <div className="time">
                        <h4>November 18, 2023</h4>
                    </div>
                </li>
                <li>
                    <div className="container">
                        <h3>Teams Registration begins</h3>
                        <p>Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                    </div>
                    <div className="time">
                        <h4>November 18, 2023</h4>
                    </div>
                </li>
                <li>
                    <div className="container">
                        <h3>Teams Registration ends</h3>
                        <p>Interested Participants are no longer Allowed to
register</p>
                    </div>
                    <div className="time">
                        <h4>November 18, 2023</h4>
                    </div>
                </li>
                <li>
                    <div className="container">
                        <h3>Announcement of the accepted teams
and ideas</h3>
                        <p>All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced</p>
                    </div>
                    <div className="time">
                        <h4>November 18, 2023</h4>
                    </div>
                </li>  
                <li>
                    <div className="container">
                        <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                        <p>Accepted teams can now proceed to build their
ground breaking skill driven solutions</p>
                    </div>
                    <div className="time">
                        <h4>November 18, 2023</h4>
                    </div>
                </li>  
                <li>
                    <div className="container">
                        <h3>Demo Day</h3>
                        <p>Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day</p>
                    </div>
                    <div className="time">
                        <h4>November 18, 2023</h4>
                    </div>
                </li>
                
            
                
                
               
                <div style={{clear:"both"}}></div>
            </ul>
        </div>
    </div>
  )
}
