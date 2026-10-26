import TypeAnnotations from "./TypeAnnotations";
import ObjectTypes from "./ObjectTypes";
import Interfaces from "./Interfaces";

export default function TypesPage() {
    return (
        <div id="wd-lab3-types" className="p-4">
            <h2>TypeScript Types</h2>
            <TypeAnnotations />
            <ObjectTypes />
            <Interfaces />
        </div>
    );
}