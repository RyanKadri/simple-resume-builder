import { h } from "preact";
import './sidebar.scss';

export const Sidebar = () => {
    return <nav class="sidebar">
        <div class="container">
            <header>
                <h2 class="name">Ryan Kadri</h2>
                <h4 class="profession">Software Engineer</h4>
            </header>
            <address class="physical">401 Conestoga Way
                Apt V103
                Eagleville, PA 19403
            </address>
            <address class="electronic"><a class="phone" href="tel:1908-294-3740">908-294-3740</a>
                <a type="email" href="mailto:ryankadri1@gmail.com">ryankadri1@gmail.com</a>
                <a class="github" href="https://github.com/RyanKadri" data-friendly="Github"></a></address>
        </div>
      </nav>
}