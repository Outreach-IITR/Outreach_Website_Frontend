// ************* Created by Sarveshwar Pandey************
import React, { Component } from 'react'
import Group from './Assets/Group.png'
import Group2 from './Assets/Group2.png'
import './minors.css'
class Minors extends Component {
    render() {
        return (
            <div id="bottom">
                

                <div id="r1">
                    <div className="lcont l1">
                    <h2 id="minors">Minors and Honours</h2>
                        <h3>Minor Specialization</h3>
                        <p>
                            Students who are willing to excel in some specialization other than his/her own department,
                            have the option for doing a Minor specialization in that department. Earlier,
                            one needed to have a CGPA{'>'}7.5 to opt  for a minor. Recent changes have scrapped this
                            rule, however, a limit on the number of students in a course might be imposed.
                            It consists of 4-8
                            additional courses equivalent to 18-30 credits
                            that need to be taken up in the pre-final and
                            the final year of college. Also, it is not necessary
                            for the specialization to belong to the same
                            discipline of study and it may be taken from
                            any one of engineering, management, science and
                            humanities. The most recent addition to this basket
                            was a minor in Economics. Before the beginning of
                            every semester, courses being offered for a particular minor
                            specialization are floated and students have to pick up a
                            few from that basket. These courses are called Minor Specialization
                            Courses and have a fixed number of seats. For the people who
                            successfully fulfill the required credits have the name of the
                            minor specialization aptly mentioned on their degree they receive upon graduation.
                        </p>
                    </div>
                    <div className="minors_img minors_img1">
                        
                    <img alt="img" src={Group} />
                        
                    </div>
                    
                </div>
                <div id="r2">
                    <div className="lcont l2">
                        <h3>Departmental Honours</h3>
                        <p >
                            The basic structure of Departmental Honours is similar to Minor Specialization.
                            Students with interests in their own department and having a CGPA greater than 7.5
                            can take 4-5 extra courses from their department and pass out with an Honours degree.
                            The courses for gaining an honours degree are floated before the beginning of
                            every semester by the concerned department and are called Departmental Honours
                            Courses. Similar to Minors, a student passing out with an Honours will have it
                            mentioned in his degree.
                        </p>
                    </div>
                    <div className="minors_img">
                    <img alt="img" src={Group2} />
                    </div>
                </div>
                <div id="r3">
                    <h3>Switching to an Integrated Dual Degree Program(IDD) from BTech Program</h3>
                    <p>
                        Students at the end of their 3rd year are offered an option to switch to
                        an integrated dual degree program (BTech + MTech). The MTech degree choices
                        are unique to the student’s BTech branch and they depend on whether it
                        satisfies the required eligibility criteria. This option to switch is
                        offered only to the students having a CGPA greater than 7.5 and an
                        approval from their respective departments.
                    </p>
                    <h3 id="MTech_para">Change of Registration from M Tech/IDD to Ph.D.</h3>
                    <p>
                    Students pursuing M.Tech./M.Arch/ MURP/ IDD/ IMT programs at IIT Roorkee with CGPA not less than 8.50 may opt for a lateral entry to the Ph.D. program. This option can be availed after completing two semesters of M.Tech/M.Arch/MURP, or after completing all theory courses of IDD/IMT.
                    </p>
                </div>
            </div>
        )
    }
}

export default Minors
