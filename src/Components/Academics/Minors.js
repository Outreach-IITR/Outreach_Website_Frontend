import React, { Component } from 'react'
import Group from './assets/Group.svg'
import Group2 from './assets/Group2.svg'
import './minors.css'
class Minors extends Component {
    render() {
        return (
            <div id="bottom">
                <h2 id="minors">Minors and Honours</h2>

                <div id="r1">
                    <div className="lcont">
                        <h3>Minor Specialization</h3>
                        <p>
                            Students who are willing to excel in some specialization other than his<br />/her own department,
                            have the option for doing a Minor specialization in<br /> that department. Earlier,
                            one needed to have a CGPA{'>'}7.5 to opt  for a <br />minor. Recent changes have scrapped this
                            rule, however, a limit on the <br />number of students in a course might be imposed.
                            It consists of 4-8<br />
                            additional courses equivalent to 18-30 credits
                            that need to be taken up in <br />the pre-final and
                            the final year of college. Also, it is not necessary
                            for the <br />specialization to belong to the same
                            discipline of study and it may be <br />taken from
                            any one of engineering, management, science and
                            humanities. <br />The most recent addition to this basket
                            was a minor in Economics. Before <br />the beginning of
                            every semester, courses being offered for a particular <br />minor
                            specialization are floated and students have to pick up a
                            few from<br /> that basket. These courses are called Minor Specialization
                            Courses and<br /> have a fixed number of seats. For the people who
                            successfully fulfill the <br />required credits have the name of the
                            minor specialization aptly<br /> mentioned on their degree they receive upon graduation.
                        </p>
                    </div>
                    <img alt="img" src={Group} />
                </div>
                <div id="r2">
                    <div className="lcont">
                        <h3>Departmental Honours</h3>
                        <p>
                            The basic structure of Departmental Honours is similar to Minor Specialization.<br />
                            Students with interests in their own department and having a CGPA greater than<br /> 7.5
                            can take 4-5 extra courses from their department and pass out with an <br />Honours degree.
                            The courses for gaining an honours degree are floated before the <br />beginning of
                            every semester by the concerned department and are called <br />Departmental Honours
                            Courses. Similar to Minors, a student passing out with an <br />Honours will have it
                            mentioned in his degree.
                        </p>
                    </div>
                    <img alt="img" src={Group2} />
                </div>
                <div id="r3">
                    <h3>Switching to an Integrated Dual Degree Program(IDD) from BTech Program</h3>
                    <p>
                        Students at the end of their 3rd year are offered an option to switch to
                        an integrated dual degree program (BTech + MTech).<br /> The MTech degree choices
                        are unique to the student’s BTech branch and they depend on whether it
                        satisfies the required <br />eligibility criteria. This option to switch is
                        offered only to the students having a CGPA greater than 7.5 and an
                        approval from <br />their respective departments.
                    </p>
                </div>
            </div>
        )
    }
}

export default Minors
