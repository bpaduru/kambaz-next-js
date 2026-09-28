export default function YourForm() {
    return (
        <>
            <h4>Student Profile</h4>
            <label htmlFor="wd-your-first-name">First name:</label>
            <input
                type="text"
                defaultValue="Jane"
                id="wd-your-first-name"
            />{" "}
            <br />
            <label htmlFor="wd-your-last-name">Last name:</label>
            <input
                type="text"
                defaultValue="Doe"
                id="wd-your-last-name"
            />
            <br />
            <label htmlFor="wd-your-student-id">Student ID:</label>
            <input
                type="password"
                placeholder="Enter your student ID"
                id="wd-your-student-id"
            />
            <br />

            <label>Bio:</label>
            <br />
            <textarea
                id="wd-your-bio"
                cols={30}
                rows={6}
                defaultValue="Sample bio: I'm a graduate student studying Computer Science. I'm interested in software engineering and enjoy learning how products get built from start to finish."
            />
            <br />

            <label>Class standing:</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-your-freshman" />
            <label htmlFor="wd-your-freshman">Freshman</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-your-sophomore" />
            <label htmlFor="wd-your-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-your-junior" />
            <label htmlFor="wd-your-junior">Junior</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-your-senior" />
            <label htmlFor="wd-your-senior">Senior</label>
            <br />
            <input
                type="radio"
                name="your-class-standing"
                id="wd-your-graduate"
                defaultChecked
            />
            <label htmlFor="wd-your-graduate">Graduate</label>
            <br />

            <label>Enrollment type:</label>
            <br />
            <input
                type="radio"
                name="your-enrollment-type"
                id="wd-your-full-time"
                defaultChecked
            />
            <label htmlFor="wd-your-full-time">Full-time</label>
            <br />
            <input type="radio" name="your-enrollment-type" id="wd-your-part-time" />
            <label htmlFor="wd-your-part-time">Part-time</label>
            <br />

            <label>Interests:</label>
            <br />
            <input type="checkbox" name="your-interests" id="wd-your-int-ml" defaultChecked />
            <label htmlFor="wd-your-int-ml">Machine Learning</label>
            <br />
            <input type="checkbox" name="your-interests" id="wd-your-int-webdev" />
            <label htmlFor="wd-your-int-webdev">Web Development</label>
            <br />
            <input type="checkbox" name="your-interests" id="wd-your-int-cv" defaultChecked />
            <label htmlFor="wd-your-int-cv">Computer Vision</label>
            <br />
            <input type="checkbox" name="your-interests" id="wd-your-int-sports" />
            <label htmlFor="wd-your-int-sports">Robotics</label>
            <br />

            <label htmlFor="wd-your-major">Major:</label>
            <br />
            <select id="wd-your-major" defaultValue="CS">
                <option value="CS">Computer Science</option>
                <option value="DS">Data Science</option>
                <option value="EE">Electrical Engineering</option>
                <option value="IS">Information Systems</option>
            </select>
            <br />

            <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
            <br />
            <select
                multiple
                id="wd-your-topics"
                defaultValue={["ALGORITHMS", "AI"]}
            >
                <option value="ALGORITHMS">Algorithms</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="WEBDEV">Web Development</option>
                <option value="SYSTEMS">Systems Design</option>
            </select>
            <br />

            <label htmlFor="wd-your-email">School email:</label>
            <input
                type="email"
                defaultValue="jane@university.edu"
                id="wd-your-email"
            />
            <br />
            <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
            <input
                type="number"
                defaultValue="2028"
                min={2026}
                max={2032}
                id="wd-your-grad-year"
            />
            <br />
            <label htmlFor="wd-your-program-start">Program start date:</label>
            <input
                type="date"
                defaultValue="2026-01-05"
                id="wd-your-program-start"
            />
            <br />
            <label htmlFor="wd-your-excitement">
                How excited are you about this course (0-10):
            </label>
            <input
                type="range"
                defaultValue="5"
                min={0}
                max={10}
                id="wd-your-excitement"
            />
            <br />

            <button id="wd-your-save" type="submit">
                Save
            </button>
            <button id="wd-your-cancel" type="button">
                Cancel
            </button>
        </>
    );
}
