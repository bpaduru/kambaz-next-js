export default function Dimensions() {
    return (
        <div id="wd-css-dimensions">
            <h2>Dimension</h2>
            <div>
                <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
                <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
                    Landscape
                </div>
                <div className="wd-dimension-square wd-bg-color-red">Square</div>
                <div className="wd-dimension-wide wd-bg-color-yellow">
                    This box stays 120 pixels wide and 60 pixels tall even though this
                    is a much longer sentence than the other boxes have.
                </div>
                <div id="wd-ai-dimension" className="wd-ai-dimension">
                    This sample box is declared as 100 pixels wide and 50 pixels tall, so
                    this long sentence wraps and spills out below the red background.
                </div>
            </div>
        </div>
    );
}