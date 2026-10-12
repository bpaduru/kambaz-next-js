import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
    return (
        <div id="wd-modules">
            <Module title="Week 1">
                <Lesson title="LEARNING OBJECTIVES">
                    <li>Introduction to the course</li>
                    <li>Learn what is Web Development</li>
                </Lesson>
            </Module>
            <Module title="Week 2" />
            <Module title="Week 3" />
        </div>
    );
}