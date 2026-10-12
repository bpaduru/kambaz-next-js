export default function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
                <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
                <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
                    Column 3
                </div>
            </div>
            <div className="wd-flex-row-container" id="wd-your-flex-row">
                <div className="wd-bg-color-green wd-fg-color-white">A</div>
                <div className="wd-bg-color-yellow wd-width-110px">B fixed</div>
                <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
                    C grows
                </div>
            </div>
            <div className="wd-flex-row-container" id="wd-ai-flex">
                <div className="wd-bg-color-gray wd-width-110px">Fixed</div>
                <div className="wd-bg-color-red wd-fg-color-white">Middle</div>
                <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
                    Grows
                </div>
            </div>
        </div>
    );
}