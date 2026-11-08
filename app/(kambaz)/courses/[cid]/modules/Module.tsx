"use client";
import { ReactNode } from "react";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Module({
                                   module,
                                   children,
                               }: {
    module: CourseModule;
    children?: ReactNode;
}) {
    const updateModule = useModulesStore((state) => state.updateModule);

    return (
        <div className="mb-3 rounded border border-gray-300">
            <div className="flex items-center justify-between border-b border-gray-300 bg-gray-100 p-2 font-semibold">
                {module.editing ? (
                    <input
                        className="flex-1 rounded border border-neutral-300 px-2 py-1 text-sm font-normal"
                        defaultValue={module.name}
                        id={`wd-module-name-${module._id}`}
                        onBlur={(e) =>
                            updateModule({ ...module, name: e.target.value, editing: false })
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                updateModule({
                                    ...module,
                                    name: (e.target as HTMLInputElement).value,
                                    editing: false,
                                });
                            }
                        }}
                        autoFocus
                    />
                ) : (
                    <span>{module.name}</span>
                )}
                <ModuleControlButtons moduleId={module._id} />
            </div>
            {children && <ul className="m-0 list-none p-0">{children}</ul>}
        </div>
    );
}