import { FaCheckCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleControlButtons({
                                                 moduleId,
                                             }: {
    moduleId: string;
}) {
    const deleteModule = useModulesStore((state) => state.deleteModule);
    const editModule = useModulesStore((state) => state.editModule);
    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                id={`wd-edit-module-${moduleId}`}
                onClick={() => editModule(moduleId)}
                className="inline-flex items-center gap-1 border-0 bg-transparent p-0 text-blue-600"
            >
                <FaPencilAlt /> Edit
            </button>
            <button
                type="button"
                id={`wd-delete-module-${moduleId}`}
                onClick={() => deleteModule(moduleId)}
                className="inline-flex items-center gap-1 border-0 bg-transparent p-0 text-red-600"
            >
                <FaTrash /> Delete
            </button>
            <FaCheckCircle className="text-green-600" />
            <BsPlus className="text-3xl" />
            <IoEllipsisVertical className="text-xl" />
        </div>
    );
}