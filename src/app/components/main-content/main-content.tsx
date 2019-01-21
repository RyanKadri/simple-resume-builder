import { h } from "preact";
import './detail-section.scss';
import './education-section.scss';
import './experience-section.scss';

export const MainContent = () => { 
    return <main>
        <section class="detail-section">
            <header>Interests</header>
            <p class="detail-body">I love the web as a platform for software development. 
                If I could only pick one language to work in for the next few years,
                it would be TypeScript. I like hacking around with new browser APIs
                and love how much there already is out there.
            </p>
        </section>
        <section class="detail-section">
        <header>Experience</header>
        <ol class="past-jobs detail-body">
            <li class="job detail-sub-section">
            <header>
                <em>SEI Investments</em>
                <small>Oaks PA
                    <i class="summary">Test Automation Developer / Tech Lead</i>
                </small>
            </header>
            <time>June 2015 - September 2018</time>
            <ul class="details">
                <li>Created an in-house test orchestration framework</li>
                <li>Acted as a tech lead as my team grew from 3 to 28 developers</li>
                <li>Provided technical designs for upcoming agile development</li>
            </ul>
            </li>
            <li class="job detail-sub-section">
                <header>
                    <em>NYI</em>
                    <small>
                        Bridgewater NJ
                        <i class="summary">Data Center Technician</i>
                    </small>
                </header>
                <time>October 2013 - May 2015</time>
                <ul class="details">
                <li>Set up and maintained clients' physical and virtual servers</li>
                <li>Responded to service tickets on NYI's helpdesk</li>
                </ul>
            </li>
            <li class="job detail-sub-section">
            <header><em>Other Jobs</em></header>
            <ol class="details">
                <li><em>Paintball Instructor</em> - Helped develop a paintball course at a Boy Scout Camp</li>
                <li><em>Archery Instructor</em> - Taught kids archery and kept them safe in the process</li>
                <li><em>Warehouse Assistant</em> - Helped process orders and quality-test products</li>
            </ol>
            </li>
        </ol>
        </section>
        <section class="detail-section">
            <header>Education</header>
            <section class="detail-body">
                <section class="detail-sub-section">
                    <header>
                        <em>Rutgers University</em><small>New Brunswick NJ <i class="summary">Computer Engineering</i></small>
                    </header>
                    <time>September 2012 - May 2015</time>
                    <section class="details">
                        <p>Received the Rutgers Presidential Scholarship</p>
                        <p>Honors Engineering</p>
                        <strong>GPA: 3.92</strong>
                    </section>
                </section>
            </section>
        </section>
        <section class="detail-section">
            <header>Projects</header>
            <ol></ol>
        </section>
        <aside class="view-online">
            View this resume online at <a href="https://ryankadri.github.io"></a>
        </aside>
    </main>
}