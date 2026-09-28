export default function ParagraphTag() {
    return (
        <div id="wd-p-tag">
            <h4>Paragraph Tag</h4>
            <p id="wd-p-1">
                This is a paragraph. We often separate a long set of sentences with
                vertical spaces to make the text easier to read. Browsers ignore
                vertical white spaces and render all the text as one single set of
                sentences. To force the browser to add vertical spacing, wrap the
                paragraphs you want to separate with the paragraph tag
            </p>
            <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-3">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
            </p>
            <p id="wd-p-4">
                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
            </p>
            <p id="wd-p-your-1">
                I&apos;m originally from Hyderabad, India, where I did my undergrad in
                Computer Science with a focus on AI and ML. After that I moved to
                Boston to start my Master&apos;s in Computer Science at Northeastern
                University. Before grad school I interned at IBM working on AI
                projects, and I also did a research internship at ADRIN working with
                satellite data. I&apos;ve worked on a few projects along the way too,
                including a hand gesture recognition system and a ship detection
                project using satellite imagery, which got published at a conference.
            </p>
            <p id="wd-p-your-2">
                I&apos;m taking this course because I want to become an ML engineer,
                and I don&apos;t just want to know how to build a model, I want to
                understand the whole process of how a product actually gets built
                and reaches real users, from start to end.
            </p>
            <p id="wd-ai-p">
                Wrapping text in a paragraph tag creates vertical spacing because
                browsers apply a default top and bottom margin to the p element.
                Without that tag, adjacent lines of text would render as one
                continuous block with no visual gap between them.
            </p>
        </div>
    );
}