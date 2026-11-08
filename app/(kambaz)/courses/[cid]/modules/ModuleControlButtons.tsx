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
                aria-label="Edit module"
                title="Edit module"
                onClick={() => editModule(moduleId)}
                className="border-0 bg-transparent p-0"
            >
                <FaPencilAlt className="text-blue-600" />
            </button>
            <button
                type="button"
                id={`wd-delete-module-${moduleId}`}
                aria-label="Delete module"
                title="Delete module"
                onClick={() => deleteModule(moduleId)}
                className="border-0 bg-transparent p-0"
            >
                <FaTrash className="text-red-600" />
            </button>
            <FaCheckCircle className="text-green-600" />
            <BsPlus className="text-3xl" />
            <IoEllipsisVertical className="text-xl" />
        </div>
    );
}